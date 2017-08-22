// Copyright (c) 2013, Fabrice Robinet
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//  * Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//
//  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
// THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

require("runtime/dependencies/gl-matrix");
var Base = require("runtime/base").Base;
var Transform = require("runtime/transform").Transform;
var Utilities = require("runtime/utilities").Utilities;

var glTFNode = exports.glTFNode = Object.create(Base, {
    
    //just for glTFNode singleton
    currentId: { value: 0, writable:true },

    bumpId: {
        value: function() {
            return glTFNode._id++;
        }
    },

    _children: { value: null, writable: true },

    children: {
        get: function() {
            return this._children;
        },
        set: function(value) {
            this._children = value;
        }
    },

    _id: { value: null, writable: true },

    id: {
        get: function() {
            return this._id;
        },
        set: function(value) {
            this._id = value;
        }
    },

    _hidden: { value: null, writable: true },

    hidden: {
        get: function() {
            return this._hidden;
        },
        set: function(value) {
            this._hidden = value;
        }
    },

    _computeBBOXIfNeeded: {
        enumerable: false,
        value: function() {
            if (!this._boundingBox) {

                var meshes = this._properties["meshes"];
                var count = this.meshes.length;
                if (count > 0) {
                    var bbox = this.meshes[0].boundingBox;
                    if (bbox) {
                        var i;
                        for (i = 1 ; i <  count ; i++) {
                            var aBBox = this.meshes[i].boundingBox;
                            if (aBBox) { //it could be not here here as we are loading everything asynchronously
                                bbox = Utilities.mergeBBox(bbox, aBBox);
                            }
                        }

                        this._boundingBox = bbox;//Utilities.transformBBox(bbox, this.transform);
                    }
                }
            }
        }
    },

    _boundingBox: {
        enumerable: false,
        value: null,
        writable: true
    },

    boundingBox: {
        enumerable: true,
        get: function() {

            this._computeBBOXIfNeeded();
            return this._boundingBox;
        },
        // we let the possibility to override by hand the bounding volume.
        set: function(value) {
            this._boundingBox = value;
        }
    },

    meshesDidChange: {
        value: function(meshes) {
            this._boundingBox = null; //invalidate bounding box
        }
    },

    nodesDidChange: {
        value: function(nodes) {
        }
    },

    _parent: { value: null, writable: true},

    parent: {
        get: function() {
            return this._parent;
        }
    },

    init: {
        value: function() {
            this.__Base_init();
            this._children = [];
            this._transform = Object.create(Transform).init();
            this._properties["meshes"] = [];

            var self = this;
            this._properties["meshes"].push = function(data) {
                var result = Array.prototype.push.call(this, data);
                self.meshesDidChange(this);
                return result;
            }

            this._children.push = function(data) {
                var result = Array.prototype.push.call(this, data);
                data._parent = self;
                self.nodesDidChange(this);
                return result;
            }

            this._properties["cameras"] = [];
            this._properties["lights"] = [];

            this._worldMatrixIsDirty = true;
            this._worldMatrix = mat4.create();

            return this;
        }
    },

    getPropertyArrayNamed: {
        value: function(name) {
            return this._properties[name]
        }
    },

    _observers: { value: null, writable: true},

    addObserver: {
        value: function(observer) {
            if (this._observers == null) {
                this._observers = [];
            }

            if (this._observers.indexOf(observer) === -1) {
                this._observers.push(observer);
            } else {
                console.log("WARNING attempt to add 2 times the same observer in transform")
            }
        }
    },

    removeObserver: {
        value: function(observer) {
            if (this._observers) {
                var index = this._observers.indexOf(observer);
                if (index !== -1) {
                    this._observers.splice(index, 1);
                }
            }
        }
    },

    _transform: { value: null, writable: true },

    transform: {
        get: function() {
            return this._transform;
        },
        set: function(value) {
            if (this._observers) {
                for (var i = 0 ; i < this._observers.length ; i++) {
                    this._observers[i].transformWillChange(this, this._transform, value);
                }
            }

            if (this._transform) {
                this._transform.removeObserver(this);
            }
            this._transform = value;
            this._invalidateWorldMatrix();

            if (this._transform) {
                this._transform.addObserver(this);
            }

            if (this._observers) {
                for (var i = 0 ; i < this._observers.length ; i++) {
                    this._observers[i].transformDidChange(this);
                }
            }

        }
    },

    meshes: {
        get: function() {
            return this.getPropertyArrayNamed("meshes");
        },
        set: function(value) {
            this._properties["meshes"] = value;
            this.meshesDidChange(value);
        }
    },

    cameras: {
        get: function() {
            return this.getPropertyArrayNamed("cameras");
        },
        set: function(value) {
            this._properties["cameras"] = value;
        }
    },

    lights: {
        get: function() {
            return this.getPropertyArrayNamed("lights");
        },
        set: function(value) {
            this._properties["lights"] = value;
        }
    },

    _apply: {
        value: function( callback, recurse, parent, ctx) {

            if (callback) {
                ctx = callback(this, parent, ctx);

                if (recurse) {
                    this.children.forEach( function(node) {
                        node._apply(callback, recurse, this, ctx);
                    }, this);
                }
            }
        }
    },

    apply: {
        value: function( callback, recurse, ctx) {
            this._apply(callback, recurse, null, ctx);
        }
    },

    //TODO: generalize nodeWithName and apply
    _nodeWithName: {
        value: function( name) {
            if (this.name === name)
                return this;

            if (this.children) {
                for (var i = 0 ; i < this.children.length ; i++) {
                    var node = this.children[i];
                    var res = node._nodeWithName(name);
                    if (res) {
                        return res;
                    }
                }
            }

            return null;
        }
    },

    nodeWithName: {
        value: function(name) {
            return this._nodeWithName(name);
        }
    },

    _nodeWithID: {
        value: function( id) {
            if (this.id === id)
                return this;

            if (this.children) {
                for (var i = 0 ; i < this.children.length ; i++) {
                    var node = this.children[i];
                    var res = node._nodeWithID(id);
                    if (res) {
                        return res;
                    }
                }
            }

            return null;
        }
    },

    nodeWithJointID: {
        value: function(id) {
            return this._nodeWithJointID(id);
        }
    },

    _nodeWithJointID: {
        value: function( id) {
            if (this.jointId === id)
                return this;

            if (this.children) {
                for (var i = 0 ; i < this.children.length ; i++) {
                    var node = this.children[i];
                    var res = node._nodeWithJointID(id);
                    if (res) {
                        return res;
                    }
                }
            }

            return null;
        }
    },

    nodeWithID: {
        value: function(id) {
            return this._nodeWithID(id);
        }
    },

    copy: {
        value: function(node) {
            var node = Object.create(glTFNode).init();

            node.name = this.name;
            if (this.meshes) {
                this.meshes.forEach( function(mesh) {
                    node.meshes.push(mesh);
                }, this);
            }
            if (this.lights) {
                this.lights.forEach( function(light) {
                    node.lights.push(light);
                }, this);
            }
            if (this.cameras) {
                this.cameras.forEach( function(camera) {
                    node.cameras.push(camera);
                }, this);
            }

            //for copies of nodes coming from a DAG we keep track of the id but still, we want to be different
            node.id = this.id + "-" +this.bumpId();

            node.transform = this.transform.copy();
            return node;
        }
    },

    _worldMatrixIsDirty: { value: true, writable:true },

    _worldMatrix: { value: null, writable:true },

    worldMatrix: {
        get: function() {
            if (this.parent) {
                if (this._worldMatrixIsDirty) {
                    mat4.multiply(this.parent.worldMatrix, this.transform.matrix, this._worldMatrix);
                    this._worldMatrixIsDirty = false;
                }
                return this._worldMatrix;
            } else {
                this._worldMatrixIsDirty = false;
                return this.transform.matrix;
            }
        }
    },

    _ignoresTransformUpdates: { value: false, writable: true },

    _invalidateWorldMatrix: {
        value: function() {
            this._worldMatrixIsDirty = true;

            //hack to tell observer to invalidate themselves
            this._ignoresTransformUpdates = true;
            this._transform._fireTransformDidUpdate();
            this._ignoresTransformUpdates = false;

            if (this._children) {
                for (var i = 0 ; i < this._children.length ; i++) {
                    this._children[i]._invalidateWorldMatrix();
                }
            }
        }
    },

    transformDidUpdate: {
        value: function() {
            if (this._ignoresTransformUpdates === false)
                this._invalidateWorldMatrix();
        }
    },

    nodeWithJointID: {
        value: function(id) {
            return this._nodeWithJointID(id);
        }
    },

    nodeWithPropertyNamed: {
        value: function( propertyName) {
            if ((typeof this[propertyName] !== "undefined") && (this[propertyName] != null))
                return this;

            if (this.children) {
                for (var i = 0 ; i < this.children.length ; i++) {
                    var node = this.children[i];
                    var res = node.nodeWithPropertyNamed(propertyName);
                    if (res) {
                        return res;
                    }
                }
            }

            return null;
        }
    }

});

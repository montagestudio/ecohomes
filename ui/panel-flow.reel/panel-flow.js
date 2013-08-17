/**
    @module "ui/panel-flow.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    observeProperty = require("montage/frb/observers").observeProperty;

/**
    Description TODO
    @class module:"ui/panel-flow.reel".PanelFlow
    @extends module:montage/ui/component.Component
*/
exports.PanelFlow = Montage.create(Component, /** @lends module:"ui/panel-flow.reel".PanelFlow# */ {

    enterDocument: {
        value: function(firstTime) {
            var self = this;

            if (firstTime) {
                window.addEventListener("resize", function () {
                    self.needsDraw = true;
                }, false);
            }
        }
    },

    __height: {
        value: null
    },

    _height: {
        get: function () {
            return this.__height;
        },
        set: function (value) {
            this.__height = value;
        }
    },

    __numberOfIterations: {
        value: null
    },

    _numberOfIterations: {
        get: function () {
            return this.__numberOfIterations;
        },
        set: function (value) {
            this.__numberOfIterations = value;
        }
    },

    __rowHeight: {
        value: null
    },

    _rowHeight: {
        get: function () {
            return this.__rowHeight;
        },
        set: function (value) {
            this.__rowHeight = value;
        }
    },

    __scroll: {
        value: 0
    },

    _scroll: {
        get: function () {
            return this.__scroll;
        },
        set: function (value) {
            this.__scroll = value;
        }
    },

    __firstIteration: {
        value: null
    },

    _firstIteration: {
        get: function () {
            return this.__firstIteration;
        },
        set: function (value) {
            this.__firstIteration = value;
            this.needsDraw = true;
        }
    },

    willDraw: {
        value: function () {
            if ((typeof this.__firstIteration !== "undefined") && (this.__firstIteration !== null)) {
                this._width = this.element.clientWidth;
                this._height = this.element.clientHeight;
                this._rowHeight = this.__firstIteration.firstElement.clientHeight + 20;
                this.flow.linearScrollingVector = [0, (-500 * this.__rowHeight) / this.__height];
                this.flow.paths = [
                    {
                        "knots": [
                            {
                                "knotPosition": [
                                    0,
                                    0,
                                    -40
                                ],
                                "nextHandlerPosition": [
                                    0,
                                    this.__rowHeight / 3,
                                    -40
                                ],
                                "nextDensity": 1,
                                "previousDensity": 1,
                                "opacity": .4
                            },
                            {
                                "knotPosition": [
                                    0,
                                    this.__rowHeight,
                                    0
                                ],
                                "previousHandlerPosition": [
                                    0,
                                    this.__rowHeight * 2 / 3,
                                    0
                                ],
                                "nextHandlerPosition": [
                                    0,
                                    this.__rowHeight * 4 / 3,
                                    0
                                ],
                                "nextDensity": 1,
                                "previousDensity": 1,
                                "opacity": 1.6
                            },
                            {
                                "knotPosition": [
                                    0,
                                    this.__rowHeight * 2,
                                    -40
                                ],
                                "previousHandlerPosition": [
                                    0,
                                    this.__rowHeight * 5 / 3,
                                    -40
                                ],
                                "nextDensity": 1,
                                "previousDensity": 1,
                                "opacity": .4
                            }
                        ],
                        "units": {
                            "opacity": ""
                        },
                        "headOffset": 1,
                        "tailOffset": 1
                    }
                ];
                this.flow.cameraTargetPoint = [
                    0,
                    this.__rowHeight,
                    0
                ];
                this.flow.cameraPosition = [
                    0,
                    this.__rowHeight,
                    this.__height / 2
                ];
                this.flow.cameraFov = 90;
                this.flow.boundingBoxSize = [1, this.__rowHeight * 2, 0];
            }
        }
    },

    _content: {
        value: null
    },

    content: {
        set: function(value) {
            this._content = value;
            this.defineBinding("flow.content", {
                "<-": "content"
            });
        },
        get: function() {
            return this._content;
        }
    },

    _contentController: {
        value: null
    },

    contentController: {
        set: function(value) {
            this._contentController = value;
            this.defineBinding("flow.contentController", {
                "<-": "contentController"
            });
        },
        get: function() {
            return this._contentController;
        }
    },

    observeProperty: {
        value: function (key, emit, source, parameters, beforeChange) {
            if (key === "objectAtCurrentIteration" || key === "currentIteration") {
                if (this.flow) {
                    return this.flow.observeProperty(key, emit, source, parameters, beforeChange);
                }
            } else {
                return observeProperty(this, key, emit, source, parameters, beforeChange);
            }
        }
    },

    _scroll: {
        value: null
    },

    scroll: {
        get: function () {
            return this._scroll;
        },
        set: function (value) {
            this._scroll = value;
            if (this.currentPanel === null) {
                this.didTranslateEnd();
            }
        }
    },

    _currentPanel: {
        value: null
    },

    currentPanel: {
        get: function () {
            return this._currentPanel;
        },
        set: function (value) {
            this._currentPanel = value;
        }
    },

    didTranslateEnd: {
        value: function () {
            if (this._currentPanel !== Math.round(this.scroll)) {
                this.currentPanel = Math.round(this.scroll);
            }
        }
    },

    scrollToPanel: {
        value: function (index) {
            this.flow.startScrollingIndexToOffset(index, 0);
        }
    }

});

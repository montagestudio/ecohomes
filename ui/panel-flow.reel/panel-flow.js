/**
    @module "ui/panel-flow.reel"
    @requires montage
    @requires montage/ui/component
*/
var Component = require("montage/ui/component").Component,
    KeyComposer = require("montage/composer/key-composer").KeyComposer,
    observeProperty = require("montage/frb/observers").observeProperty;

/**
    Description TODO
    @class module:"ui/panel-flow.reel".PanelFlow
    @extends module:montage/ui/component.Component
*/
exports.PanelFlow = Component.specialize({

    constructor: {
        value: function PanelFlow () {
            this.super();

            this.defineBinding("flow.content", {"<-": "content"});

            // Only use a contentController if content is not defined
            this.defineBinding("content.defined() ? null : flow.contentController", {
                "<-": "contentController"
            });

        }
    },

    handleKeydown: {
        value: function(event) {
            var code = event.keyCode || event.which,
                strollTo = null;

            if (code === 38) {
                this.scrollToPanel(Math.floor(this.flow.scroll - 1));
                event.preventDefault();
            } else {
                if (code === 40) {
                    this.scrollToPanel(Math.ceil(this.flow.scroll + 1));
                    event.preventDefault();
                }
            }
        }
    },

    enterDocument: {
        value: function(firstTime) {
            var self = this;

            if (firstTime) {
                document.addEventListener("keydown", this, false);
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
                                    -this.__rowHeight * 30,
                                    -100
                                ],
                                "nextHandlerPosition": [
                                    0,
                                    -this.__rowHeight * 20,
                                    -100
                                ],
                                "nextDensity": 40,
                                "previousDensity": 40,
                                "opacity": 0
                            },
                            {
                                "knotPosition": [
                                    0,
                                    0,
                                    -40
                                ],
                                "previousHandlerPosition": [
                                    0,
                                    -this.__rowHeight * 10,
                                    -40
                                ],
                                "nextHandlerPosition": [
                                    0,
                                    this.__rowHeight / 3,
                                    -40
                                ],
                                "nextDensity": 1,
                                "previousDensity": 1,
                                "opacity": 0.4
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
                                "nextHandlerPosition": [
                                    0,
                                    this.__rowHeight * 12,
                                    -100
                                ],
                                "nextDensity": 1,
                                "previousDensity": 1,
                                "opacity": 0.4
                            },
                            {
                                "knotPosition": [
                                    0,
                                    this.__rowHeight * 32,
                                    -100
                                ],
                                "previousHandlerPosition": [
                                    0,
                                    this.__rowHeight * 22,
                                    -100
                                ],
                                "nextDensity": 40,
                                "previousDensity": 40,
                                "opacity": 0
                            }
                        ],
                        "units": {
                            "opacity": ""
                        },
                        "headOffset": 21.5,
                        "tailOffset": 21.5
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
                this.flow.boundingBoxSize = [1, this.__rowHeight * 40, 0];
            }
        }
    },

    _hideNext: {
        value: false
    },

    draw: {
        value: function () {
            if (this._hideNext) {
                this.nextPageElement.classList.add("hidden");
            }
        }
    },

    content: {
        value: null
    },

    contentController: {
        value: null
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

    didTranslateStart: {
        value: function () {
            this.dispatchEventNamed("flowTranslateStart", true, false);
            this._hideNext = true;
            this.needsDraw = true;
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

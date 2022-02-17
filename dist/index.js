'use strict';

function createPlugin(plugin, config) {
  return {
    handler: plugin,
    config,
  }
}

createPlugin.withOptions = function (pluginFunction, configFunction = () => ({})) {
  const optionsFunction = function (options) {
    return {
      __options: options,
      handler: pluginFunction(options),
      config: configFunction(options),
    }
  };

  optionsFunction.__isOptionsFunction = true;

  // Expose plugin dependencies so that `object-hash` returns a different
  // value if anything here changes, to ensure a rebuild is triggered.
  optionsFunction.__pluginFunction = pluginFunction;
  optionsFunction.__configFunction = configFunction;

  return optionsFunction
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var expandArray = function (arr, append, inKey, transform) {
    if (append === void 0) { append = ""; }
    if (inKey === void 0) { inKey = false; }
    if (transform === void 0) { transform = function (v) { return v; }; }
    return arr.reduce(function (a, v) {
        var _a;
        return (__assign(__assign({}, a), (_a = {}, _a["" + v + (inKey ? append : "")] = "" + transform(v) + append, _a)));
    }, {});
};
var range = function (a, b, c) {
    var len = Math.abs(b != null ? Math.ceil((b - a) / (c !== null && c !== void 0 ? c : 1)) : a);
    var arr = new Array(len).fill(0);
    return arr.map(function (_, k) { return (k * (c !== null && c !== void 0 ? c : (a < 0 ? -1 : 1)) || 0) + (b != null ? a : 0); });
};
var duration = expandArray([100, 200, 300, 500, 1000], "ms");
var delay = __assign({}, duration);
var repeat = expandArray(range(5));
var ease = {
    linear: "0,0,1,1",
    "in": ".42,0,1,1",
    out: "0,0,.58,1",
    "in-out": ".42,0,.58,1",
};
var fill = expandArray(["none", "forwards", "backwards", "both"]);

/**
 * Composes a variable number of CSS helper functions.
 * Returns a function that accepts all the original arguments
 * of the functions it composed. If the original function
 * accepted multiple arguments, they must be passed as
 * an array.
 
 * @example
 * const translateXandRotateY = compose(translateX, rotateY);
 * const cssValue = translateXandRotateY('-5px', '30deg');
 */
var compose = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return function () {
        var styleArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            styleArgs[_i] = arguments[_i];
        }
        var result = funcs.reduce(function (acc, func, i) {
            var arg = styleArgs[i];
            return acc + " " + (Array.isArray(arg) ? func.apply(void 0, arg) : func(arg));
        }, "");
        return result.trim();
    };
};
var translateX = function (a) { return "translateX(" + a + ")"; };
var scale = function (a) { return "scale(" + a + ")"; };
var rotateY = function (a) { return "rotateY(" + a + "deg)"; };
var perspective = function (a) { return "perspective(" + a + ")"; };
var translateY = function (a) { return "translateY(" + a + ")"; };
var translateZ = function (a) { return "translateZ(" + a + ")"; };
var translateXY = function (a, b) {
    return "translate(" + a + "," + b + ")";
};
var rotate = function (a) { return "rotate(" + a + "deg)"; };
var rotateX = function (a) { return "rotateX(" + a + "deg)"; };
var blur = function (a) { return "blur(" + a + ")"; };

var scaleAndRotate = compose(scale, rotate);
var magic = {
    "0%": {
        opacity: 0,
        transformOrigin: "200% 500%",
        transform: scaleAndRotate([0], [270]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "100% 200%",
        transform: scaleAndRotate([1], [0]),
    },
};

var scaleAndtranslateXY = compose(scale, translateXY);
var swap = {
    "0%": {
        opacity: 0,
        transformOrigin: "0 100%",
        transform: scaleAndtranslateXY([0], ["-700px", "0px"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "100% 100%",
        transform: scaleAndtranslateXY([1], ["0px", "0px"]),
    },
};

var scaleRotateTranslateY = compose(scale, rotate, translateY);
var twisterInUp = {
    "0%": {
        opacity: 0,
        transformOrigin: "100% 0",
        transform: scaleRotateTranslateY([0], [360], ["100%"]),
    },
    "30%": {
        transformOrigin: "100% 0",
        transform: scaleRotateTranslateY([0], [360], ["100%"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "0 0",
        transform: scaleRotateTranslateY([1], [0], ["0"]),
    },
};

var scaleRotateTranslateY$1 = compose(scale, rotate, translateY);
var twisterInUp$1 = {
    "0%": {
        opacity: 0,
        transformOrigin: "0 100%",
        transform: scaleRotateTranslateY$1([0], [360], ["-100%"]),
    },
    "30%": {
        transformOrigin: "0 100%",
        transform: scaleRotateTranslateY$1([0], [360], ["-100%"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "100% 100%",
        transform: scaleRotateTranslateY$1([1], [0], ["0%"]),
    },
};

var puffIn = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 50%",
        transform: scale(2),
        filter: blur("2px"),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scale(1),
        filter: blur("0px"),
    },
};

var puffOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scale(1),
        filter: blur("0px"),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 50%",
        transform: scale(2),
        filter: blur("2px"),
    },
};

var vanishIn = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 50%",
        transform: scale(2),
        filter: blur("90px"),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scale(1),
        filter: blur("0px"),
    },
};

var vanishOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scale(1),
        filter: blur("0px"),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 50%",
        transform: scale(2),
        filter: blur("20px"),
    },
};

var openDownLeft = {
    "0%": {
        transformOrigin: "bottom left",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
    "100%": {
        transformOrigin: "bottom left",
        transform: rotate(-110),
        animationTimingFunction: "ease-in-out",
    },
};

var openDownLeftReturn = {
    "0%": {
        transformOrigin: "bottom left",
        transform: rotate(-110),
        animationTimingFunction: "ease-in-out",
    },
    "100%": {
        transformOrigin: "bottom left",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
};

var openDownRight = {
    "0%": {
        transformOrigin: "bottom right",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
    "100%": {
        transformOrigin: "bottom right",
        transform: rotate(110),
        animationTimingFunction: "ease-in-out",
    },
};

var openDownRightReturn = {
    "0%": {
        transformOrigin: "bottom right",
        transform: rotate(110),
        animationTimingFunction: "ease-in-out",
    },
    "100%": {
        transformOrigin: "bottom right",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
};

var openUpLeft = {
    "0%": {
        transformOrigin: "top left",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
    "100%": {
        transformOrigin: "top left",
        transform: rotate(110),
        animationTimingFunction: "ease-in-out",
    },
};

var openUpLeftReturn = {
    "0%": {
        transformOrigin: "top left",
        transform: rotate(110),
        animationTimingFunction: "ease-in-out",
    },
    "100%": {
        transformOrigin: "top left",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
};

var openUpRight = {
    "0%": {
        transformOrigin: "top right",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
    "100%": {
        transformOrigin: "top right",
        transform: rotate(-110),
        animationTimingFunction: "ease-in-out",
    },
};

var openUpRightReturn = {
    "0%": {
        transformOrigin: "top right",
        transform: rotate(-110),
        animationTimingFunction: "ease-in-out",
    },
    "100%": {
        transformOrigin: "top right",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
};

var openDownLeftOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "bottom left",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
    "100%": {
        opacity: 0,
        transformOrigin: "bottom left",
        transform: rotate(-110),
        animationTimingFunction: "ease-in-out",
    },
};

var openDownRightOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "bottom right",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
    "100%": {
        opacity: 0,
        transformOrigin: "bottom right",
        transform: rotate(110),
        animationTimingFunction: "ease-in-out",
    },
};

var openUpLeftOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "top left",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
    "100%": {
        opacity: 0,
        transformOrigin: "top left",
        transform: rotate(110),
        animationTimingFunction: "ease-in-out",
    },
};

var openUpRightOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "top right",
        transform: rotate(0),
        animationTimingFunction: "ease-out",
    },
    "100%": {
        opacity: 0,
        transformOrigin: "top right",
        transform: rotate(-110),
        animationTimingFunction: "ease-in-out",
    },
};

var perspectiveRotateX = compose(perspective, rotateX);
var perspectiveDown = {
    "0%": {
        transformOrigin: "0 100%",
        transform: perspectiveRotateX(["800px"], [0]),
    },
    "100%": {
        transformOrigin: "0 100%",
        transform: perspectiveRotateX(["800px"], [-180]),
    },
};

var perspectiveRotateX$1 = compose(perspective, rotateX);
var perspectiveDownReturn = {
    "0%": {
        transformOrigin: "0 100%",
        transform: perspectiveRotateX$1(["800px"], [-180]),
    },
    "100%": {
        transformOrigin: "0 100%",
        transform: perspectiveRotateX$1(["800px"], [0]),
    },
};

var perspectiveRotateY = compose(perspective, rotateY);
var perspectiveLeft = {
    "0%": {
        transformOrigin: "0 0",
        transform: perspectiveRotateY(["800px"], [0]),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: perspectiveRotateY(["800px"], [-180]),
    },
};

var perspectiveRotateY$1 = compose(perspective, rotateY);
var perspectiveLeftReturn = {
    "0%": {
        transformOrigin: "0 0",
        transform: perspectiveRotateY$1(["800px"], [-180]),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: perspectiveRotateY$1(["800px"], [0]),
    },
};

var perspectiveRotateY$2 = compose(perspective, rotateY);
var perspectiveRight = {
    "0%": {
        transformOrigin: "100% 0",
        transform: perspectiveRotateY$2(["800px"], [0]),
    },
    "100%": {
        transformOrigin: "100% 0",
        transform: perspectiveRotateY$2(["800px"], [180]),
    },
};

var perspectiveRotateY$3 = compose(perspective, rotateY);
var perspectiveRightReturn = {
    "0%": {
        transformOrigin: "100% 0",
        transform: perspectiveRotateY$3(["800px"], [180]),
    },
    "100%": {
        transformOrigin: "100% 0",
        transform: perspectiveRotateY$3(["800px"], [0]),
    },
};

var perspectiveRotateX$2 = compose(perspective, rotateX);
var perspectiveUp = {
    "0%": {
        transformOrigin: "0 0",
        transform: perspectiveRotateX$2(["800px"], [0]),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: perspectiveRotateX$2(["800px"], [180]),
    },
};

var perspectiveRotateX$3 = compose(perspective, rotateX);
var perspectiveUpReturn = {
    "0%": {
        transformOrigin: "0 0",
        transform: perspectiveRotateX$3(["800px"], [180]),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: perspectiveRotateX$3(["800px"], [0]),
    },
};

var perspectiveRotateXTranslateZ = compose(perspective, rotateX, translateZ);
var rotateDownIn = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 100%",
        transform: perspectiveRotateXTranslateZ(["800px"], [-180], ["300px"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "0 0",
        transform: perspectiveRotateXTranslateZ(["800px"], [0], ["0px"]),
    },
};

var perspectiveRotateXTranslateZ$1 = compose(perspective, rotateX, translateZ);
var rotateDownOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "0 0",
        transform: perspectiveRotateXTranslateZ$1(["800px"], [0], ["0px"]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 100%",
        transform: perspectiveRotateXTranslateZ$1(["800px"], [-180], ["300px"]),
    },
};

var perspectiveRotateYTranslateZ = compose(perspective, rotateY, translateZ);
var rotateLeftIn = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 0",
        transform: perspectiveRotateYTranslateZ(["800px"], [-180], ["300px"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "0 0",
        transform: perspectiveRotateYTranslateZ(["800px"], [0], ["0px"]),
    },
};

var perspectiveRotateYTranslateZ$1 = compose(perspective, rotateY, translateZ);
var rotateLeftOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "0 0",
        transform: perspectiveRotateYTranslateZ$1(["800px"], [0], ["0px"]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 0",
        transform: perspectiveRotateYTranslateZ$1(["800px"], [-180], ["300px"]),
    },
};

var perspectiveRotateYTranslateZ$2 = compose(perspective, rotateY, translateZ);
var rotateRightIn = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 0",
        transform: perspectiveRotateYTranslateZ$2(["800px"], [180], ["300px"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "0 0",
        transform: perspectiveRotateYTranslateZ$2(["800px"], [0], ["0px"]),
    },
};

var perspectiveRotateYTranslateZ$3 = compose(perspective, rotateY, translateZ);
var rotateRightOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "0 0",
        transform: perspectiveRotateYTranslateZ$3(["800px"], [0], ["0px"]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 0",
        transform: perspectiveRotateYTranslateZ$3(["800px"], [180], ["300px"]),
    },
};

var perspectiveRotateXTranslateZ$2 = compose(perspective, rotateX, translateZ);
var rotateUpIn = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 0",
        transform: perspectiveRotateXTranslateZ$2(["800px"], [180], ["100px"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "0 0",
        transform: perspectiveRotateXTranslateZ$2(["800px"], [0], ["0px"]),
    },
};

var perspectiveRotateXTranslateZ$3 = compose(perspective, rotateX, translateZ);
var rotateUpOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "0 0",
        transform: perspectiveRotateXTranslateZ$3(["800px"], [0], ["0px"]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 0",
        transform: perspectiveRotateXTranslateZ$3(["800px"], [180], ["100px"]),
    },
};

var slideDown = {
    "0%": {
        transformOrigin: "0 0",
        transform: translateY("0%"),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: translateY("100%"),
    },
};

var slideDownReturn = {
    "0%": {
        transformOrigin: "0 0",
        transform: translateY("100%"),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: translateY("0%"),
    },
};

var slideLeft = {
    "0%": {
        transformOrigin: "0 0",
        transform: translateX("0%"),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: translateX("-100%"),
    },
};

var slideLeftReturn = {
    "0%": {
        transformOrigin: "0 0",
        transform: translateX("-100%"),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: translateX("0%"),
    },
};

var slideRight = {
    "0%": {
        transformOrigin: "0 0",
        transform: translateX("0%"),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: translateX("100%"),
    },
};

var slideRightReturn = {
    "0%": {
        transformOrigin: "0 0",
        transform: translateX("100%"),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: translateX("0%"),
    },
};

var slideUp = {
    "0%": {
        transformOrigin: "0 0",
        transform: translateY("0%"),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: translateY("-100%"),
    },
};

var slideUpReturn = {
    "0%": {
        transformOrigin: "0 0",
        transform: translateY("-100%"),
    },
    "100%": {
        transformOrigin: "0 0",
        transform: translateY("0%"),
    },
};

var scaleRotate = compose(scale, rotate);
var foolishIn = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 50%",
        transform: scaleRotate([0], [360]),
    },
    "20%": {
        opacity: 1,
        transformOrigin: "0% 100%",
        transform: scaleRotate([0.5], [0]),
    },
    "40%": {
        opacity: 1,
        transformOrigin: "100% 100%",
        transform: scaleRotate([0.5], [0]),
    },
    "60%": {
        opacity: 1,
        transformOrigin: "0% 50%",
        transform: scaleRotate([0.5], [0]),
    },
    "80%": {
        opacity: 1,
        transformOrigin: "0% 0%",
        transform: scaleRotate([0.5], [0]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scaleRotate([1], [0]),
    },
};

var scaleRotate$1 = compose(scale, rotate);
var foolishOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scaleRotate$1([1], [360]),
    },
    "20%": {
        opacity: 1,
        transformOrigin: "0% 0%",
        transform: scaleRotate$1([0.5], [0]),
    },
    "40%": {
        opacity: 1,
        transformOrigin: "100% 0%",
        transform: scaleRotate$1([0.5], [0]),
    },
    "60%": {
        opacity: 1,
        transformOrigin: "0% 0%",
        transform: scaleRotate$1([0.5], [0]),
    },
    "80%": {
        opacity: 1,
        transformOrigin: "0% 100%",
        transform: scaleRotate$1([0.5], [0]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 50%",
        transform: scaleRotate$1([0], [0]),
    },
};

var scaleRotateY = compose(scale, rotateY);
var holeIn = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 50%",
        transform: scaleRotateY([0], [180]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scaleRotateY([1], [0]),
    },
};

var scaleRotateY$1 = compose(scale, rotateY);
var holeOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scaleRotateY$1([1], [0]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 50%",
        transform: scaleRotateY$1([0], [180]),
    },
};

var swashIn = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 50%",
        transform: scale(0),
    },
    "80%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scale(0.9),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scale(1),
    },
};

var swashOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scale(1),
    },
    "80%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: scale(0.9),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 50%",
        transform: scale(0),
    },
};

var scaleTranslateY = compose(scale, translateY);
var tinDownIn = {
    "0%": {
        opacity: 0,
        transform: scaleTranslateY([1], ["300%"]),
    },
    "50%, 70%, 90%": {
        opacity: 1,
        transform: scaleTranslateY([1.1], [0]),
    },
    "60%, 80%, 100%": {
        opacity: 1,
        transform: scaleTranslateY([1], [0]),
    },
};

var scaleTranslateY$1 = compose(scale, translateY);
var tinDownOut = {
    "0%, 20%, 40%, 50%": {
        opacity: 1,
        transform: scaleTranslateY$1([1], [0]),
    },
    "10%, 30%": {
        opacity: 1,
        transform: scaleTranslateY$1([1.1], [0]),
    },
    "100%": {
        opacity: 0,
        transform: scaleTranslateY$1([1], ["300%"]),
    },
};

var scaleTranslateX = compose(scale, translateX);
var tinLeftIn = {
    "0%": {
        opacity: 0,
        transform: scaleTranslateX([1], ["-300%"]),
    },
    "50%, 70%, 90%": {
        opacity: 1,
        transform: scaleTranslateX([1.1], [0]),
    },
    "60%, 80%, 100%": {
        opacity: 1,
        transform: scaleTranslateX([1], [0]),
    },
};

var scaleTranslateX$1 = compose(scale, translateX);
var tinLeftOut = {
    "0%, 20%, 40%, 50%": {
        opacity: 1,
        transform: scaleTranslateX$1([1], [0]),
    },
    "10%, 30%": {
        opacity: 1,
        transform: scaleTranslateX$1([1.1], [0]),
    },
    "100%": {
        opacity: 0,
        transform: scaleTranslateX$1([1], ["-300%"]),
    },
};

var scaleTranslateX$2 = compose(scale, translateX);
var tinRightIn = {
    "0%": {
        opacity: 0,
        transform: scaleTranslateX$2([1], ["300%"]),
    },
    "50%, 70%, 90%": {
        opacity: 1,
        transform: scaleTranslateX$2([1.1], [0]),
    },
    "60%, 80%, 100%": {
        opacity: 1,
        transform: scaleTranslateX$2([1], [0]),
    },
};

var scaleTranslateX$3 = compose(scale, translateX);
var tinRightOut = {
    "0%, 20%, 40%, 50%": {
        opacity: 1,
        transform: scaleTranslateX$3([1], [0]),
    },
    "10%, 30%": {
        opacity: 1,
        transform: scaleTranslateX$3([1.1], [0]),
    },
    "100%": {
        opacity: 0,
        transform: scaleTranslateX$3([1], ["300%"]),
    },
};

var scaleTranslateY$2 = compose(scale, translateY);
var tinUpIn = {
    "0%": {
        opacity: 0,
        transform: scaleTranslateY$2([1], ["-300%"]),
    },
    "50%, 70%, 90%": {
        opacity: 1,
        transform: scaleTranslateY$2([1.1], [0]),
    },
    "60%, 80%, 100%": {
        opacity: 1,
        transform: scaleTranslateY$2([1], [0]),
    },
};

var scaleTranslateY$3 = compose(scale, translateY);
var tinUpOut = {
    "0%, 20%, 40%, 50%": {
        opacity: 1,
        transform: scaleTranslateY$3([1], [0]),
    },
    "10%, 30%": {
        opacity: 1,
        transform: scaleTranslateY$3([1.1], [0]),
    },
    "100%": {
        opacity: 0,
        transform: scaleTranslateY$3([1], ["-300%"]),
    },
};

var bombLeftOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: rotate(0),
        filter: blur("0px"),
    },
    "50%": {
        opacity: 1,
        transformOrigin: "-100% 50%",
        transform: rotate(-160),
        filter: blur("0px"),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "-100% 50%",
        transform: rotate(-160),
        filter: blur("20px"),
    },
};

var bombRightOut = {
    "0%": {
        opacity: 1,
        transformOrigin: "50% 50%",
        transform: rotate(0),
        filter: blur("0px"),
    },
    "50%": {
        opacity: 1,
        transformOrigin: "200% 50%",
        transform: rotate(160),
        filter: blur("0px"),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "200% 50%",
        transform: rotate(160),
        filter: blur("20px"),
    },
};

var perspectiveRotateX$4 = compose(perspective, rotateX);
var boingInUp = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 0%",
        transform: perspectiveRotateX$4(["800px"], [-90]),
    },
    "50%": {
        opacity: 1,
        transformOrigin: "50% 0%",
        transform: perspectiveRotateX$4(["800px"], [50]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "50% 0%",
        transform: perspectiveRotateX$4(["800px"], [0]),
    },
};

var perspectiveRotateXRotateY = compose(perspective, rotateX, rotateY);
var boingOutDown = {
    "0%": {
        opacity: 1,
        transformOrigin: "100% 100%",
        transform: perspectiveRotateXRotateY(["800px"], [0], [0]),
    },
    "20%": {
        opacity: 1,
        transformOrigin: "100% 100%",
        transform: perspectiveRotateXRotateY(["800px"], [0], [10]),
    },
    "30%": {
        opacity: 1,
        transformOrigin: "0% 100%",
        transform: perspectiveRotateXRotateY(["800px"], [0], [0]),
    },
    "40%": {
        opacity: 1,
        transformOrigin: "0% 100%",
        transform: perspectiveRotateXRotateY(["800px"], [10], [10]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "100% 100%",
        transform: perspectiveRotateXRotateY(["800px"], [90], [0]),
    },
};

var scaletranslateXY = compose(scale, translateXY);
var spaceInDown = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 100%",
        transform: scaletranslateXY([0.2], ["0%", "200%"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "50% 100%",
        transform: scaletranslateXY([1], ["0%", "0%"]),
    },
};

var scaletranslateXY$1 = compose(scale, translateXY);
var spaceInLeft = {
    "0%": {
        opacity: 0,
        transformOrigin: "0% 50%",
        transform: scaletranslateXY$1([0.2], ["-200%", "0%"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "0% 50%",
        transform: scaletranslateXY$1([1], ["0%", "0%"]),
    },
};

var scaletranslateXY$2 = compose(scale, translateXY);
var spaceInRight = {
    "0%": {
        opacity: 0,
        transformOrigin: "100% 50%",
        transform: scaletranslateXY$2([0.2], ["200%", "0%"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "100% 50%",
        transform: scaletranslateXY$2([1], ["0%", "0%"]),
    },
};

var scaletranslateXY$3 = compose(scale, translateXY);
var spaceInUp = {
    "0%": {
        opacity: 0,
        transformOrigin: "50% 0%",
        transform: scaletranslateXY$3([0.2], ["0%", "-200%"]),
    },
    "100%": {
        opacity: 1,
        transformOrigin: "50% 0%",
        transform: scaletranslateXY$3([1], ["0%", "0%"]),
    },
};

var scaletranslateXY$4 = compose(scale, translateXY);
var spaceOutDown = {
    "0%": {
        opacity: 1,
        transformOrigin: "50% 100%",
        transform: scaletranslateXY$4([1], ["0%", "0%"]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 100%",
        transform: scaletranslateXY$4([0.2], ["0%", "200%"]),
    },
};

var scaletranslateXY$5 = compose(scale, translateXY);
var spaceOutLeft = {
    "0%": {
        opacity: 1,
        transformOrigin: "0% 50%",
        transform: scaletranslateXY$5([1], ["0%", "0%"]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "0% 50%",
        transform: scaletranslateXY$5([0.2], ["-200%", "0%"]),
    },
};

var scaletranslateXY$6 = compose(scale, translateXY);
var spaceOutRight = {
    "0%": {
        opacity: 1,
        transformOrigin: "100% 50%",
        transform: scaletranslateXY$6([1], ["0%", "0%"]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "100% 50%",
        transform: scaletranslateXY$6([0.2], ["200%", "0%"]),
    },
};

var scaletranslateXY$7 = compose(scale, translateXY);
var spaceOutUp = {
    "0%": {
        opacity: 1,
        transformOrigin: "50% 0%",
        transform: scaletranslateXY$7([1], ["0%", "0%"]),
    },
    "100%": {
        opacity: 0,
        transformOrigin: "50% 0%",
        transform: scaletranslateXY$7([0.2], ["0%", "-200%"]),
    },
};

function addAnimationJIT(matchUtilities) {
    matchUtilities({ "animate-delay": function (value) { return ({ animationDelay: value }); } }, { values: delay });
    matchUtilities({ "animate-iteration": function (value) { return ({ animationIterationCount: value }); } }, { values: repeat });
    matchUtilities({
        "animate-time": function (value) { return ({
            animationTimingFunction: "cubic-bezier(" + value + ")",
        }); },
    }, { values: ease });
    matchUtilities({
        "animate-duration": function (value) { return ({ animationDuration: value }); },
    }, { values: duration });
    matchUtilities({ "animate-fill": function (value) { return ({ animationFillMode: value }); } }, { values: fill });
    matchUtilities({
        "animate-steps-start": function (value) { return ({
            animationTimingFunction: "steps(" + value + ",jump-start)",
        }); },
    }, { values: repeat });
    matchUtilities({
        "animate-steps-end": function (value) { return ({
            animationTimingFunction: "steps(" + value + ",jump-end)",
        }); },
    }, { values: repeat });
    matchUtilities({
        "animate-steps-both": function (value) { return ({
            animationTimingFunction: "steps(" + value + ",jump-both)",
        }); },
    }, { values: repeat });
    matchUtilities({
        "animate-steps-none": function (value) { return ({
            animationTimingFunction: "steps(" + value + ",jump-none)",
        }); },
    }, { values: repeat });
}
var magicAnimation = createPlugin(function (_a) {
    var addUtilities = _a.addUtilities, matchUtilities = _a.matchUtilities, theme = _a.theme;
    var fallbackKeyframes = {
        "@keyframes magic": magic,
        "@keyframes swap": swap,
        "@keyframes twisterInUp": twisterInUp,
        "@keyframes twisterInDown": twisterInUp$1,
        "@keyframes puffIn": puffIn,
        "@keyframes puffOut": puffOut,
        "@keyframes vanishIn": vanishIn,
        "@keyframes vanishOut": vanishOut,
        "@keyframes openDownLeft": openDownLeft,
        "@keyframes openDownLeftReturn": openDownLeftReturn,
        "@keyframes openDownRight": openDownRight,
        "@keyframes openDownRightReturn": openDownRightReturn,
        "@keyframes openUpLeft": openUpLeft,
        "@keyframes openUpLeftReturn": openUpLeftReturn,
        "@keyframes openUpRight": openUpRight,
        "@keyframes openUpRightReturn": openUpRightReturn,
        "@keyframes openDownLeftOut": openDownLeftOut,
        "@keyframes openDownRightOut": openDownRightOut,
        "@keyframes openUpLeftOut": openUpLeftOut,
        "@keyframes openUpRightOut": openUpRightOut,
        "@keyframes perspectiveDown": perspectiveDown,
        "@keyframes perspectiveDownReturn": perspectiveDownReturn,
        "@keyframes perspectiveLeft": perspectiveLeft,
        "@keyframes perspectiveLeftReturn": perspectiveLeftReturn,
        "@keyframes perspectiveRight": perspectiveRight,
        "@keyframes perspectiveRightReturn": perspectiveRightReturn,
        "@keyframes perspectiveUp": perspectiveUp,
        "@keyframes perspectiveUpReturn": perspectiveUpReturn,
        "@keyframes rotateDownIn": rotateDownIn,
        "@keyframes rotateDownOut": rotateDownOut,
        "@keyframes rotateLeftIn": rotateLeftIn,
        "@keyframes rotateLeftOut": rotateLeftOut,
        "@keyframes rotateRightIn": rotateRightIn,
        "@keyframes rotateRightOut": rotateRightOut,
        "@keyframes rotateUpIn": rotateUpIn,
        "@keyframes rotateUpOut": rotateUpOut,
        "@keyframes slideDown": slideDown,
        "@keyframes slideDownReturn": slideDownReturn,
        "@keyframes slideLeft": slideLeft,
        "@keyframes slideLeftReturn": slideLeftReturn,
        "@keyframes slideRight": slideRight,
        "@keyframes slideRightReturn": slideRightReturn,
        "@keyframes slideUp": slideUp,
        "@keyframes slideUpReturn": slideUpReturn,
        "@keyframes foolishIn": foolishIn,
        "@keyframes foolishOut": foolishOut,
        "@keyframes holeIn": holeIn,
        "@keyframes holeOut": holeOut,
        "@keyframes swashIn": swashIn,
        "@keyframes swashOut": swashOut,
        "@keyframes tinDownIn": tinDownIn,
        "@keyframes tinDownOut": tinDownOut,
        "@keyframes tinLeftIn": tinLeftIn,
        "@keyframes tinLeftOut": tinLeftOut,
        "@keyframes tinRightIn": tinRightIn,
        "@keyframes tinRightOut": tinRightOut,
        "@keyframes tinUpIn": tinUpIn,
        "@keyframes tinUpOut": tinUpOut,
        "@keyframes bombLeftOut": bombLeftOut,
        "@keyframes bombRightOut": bombRightOut,
        "@keyframes boingInUp": boingInUp,
        "@keyframes boingOutDown": boingOutDown,
        "@keyframes spaceInDown": spaceInDown,
        "@keyframes spaceInLeft": spaceInLeft,
        "@keyframes spaceInRight": spaceInRight,
        "@keyframes spaceInUp": spaceInUp,
        "@keyframes spaceOutDown": spaceOutDown,
        "@keyframes spaceOutLeft": spaceOutLeft,
        "@keyframes spaceOutRight": spaceOutRight,
        "@keyframes spaceOutUp": spaceOutUp,
    };
    var fallbackUtilities = {
        ".magic-magic": {
            animationName: "magic",
            animationDuration: "1s",
        },
        ".magic-swap": {
            animationName: "swap",
            animationDuration: "1s",
        },
        ".magic-twisterInUp": {
            animationName: "twisterInUp",
            animationDuration: "1s",
        },
        ".magic-twisterInDown": {
            animationName: "twisterInDown",
            animationDuration: "1s",
        },
        ".magic-puffIn": {
            animationName: "puffIn",
            animationDuration: "1s",
        },
        ".magic-puffOut": {
            animationName: "puffOut",
            animationDuration: "1s",
        },
        ".magic-vanishIn": {
            animationName: "vanishIn",
            animationDuration: "1s",
        },
        ".magic-vanishOut": {
            animationName: "vanishOut",
            animationDuration: "1s",
        },
        ".magic-openDownLeft": {
            animationName: "openDownLeft",
            animationDuration: "1s",
        },
        ".magic-openDownLeftReturn": {
            animationName: "openDownLeftReturn",
            animationDuration: "1s",
        },
        ".magic-openDownRight": {
            animationName: "openDownRight",
            animationDuration: "1s",
        },
        ".magic-openDownRightReturn": {
            animationName: "openDownRightReturn",
            animationDuration: "1s",
        },
        ".magic-openUpLeft": {
            animationName: "openUpLeft",
            animationDuration: "1s",
        },
        ".magic-openUpLeftReturn": {
            animationName: "openUpLeftReturn",
            animationDuration: "1s",
        },
        ".magic-openUpRight": {
            animationName: "openUpRight",
            animationDuration: "1s",
        },
        ".magic-openUpRightReturn": {
            animationName: "openUpRightReturn",
            animationDuration: "1s",
        },
        ".magic-openDownLeftOut": {
            animationName: "openDownLeftOut",
            animationDuration: "1s",
        },
        ".magic-openDownRightOut": {
            animationName: "openDownRightOut",
            animationDuration: "1s",
        },
        ".magic-openUpLeftOut": {
            animationName: "openUpLeftOut",
            animationDuration: "1s",
        },
        ".magic-openUpRightOut": {
            animationName: "openUpRightOut",
            animationDuration: "1s",
        },
        ".magic-perspectiveDown": {
            animationName: "perspectiveDown",
            animationDuration: "1s",
        },
        ".magic-perspectiveDownReturn": {
            animationName: "perspectiveDownReturn",
            animationDuration: "1s",
        },
        ".magic-perspectiveLeft": {
            animationName: "perspectiveLeft",
            animationDuration: "1s",
        },
        ".magic-perspectiveLeftReturn": {
            animationName: "perspectiveLeftReturn",
            animationDuration: "1s",
        },
        ".magic-perspectiveRight": {
            animationName: "perspectiveRight",
            animationDuration: "1s",
        },
        ".magic-perspectiveRightReturn": {
            animationName: "perspectiveRightReturn",
            animationDuration: "1s",
        },
        ".magic-perspectiveUp": {
            animationName: "perspectiveUp",
            animationDuration: "1s",
        },
        ".magic-perspectiveUpReturn": {
            animationName: "perspectiveUpReturn",
            animationDuration: "1s",
        },
        ".magic-rotateDownIn": {
            animationName: "rotateDownIn",
            animationDuration: "1s",
        },
        ".magic-rotateDownOut": {
            animationName: "rotateDownOut",
            animationDuration: "1s",
        },
        ".magic-rotateLeftIn": {
            animationName: "rotateLeftIn",
            animationDuration: "1s",
        },
        ".magic-rotateLeftOut": {
            animationName: "rotateLeftOut",
            animationDuration: "1s",
        },
        ".magic-rotateRightIn": {
            animationName: "rotateRightIn",
            animationDuration: "1s",
        },
        ".magic-rotateRightOut": {
            animationName: "rotateRightOut",
            animationDuration: "1s",
        },
        ".magic-rotateUpIn": {
            animationName: "rotateUpIn",
            animationDuration: "1s",
        },
        ".magic-rotateUpOut": {
            animationName: "rotateUpOut",
            animationDuration: "1s",
        },
        ".magic-slideDown": {
            animationName: "slideDown",
            animationDuration: "1s",
        },
        ".magic-slideDownReturn": {
            animationName: "slideDownReturn",
            animationDuration: "1s",
        },
        ".magic-slideLeft": {
            animationName: "slideLeft",
            animationDuration: "1s",
        },
        ".magic-slideLeftReturn": {
            animationName: "slideLeftReturn",
            animationDuration: "1s",
        },
        ".magic-slideRight": {
            animationName: "slideRight",
            animationDuration: "1s",
        },
        ".magic-slideRightReturn": {
            animationName: "slideRightReturn",
            animationDuration: "1s",
        },
        ".magic-slideUp": {
            animationName: "slideUp",
            animationDuration: "1s",
        },
        ".magic-slideUpReturn": {
            animationName: "slideUpReturn",
            animationDuration: "1s",
        },
        ".magic-foolishIn": {
            animationName: "foolishIn",
            animationDuration: "1s",
        },
        ".magic-foolishOut": {
            animationName: "foolishOut",
            animationDuration: "1s",
        },
        ".magic-holeIn": {
            animationName: "holeIn",
            animationDuration: "1s",
        },
        ".magic-holeOut": {
            animationName: "holeOut",
            animationDuration: "1s",
        },
        ".magic-swashIn": {
            animationName: "swashIn",
            animationDuration: "1s",
        },
        ".magic-swashOut": {
            animationName: "swashOut",
            animationDuration: "1s",
        },
        ".magic-tinDownIn": {
            animationName: "tinDownIn",
            animationDuration: "1s",
        },
        ".magic-tinDownOut": {
            animationName: "tinDownOut",
            animationDuration: "1s",
        },
        ".magic-tinLeftIn": {
            animationName: "tinLeftIn",
            animationDuration: "1s",
        },
        ".magic-tinLeftOut": {
            animationName: "tinLeftOut",
            animationDuration: "1s",
        },
        ".magic-tinRightIn": {
            animationName: "tinRightIn",
            animationDuration: "1s",
        },
        ".magic-tinRightOut": {
            animationName: "tinRightOut",
            animationDuration: "1s",
        },
        ".magic-tinUpIn": {
            animationName: "tinUpIn",
            animationDuration: "1s",
        },
        ".magic-tinUpOut": {
            animationName: "tinUpOut",
            animationDuration: "1s",
        },
        ".magic-bombLeftOut": {
            animationName: "bombLeftOut",
            animationDuration: "1s",
        },
        ".magic-bombRightOut": {
            animationName: "bombRightOut",
            animationDuration: "1s",
        },
        ".magic-boingInUp": {
            animationName: "boingInUp",
            animationDuration: "1s",
        },
        ".magic-boingOutDown": {
            animationName: "boingOutDown",
            animationDuration: "1s",
        },
        ".magic-spaceInDown": {
            animationName: "spaceInDown",
            animationDuration: "1s",
        },
        ".magic-spaceInLeft": {
            animationName: "spaceInLeft",
            animationDuration: "1s",
        },
        ".magic-spaceInRight": {
            animationName: "spaceInRight",
            animationDuration: "1s",
        },
        ".magic-spaceInUp": {
            animationName: "spaceInUp",
            animationDuration: "1s",
        },
        ".magic-spaceOutDown": {
            animationName: "spaceOutDown",
            animationDuration: "1s",
        },
        ".magic-spaceOutLeft": {
            animationName: "spaceOutLeft",
            animationDuration: "1s",
        },
        ".magic-spaceOutRight": {
            animationName: "spaceOutRight",
            animationDuration: "1s",
        },
        ".magic-spaceOutUp": {
            animationName: "spaceOutUp",
            animationDuration: "1s",
        },
    };
    addUtilities(fallbackKeyframes, {
        respectImportant: false,
    });
    addUtilities(fallbackUtilities, {
        variants: ["hover"],
        respectImportant: false,
    });
    addAnimationJIT(matchUtilities);
});

module.exports = magicAnimation;
//# sourceMappingURL=index.js.map

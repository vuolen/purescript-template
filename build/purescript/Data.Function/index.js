// Generated by purs version 0.14.4
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var on = function (f) {
    return function (g) {
        return function (x) {
            return function (y) {
                return f(g(x))(g(y));
            };
        };
    };
};
var flip = function (f) {
    return function (b) {
        return function (a) {
            return f(a)(b);
        };
    };
};
var $$const = function (a) {
    return function (v) {
        return a;
    };
};
var applyN = function (f) {
    var go = function ($copy_n) {
        return function ($copy_acc) {
            var $tco_var_n = $copy_n;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(n, acc) {
                if (n <= 0) {
                    $tco_done = true;
                    return acc;
                };
                if (Data_Boolean.otherwise) {
                    $tco_var_n = n - 1 | 0;
                    $copy_acc = f(acc);
                    return;
                };
                throw new Error("Failed pattern match at Data.Function (line 100, column 3 - line 102, column 37): " + [ n.constructor.name, acc.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_n, $copy_acc);
            };
            return $tco_result;
        };
    };
    return go;
};
var applyFlipped = function (x) {
    return function (f) {
        return f(x);
    };
};
var apply = function (f) {
    return function (x) {
        return f(x);
    };
};
module.exports = {
    flip: flip,
    "const": $$const,
    apply: apply,
    applyFlipped: applyFlipped,
    applyN: applyN,
    on: on,
    compose: Control_Category.compose,
    identity: Control_Category.identity
};

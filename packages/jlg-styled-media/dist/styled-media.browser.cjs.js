'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var react = require('react');
var styledComponents = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function _templateObject5() {
  var data = _taggedTemplateLiteral__default['default'](["@media print {\n      ", "\n    }"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral__default['default'](["@media (min-width: ", "px) {\n        ", "\n      }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral__default['default'](["@media (min-width: ", "px) and (max-width: ", "px) {\n        ", "\n      }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral__default['default'](["@media (max-width: ", "px) {\n        ", "\n      }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral__default['default'](["@media (min-width: ", "px) and (max-width: ", "px) {\n        ", "\n      }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var pickBreakpoint = function pickBreakpoint(breakpoint) {
  var adjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (_ref) {
    var theme = _ref.theme;
    return theme.breakpoints[breakpoint] + adjustment;
  };
};

var useBreakpoint = function useBreakpoint(breakpoints) {
  var theme = styledComponents.useTheme();
  var breakpointMap = breakpoints || theme.breakpoints;

  var _useState = react.useState(Object.keys(breakpointMap).find(function (breakpoint) {
    return window.matchMedia("(max-width: ".concat(breakpointMap[breakpoint] - .02, "px)")).matches;
  })),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      breakpoint = _useState2[0],
      setBreakpoint = _useState2[1];

  react.useEffect(function () {
    // todo: use window.matchMedia.addListener(...) instead.
    var listeners = function listeners() {
      setBreakpoint(Object.keys(breakpointMap).find(function (breakpoint) {
        return window.matchMedia("(max-width: ".concat(breakpointMap[breakpoint] - .02, "px)")).matches;
      }));
    };

    window.addEventListener('resize', listeners);
    return function () {
      window.removeEventListener('resize', listeners);
    };
  }, []);
  return breakpoint;
};
var index = {
  breakpoint: {
    between: function between(lower, upper, CSS) {
      var lowerBreakpoint = pickBreakpoint(lower);
      var upperBreakpoint = pickBreakpoint(upper);
      return styledComponents.css(_templateObject(), lowerBreakpoint, upperBreakpoint, CSS);
    },
    down: function down(breakpoint, CSS) {
      return styledComponents.css(_templateObject2(), pickBreakpoint(breakpoint, -0.02), CSS);
    },
    only: function only(breakpoint, CSS) {
      var lower = function lower(_ref2) {
        var theme = _ref2.theme;
        var bps = theme.breakpoints;
        var bpsKeys = Object.keys(bps);
        var idx = bpsKeys.findIndex(function (key) {
          return key === breakpoint;
        }) - 1;
        return bps[bpsKeys[idx]];
      };

      var upper = function upper(_ref3) {
        var theme = _ref3.theme;
        var bps = theme.breakpoints;
        var bpsKeys = Object.keys(bps);
        var idx = bpsKeys.findIndex(function (key) {
          return key === breakpoint;
        }) + 1;
        return bps[bpsKeys[idx]];
      };

      return styledComponents.css(_templateObject3(), lower, upper, CSS);
    },
    up: function up(breakpoint, CSS) {
      return styledComponents.css(_templateObject4(), pickBreakpoint(breakpoint), CSS);
    }
  },
  print: function print(CSS) {
    return styledComponents.css(_templateObject5(), CSS);
  }
};

exports.default = index;
exports.useBreakpoint = useBreakpoint;

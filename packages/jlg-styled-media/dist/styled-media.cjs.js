'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
var styledComponents = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);

function _templateObject5() {
  var data = _taggedTemplateLiteral__default['default'](["\n      @media print {\n        ", "\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral__default['default'](["\n        @media (min-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral__default['default'](["\n        @media (min-width: ", "px) and (max-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral__default['default'](["\n        @media (max-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral__default['default'](["\n        @media (min-width: ", "px) and (max-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var pickBreakpoint = function pickBreakpoint(breakpoint, breakpoints) {
  var adjustment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return function (_ref) {
    var theme = _ref.theme;
    return (!breakpoints ? theme.breakpoints[breakpoint] : breakpoints[breakpoint]) + adjustment;
  };
};

var useBreakpoint = function useBreakpoint() {
  return 'md';
};
var index = {
  breakpoint: {
    between: function between(lower, upper, CSS, breakpoints) {
      var lowerBreakpoint = pickBreakpoint(lower, breakpoints);
      var upperBreakpoint = pickBreakpoint(upper, breakpoints);
      return styledComponents.css(_templateObject(), lowerBreakpoint, upperBreakpoint, CSS);
    },
    down: function down(breakpoint, CSS, breakpoints) {
      return styledComponents.css(_templateObject2(), pickBreakpoint(breakpoint, breakpoints, -0.02), CSS);
    },
    only: function only(breakpoint, CSS, breakpoints) {
      var lower = function lower(_ref2) {
        var theme = _ref2.theme;
        var bps = !breakpoints ? theme.breakpoints : breakpoints;
        var bpsKeys = Object.keys(bps);
        var idx = bpsKeys.findIndex(function (key) {
          return key === breakpoint;
        }) - 1;
        return bps[bpsKeys[idx]];
      };

      var upper = function upper(_ref3) {
        var theme = _ref3.theme;
        var bps = !breakpoints ? theme.breakpoints : breakpoints;
        var bpsKeys = Object.keys(bps);
        var idx = bpsKeys.findIndex(function (key) {
          return key === breakpoint;
        }) + 1;
        return bps[bpsKeys[idx]];
      };

      return styledComponents.css(_templateObject3(), lower, upper, CSS);
    },
    up: function up(breakpoint, CSS, breakpoints) {
      return styledComponents.css(_templateObject4(), pickBreakpoint(breakpoint, breakpoints), CSS);
    }
  },
  print: function print(CSS) {
    return styledComponents.css(_templateObject5(), CSS);
  }
};

exports.default = index;
exports.useBreakpoint = useBreakpoint;

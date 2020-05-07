import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import { css } from 'styled-components';

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      @media print {\n        ", "\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        @media (min-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        @media (min-width: ", "px) and (max-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        @media (max-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        @media (min-width: ", "px) and (max-width: ", "px) {\n          ", "\n        }\n      "]);

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
      return css(_templateObject(), lowerBreakpoint, upperBreakpoint, CSS);
    },
    down: function down(breakpoint, CSS, breakpoints) {
      return css(_templateObject2(), pickBreakpoint(breakpoint, breakpoints, -0.02), CSS);
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

      return css(_templateObject3(), lower, upper, CSS);
    },
    up: function up(breakpoint, CSS, breakpoints) {
      return css(_templateObject4(), pickBreakpoint(breakpoint, breakpoints), CSS);
    }
  },
  print: function print(CSS) {
    return css(_templateObject5(), CSS);
  }
};

export default index;
export { useBreakpoint };

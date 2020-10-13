import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { useState, useEffect } from 'react';
import { css, useTheme } from 'styled-components';

function _templateObject5() {
  var data = _taggedTemplateLiteral(["@media print {\n      ", "\n    }"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["@media (min-width: ", "px) {\n        ", "\n      }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["@media (min-width: ", "px) and (max-width: ", "px) {\n        ", "\n      }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["@media (max-width: ", "px) {\n        ", "\n      }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["@media (min-width: ", "px) and (max-width: ", "px) {\n        ", "\n      }"]);

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
  var theme = useTheme();
  var breakpointMap = breakpoints || theme.breakpoints;

  var _useState = useState(Object.keys(breakpointMap).find(function (breakpoint) {
    return window.matchMedia("(max-width: ".concat(breakpointMap[breakpoint] - .02, "px)")).matches;
  })),
      _useState2 = _slicedToArray(_useState, 2),
      breakpoint = _useState2[0],
      setBreakpoint = _useState2[1];

  useEffect(function () {
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
      return css(_templateObject(), lowerBreakpoint, upperBreakpoint, CSS);
    },
    down: function down(breakpoint, CSS) {
      return css(_templateObject2(), pickBreakpoint(breakpoint, -0.02), CSS);
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

      return css(_templateObject3(), lower, upper, CSS);
    },
    up: function up(breakpoint, CSS) {
      return css(_templateObject4(), pickBreakpoint(breakpoint), CSS);
    }
  },
  print: function print(CSS) {
    return css(_templateObject5(), CSS);
  }
};

export default index;
export { useBreakpoint };

import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import styled, { css, useTheme } from 'styled-components';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import media from '@jlg/styled-media';
import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React from 'react';

function deriveRatio(ratio, viewport) {
  var _ratio$split = ratio.split(':'),
      _ratio$split2 = _slicedToArray(_ratio$split, 2),
      x = _ratio$split2[0],
      y = _ratio$split2[1];

  return parseInt(y, 10) / parseInt(x, 10) * viewport;
}

var AspectRatio = styled.div.withConfig({
  displayName: "AspectRatio",
  componentId: "sc-12aneqa-0"
})(["padding-top:", "%;position:relative;width:100%;& > *{position:absolute;top:0;left:0;right:0;bottom:0;}"], function (_ref) {
  var ratio = _ref.ratio,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 100 : _ref$scale;
  return deriveRatio(ratio, scale);
});

/* eslint @typescript-eslint/no-unsafe-member-access: off */
var marginMap = {
  'm': ['margin'],
  'mb': ['marginBottom'],
  'ml': ['marginLeft'],
  'mr': ['marginRight'],
  'mt': ['marginTop'],
  'mx': ['marginLeft', 'marginRight'],
  'my': ['marginBottom', 'marginTop']
};
var marginKeys = Object.keys(marginMap);
var unpackMargin = function unpackMargin(props) {
  return Object.keys(props).reduce(function (CSS, prop) {
    if (marginKeys.includes(prop)) {
      marginMap[prop].forEach(function (cssProp) {
        CSS[cssProp] = props[prop];
      });
    }

    return CSS;
  }, {});
};
var paddingMap = {
  'p': ['padding'],
  'pb': ['paddingBottom'],
  'pl': ['paddingLeft'],
  'pr': ['paddingRight'],
  'pt': ['paddingTop'],
  'px': ['paddingLeft', 'paddingRight'],
  'py': ['paddingBottom', 'paddingTop']
};
var paddingKeys = Object.keys(paddingMap);
var unpackPadding = function unpackPadding(props) {
  return Object.keys(props).reduce(function (CSS, prop) {
    if (paddingKeys.includes(prop)) {
      paddingMap[prop].forEach(function (cssProp) {
        CSS[cssProp] = props[prop];
      });
    }

    return CSS;
  }, {});
};

var merge = require('deepmerge');

var Box = styled.div.withConfig({
  displayName: "Box",
  componentId: "x4g249-0"
})(function (props) {
  var cssObjects = [];
  cssObjects.push({
    boxSizing: 'border-box'
  });
  cssObjects.push(unpackMargin(props));
  cssObjects.push(unpackPadding(props));

  if (typeof props.w === 'number') {
    cssObjects.push({
      width: "".concat(props.w * 100, "%")
    });
  }

  if (props.theme.breakpoints) {
    Object.keys(props.theme.breakpoints).forEach(function (breakpoint) {
      if (typeof props[breakpoint] !== 'undefined') {
        if (props.theme.breakpoints[breakpoint] === 0) {
          cssObjects.push(unpackMargin(props[breakpoint]));
          cssObjects.push(unpackPadding(props[breakpoint]));

          if (typeof props[breakpoint].w === 'number') {
            var w = props[breakpoint].w;
            cssObjects.push({
              width: "".concat(w * 100, "%")
            });
          }
        } else {
          if (typeof props[breakpoint] === 'number') {
            var _w = props[breakpoint].w;
            cssObjects.push(_defineProperty({}, "@media (min-width: ".concat(props.theme.breakpoints[breakpoint], "px)"), {
              width: "".concat(_w * 100, "%")
            }));
          } else {
            var margins = unpackMargin(props[breakpoint]);

            if (Object.keys(margins).length > 0) {
              cssObjects.push(_defineProperty({}, "@media (min-width: ".concat(props.theme.breakpoints[breakpoint], "px)"), margins));
            }

            var paddings = unpackPadding(props[breakpoint]);

            if (Object.keys(paddings).length > 0) {
              cssObjects.push(_defineProperty({}, "@media (min-width: ".concat(props.theme.breakpoints[breakpoint], "px)"), paddings));
            }

            if (typeof props[breakpoint].w === 'number') {
              var _w2 = props[breakpoint].w;
              cssObjects.push(_defineProperty({}, "@media (min-width: ".concat(props.theme.breakpoints[breakpoint], "px)"), {
                width: "".concat(_w2 * 100, "%")
              }));
            }
          }
        }
      }
    });
  }

  return css(merge.all(cssObjects));
});

/* eslint @typescript-eslint/no-unsafe-member-access: off */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
var Flex = styled.div.withConfig({
  displayName: "Flex",
  componentId: "sc-1j1atj7-0"
})(["", ""], function (props) {
  var cssProps = [];
  cssProps.push(css({
    boxSizing: 'border-box',
    display: 'flex'
  }));
  cssProps.push(css(unpackMargin(props)));
  cssProps.push(css(unpackPadding(props)));

  if (props.alignItems) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    cssProps.push(css({
      alignItems: props.alignItems
    }));
  }

  if (props.flexDirection) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    cssProps.push(css({
      flexDirection: props.flexDirection
    }));
  }

  if (props.flexWrap) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    cssProps.push(css({
      flexWrap: props.flexWrap
    }));
  }

  if (props.theme.breakpoints) {
    Object.keys(props.theme.breakpoints).forEach(function (breakpoint) {
      if (typeof props[breakpoint] !== 'undefined') {
        if (props[breakpoint] === 0) {
          cssProps.push(media.breakpoint.up(breakpoint, css(unpackMargin(props[breakpoint]))));
          cssProps.push(media.breakpoint.up(breakpoint, css(unpackPadding(props[breakpoint]))));
        } else {
          if (typeof props[breakpoint] === 'number') {
            var w = props[breakpoint].w;
            cssProps.push(media.breakpoint.up(breakpoint, css({
              width: "".concat(w * 100, "%")
            })));
          } else {
            cssProps.push(media.breakpoint.up(breakpoint, css(unpackMargin(props[breakpoint]))));
            cssProps.push(media.breakpoint.up(breakpoint, css(unpackPadding(props[breakpoint]))));

            if (typeof props[breakpoint].w === 'number') {
              var _w = props[breakpoint].w;
              cssProps.push(media.breakpoint.up(breakpoint, css({
                width: "".concat(_w * 100, "%")
              })));
            }
          }
        }
      }
    });
  }

  return cssProps.filter(function (css) {
    return Object.keys(css).length > 0;
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var pickColor = function pickColor(theme, name) {
  var _theme$colors;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
  return name ? (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors[name] : undefined;
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


var pickTypographyPreset = function pickTypographyPreset(theme, preset) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (theme.typography) {
    var _theme$typography, _theme$typography$pre, _theme$typography2, _theme$typography2$bo, _theme$typography3, _theme$typography3$bo;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return preset // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ? (_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : (_theme$typography$pre = _theme$typography[preset]) === null || _theme$typography$pre === void 0 ? void 0 : _theme$typography$pre.tag // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    : ((_theme$typography2 = theme.typography) === null || _theme$typography2 === void 0 ? void 0 : (_theme$typography2$bo = _theme$typography2.body1) === null || _theme$typography2$bo === void 0 ? void 0 : _theme$typography2$bo.tag) || ((_theme$typography3 = theme.typography) === null || _theme$typography3 === void 0 ? void 0 : (_theme$typography3$bo = _theme$typography3.body) === null || _theme$typography3$bo === void 0 ? void 0 : _theme$typography3$bo.tag) || undefined;
  } else {
    window.console.error('You need to set a `typography` key on the theme.');
  }
};

var TextBase = styled.span.withConfig({
  displayName: "Text__TextBase",
  componentId: "sc-1gtrfu9-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme,
      useColor = _ref.useColor;

  if (useColor) {
    if (Array.isArray(useColor)) {
      return css(["color:", ";&:hover{color:", ";}"], pickColor(theme, useColor[0]), pickColor(theme, useColor[1].hover));
    } else {
      return css(["color:", ";"], pickColor(theme, useColor));
    }
  }
});
var Text = function Text(_ref2) {
  var color = _ref2.color,
      props = _objectWithoutProperties(_ref2, ["color"]);

  var theme = useTheme(); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  var as = props.as ? props.as : pickTypographyPreset(theme, props.use); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  return /*#__PURE__*/React.createElement(TextBase, _extends({
    as: as,
    useColor: color
  }, props));
};

export { AspectRatio, Box, Flex, Text };

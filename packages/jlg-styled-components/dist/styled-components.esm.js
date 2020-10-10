import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import styled, { css, useTheme } from 'styled-components';
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
  'ml': ['marginLef'],
  'mr': ['marginRight'],
  'mt': ['marginTop'],
  'mx': ['marginLeft', 'marginRight'],
  'my': ['marginBottom', 'marginTop']
}; // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/explicit-module-boundary-types

var unpackMargin = function unpackMargin(props, callback) {
  var CSS = {};
  Object.keys(marginMap).forEach(function (mKey) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (props[mKey]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      marginMap[mKey].forEach(function (cssProp) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        CSS[cssProp] = props[mKey];
      });
    }
  });
  callback(CSS);
};

/* eslint @typescript-eslint/no-unsafe-member-access: off */
var Box = styled.div.withConfig({
  displayName: "Box",
  componentId: "x4g249-0"
})(["", ""], function (props) {
  var cssProps = [];
  cssProps.push(css(["box-sizing:border-box;"])); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error

  unpackMargin(props, function (CSS) {
    return cssProps.push(css(CSS));
  });

  if (props.p) {
    cssProps.push(css(["padding:", ";"], props.p));
  }

  if (props.theme.breakpoints) {
    Object.keys(props.theme.breakpoints).forEach(function (breakpoint) {
      if (typeof props[breakpoint] !== 'undefined') {
        if (props[breakpoint] === 0) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          unpackMargin(props[breakpoint], function (CSS) {
            return cssProps.push(css(CSS));
          });
        } else {
          if (typeof props[breakpoint] === 'number') {
            cssProps.push(media.breakpoint.up(breakpoint, css(["width:", "%;"], props[breakpoint] * 100)));
          } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            unpackMargin(props[breakpoint], function (CSS) {
              return cssProps.push(media.breakpoint.up(breakpoint, css(CSS)));
            });

            if (typeof props[breakpoint].w === 'number') {
              var w = props[breakpoint].w;
              cssProps.push(media.breakpoint.up(breakpoint, css(["width:", "%;"], w * 100)));
            }
          }
        }
      }
    });
  }

  return cssProps;
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
  })); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error

  unpackMargin(props, function (CSS) {
    return cssProps.push(css(CSS));
  });

  if (props.flexWrap) {
    cssProps.push(css(["flex-wrap:", ";"], props.flexWrap));
  }

  if (props.theme.breakpoints) {
    Object.keys(props.theme.breakpoints).forEach(function (breakpoint) {
      if (typeof props[breakpoint] !== 'undefined') {
        if (props[breakpoint] === 0) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          unpackMargin(props[breakpoint], function (CSS) {
            return cssProps.push(css(CSS));
          });
        } else {
          if (typeof props[breakpoint] === 'number') {
            cssProps.push(media.breakpoint.up(breakpoint, css(["width:", "%;"], props[breakpoint] * 100)));
          } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            unpackMargin(props[breakpoint], function (CSS) {
              return cssProps.push(media.breakpoint.up(breakpoint, css(CSS)));
            });

            if (typeof props[breakpoint].w === 'number') {
              var w = props[breakpoint].w;
              cssProps.push(media.breakpoint.up(breakpoint, css(["width:", "%;"], w * 100)));
            }
          }
        }
      }
    });
  }

  return cssProps;
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

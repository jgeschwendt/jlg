'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var styled = require('styled-components');
var media = require('@jlg/styled-media');
var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var media__default = /*#__PURE__*/_interopDefaultLegacy(media);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function deriveRatio(ratio, viewport) {
  var _ratio$split = ratio.split(':'),
      _ratio$split2 = _slicedToArray__default['default'](_ratio$split, 2),
      x = _ratio$split2[0],
      y = _ratio$split2[1];

  return parseInt(y, 10) / parseInt(x, 10) * viewport;
}

var AspectRatio = styled__default['default'].div.withConfig({
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
var paddingMap = {
  'p': ['padding'],
  'pb': ['paddingBottom'],
  'pl': ['paddingLeft'],
  'pr': ['paddingRight'],
  'pt': ['paddingTop'],
  'px': ['paddingLeft', 'paddingRight'],
  'py': ['paddingBottom', 'paddingTop']
}; // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/explicit-module-boundary-types

var unpackPadding = function unpackPadding(props, callback) {
  var CSS = {};
  Object.keys(paddingMap).forEach(function (mKey) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (props[mKey]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      paddingMap[mKey].forEach(function (cssProp) {
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
var Box = styled__default['default'].div.withConfig({
  displayName: "Box",
  componentId: "x4g249-0"
})(["", ""], function (props) {
  var cssProps = [];
  cssProps.push(styled.css({
    boxSizing: 'border-box'
  })); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error

  unpackMargin(props, function (CSS) {
    return cssProps.push(styled.css(CSS));
  }); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error

  unpackPadding(props, function (CSS) {
    return cssProps.push(styled.css(CSS));
  });

  if (typeof props.w === 'number') {
    cssProps.push(styled.css({
      width: "".concat(props.w * 100, "%")
    }));
  }

  if (props.theme.breakpoints) {
    Object.keys(props.theme.breakpoints).forEach(function (breakpoint) {
      if (typeof props[breakpoint] !== 'undefined') {
        if (props[breakpoint] === 0) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          unpackMargin(props[breakpoint], function (CSS) {
            return cssProps.push(styled.css(CSS));
          }); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error

          unpackPadding(props[breakpoint], function (CSS) {
            return cssProps.push(styled.css(CSS));
          });
        } else {
          if (typeof props[breakpoint] === 'number') {
            cssProps.push(media__default['default'].breakpoint.up(breakpoint, styled.css(["width:", "%;"], props[breakpoint] * 100)));
          } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            unpackMargin(props[breakpoint], function (CSS) {
              return cssProps.push(media__default['default'].breakpoint.up(breakpoint, styled.css(CSS)));
            }); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error

            unpackMargin(props[breakpoint], function (CSS) {
              return cssProps.push(media__default['default'].breakpoint.up(breakpoint, styled.css(CSS)));
            });

            if (typeof props[breakpoint].w === 'number') {
              var w = props[breakpoint].w;
              cssProps.push(media__default['default'].breakpoint.up(breakpoint, styled.css(["width:", "%;"], w * 100)));
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
var Flex = styled__default['default'].div.withConfig({
  displayName: "Flex",
  componentId: "sc-1j1atj7-0"
})(["", ""], function (props) {
  var cssProps = [];
  cssProps.push(styled.css({
    boxSizing: 'border-box',
    display: 'flex'
  })); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error

  unpackMargin(props, function (CSS) {
    return cssProps.push(styled.css(CSS));
  });

  if (props.flexDirection) {
    cssProps.push(styled.css(["flex-direction:", ";"], props.flexDirection));
  }

  if (props.flexWrap) {
    cssProps.push(styled.css(["flex-wrap:", ";"], props.flexWrap));
  }

  if (props.theme.breakpoints) {
    Object.keys(props.theme.breakpoints).forEach(function (breakpoint) {
      if (typeof props[breakpoint] !== 'undefined') {
        if (props[breakpoint] === 0) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          unpackMargin(props[breakpoint], function (CSS) {
            return cssProps.push(styled.css(CSS));
          });
        } else {
          if (typeof props[breakpoint] === 'number') {
            cssProps.push(media__default['default'].breakpoint.up(breakpoint, styled.css(["width:", "%;"], props[breakpoint] * 100)));
          } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            unpackMargin(props[breakpoint], function (CSS) {
              return cssProps.push(media__default['default'].breakpoint.up(breakpoint, styled.css(CSS)));
            });

            if (typeof props[breakpoint].w === 'number') {
              var w = props[breakpoint].w;
              cssProps.push(media__default['default'].breakpoint.up(breakpoint, styled.css(["width:", "%;"], w * 100)));
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

var TextBase = styled__default['default'].span.withConfig({
  displayName: "Text__TextBase",
  componentId: "sc-1gtrfu9-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme,
      useColor = _ref.useColor;

  if (useColor) {
    if (Array.isArray(useColor)) {
      return styled.css(["color:", ";&:hover{color:", ";}"], pickColor(theme, useColor[0]), pickColor(theme, useColor[1].hover));
    } else {
      return styled.css(["color:", ";"], pickColor(theme, useColor));
    }
  }
});
var Text = function Text(_ref2) {
  var color = _ref2.color,
      props = _objectWithoutProperties__default['default'](_ref2, ["color"]);

  var theme = styled.useTheme(); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  var as = props.as ? props.as : pickTypographyPreset(theme, props.use); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  return /*#__PURE__*/React__default['default'].createElement(TextBase, _extends__default['default']({
    as: as,
    useColor: color
  }, props));
};

exports.AspectRatio = AspectRatio;
exports.Box = Box;
exports.Flex = Flex;
exports.Text = Text;

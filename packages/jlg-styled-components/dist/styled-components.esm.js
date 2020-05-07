import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import styled, { css } from 'styled-components';
import media from '@jlg/styled-media';
import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React, { Children, cloneElement } from 'react';

console.log('media', media);
var Col = styled.div.withConfig({
  displayName: "Col",
  componentId: "sc-10oih9t-0"
})(["box-sizing:border-box;min-height:1px;padding-left:0.5rem;padding-right:0.5rem;position:relative;width:100%;", ""], function (props) {
  var cssProps = [];

  if (props.gutter) {
    cssProps.push(css(["padding-left:", ";padding-right:", ";"], props.gutter, props.gutter));
  } else {
    cssProps.push(css(["padding-left:.5rem;padding-right:.5rem;"]));
  }

  var breakpoints = Object.keys(props.theme.breakpoints);

  if (breakpoints.length === 0) {
    throw Error('You need to set breakpoint keys on the theme provider.');
  }

  breakpoints.map(function (breakpoint) {
    // eslint-disable-next-line no-prototype-builtins
    if (props.hasOwnProperty(breakpoint)) {
      var _ref = Array.isArray(props[breakpoint]) ? props[breakpoint] : [props[breakpoint], {}],
          _ref2 = _slicedToArray(_ref, 2),
          col = _ref2[0],
          _ref2$ = _ref2[1],
          offset = _ref2$.offset,
          order = _ref2$.order;

      if (props.theme.breakpoints[breakpoint] === 0) {
        if (col !== 0) {
          cssProps.push(css(["flex:0 0 ", "%;max-width:", "%;"], col * 100, col * 100));
        } else {
          cssProps.push(css(["flex:0 0 100%;max-width:100%;"]));
        }

        if (typeof offset === 'number') {
          cssProps.push(css(["margin-left:", "%;"], offset * 100));
        }

        if (typeof order === 'number') {
          cssProps.push(css(["order:", ";"], order));
        }
      } else {
        cssProps.push(media.breakpoint.up(breakpoint, css(["flex:0 0 ", "%;max-width:", "%;"], col * 100, col * 100)));

        if (typeof offset === 'number') {
          cssProps.push(media.breakpoint.up(breakpoint, css(["margin-left:", "%;"], offset * 100)));
        }

        if (typeof order === 'number') {
          cssProps.push(media.breakpoint.up(breakpoint, css(["order:", ";"], order)));
        }
      }
    }
  });

  if (props.withCSS) {
    cssProps.push(props.withCSS);
  }

  return cssProps;
});

var Container = styled.div.withConfig({
  displayName: "Container",
  componentId: "sc-76x9pd-0"
})(["margin-left:auto;margin-right:auto;padding-left:.5rem;padding-right:.5rem;width:100%;", ""], function (props) {
  var cssProps = [];

  if (props.maxWidth) {
    cssProps.push(css(["max-width:", ";"], props.maxWidth));
  }

  return cssProps;
});

var StyledRow = styled.div.withConfig({
  displayName: "Row__StyledRow",
  componentId: "sc-1fx9991-0"
})(["box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;", ""], function (props) {
  var CSS = [];

  if (props.gutter) {
    CSS.push(css(["margin-left:", ";margin-right:", ";"], props.gutter === '0' ? 0 : "-".concat(props.gutter), props.gutter === '0' ? 0 : "-".concat(props.gutter)));
  } else {
    CSS.push(css(["margin-left:-0.5rem;margin-right:-0.5rem;"]));
  }

  if (typeof props.justify === 'string') {
    CSS.push(css(["justify-content:", ";"], props.justify));
  }

  if (props.withCSS) {
    CSS.push(props.withCSS);
  }

  return CSS;
});
var Row = function Row(_ref) {
  var children = _ref.children,
      gutter = _ref.gutter,
      props = _objectWithoutProperties(_ref, ["children", "gutter"]);

  return /*#__PURE__*/React.createElement(StyledRow, _extends({
    gutter: gutter
  }, props), Children.map(children, function (child) {
    return /*#__PURE__*/cloneElement(child, {
      gutter: gutter,
      rowProps: props
    });
  }));
};

var Spacer = styled.div.withConfig({
  displayName: "Spacer",
  componentId: "eb6hbz-0"
})(["", ""], function (props) {
  var cssProps = [];

  if (props.m) {
    var _ref = Array.isArray(props.m) ? props.m : [props.m, {}],
        _ref2 = _slicedToArray(_ref, 2),
        m = _ref2[0],
        mBreakpoints = _ref2[1];

    if (m) {
      cssProps.push(css(["margin:", ";"], m));
    }

    Object.keys(mBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin:", ";"], mBreakpoints[breakpoint])));
    });
  }

  if (props.mb) {
    var _ref3 = Array.isArray(props.mb) ? props.mb : [props.mb, {}],
        _ref4 = _slicedToArray(_ref3, 2),
        mb = _ref4[0],
        mbBreakpoints = _ref4[1];

    if (mb) {
      cssProps.push(css(["margin-bottom:", ";"], mb));
    }

    Object.keys(mbBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-bottom:", ";"], mbBreakpoints[breakpoint])));
    });
  }

  if (props.ml) {
    var _ref5 = Array.isArray(props.ml) ? props.ml : [props.ml, {}],
        _ref6 = _slicedToArray(_ref5, 2),
        ml = _ref6[0],
        mlBreakpoints = _ref6[1];

    if (ml) {
      cssProps.push(css(["margin-left:", ";"], ml));
    }

    Object.keys(mlBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-left:", ";"], mlBreakpoints[breakpoint])));
    });
  }

  if (props.mr) {
    var _ref7 = Array.isArray(props.mr) ? props.mr : [props.mr, {}],
        _ref8 = _slicedToArray(_ref7, 2),
        mr = _ref8[0],
        mrBreakpoints = _ref8[1];

    if (mr) {
      cssProps.push(css(["margin-right:", ";"], mr));
    }

    Object.keys(mrBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-right:", ";"], mrBreakpoints[breakpoint])));
    });
  }

  if (props.mt) {
    var _ref9 = Array.isArray(props.mt) ? props.mt : [props.mt, {}],
        _ref10 = _slicedToArray(_ref9, 2),
        mt = _ref10[0],
        mtBreakpoints = _ref10[1];

    if (mt) {
      cssProps.push(css(["margin-top:", ";"], mt));
    }

    Object.keys(mtBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-top:", ";"], mtBreakpoints[breakpoint])));
    });
  }

  if (props.mx) {
    var _ref11 = Array.isArray(props.mx) ? props.mx : [props.mx, {}],
        _ref12 = _slicedToArray(_ref11, 2),
        mx = _ref12[0],
        mxBreakpoints = _ref12[1];

    if (mx) {
      cssProps.push(css(["margin-left:", ";margin-right:", ";"], mx, mx));
    }

    Object.keys(mxBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-left:", ";margin-right:", ";"], mxBreakpoints[breakpoint], mxBreakpoints[breakpoint])));
    });
  }

  if (props.my) {
    var _ref13 = Array.isArray(props.my) ? props.my : [props.my, {}],
        _ref14 = _slicedToArray(_ref13, 2),
        my = _ref14[0],
        myBreakpoints = _ref14[1];

    if (my) {
      cssProps.push(css(["margin-bottom:", ";margin-top:", ";"], my, my));
    }

    Object.keys(myBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-bottom:", ";margin-top:", ";"], myBreakpoints[breakpoint], myBreakpoints[breakpoint])));
    });
  }

  if (props.p) {
    var _ref15 = Array.isArray(props.p) ? props.p : [props.p, {}],
        _ref16 = _slicedToArray(_ref15, 2),
        p = _ref16[0],
        pBreakpoints = _ref16[1];

    if (p) {
      cssProps.push(css(["padding:", ";"], p));
    }

    Object.keys(pBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding:", ";"], pBreakpoints[breakpoint])));
    });
  }

  if (props.pb) {
    var _ref17 = Array.isArray(props.pb) ? props.pb : [props.pb, {}],
        _ref18 = _slicedToArray(_ref17, 2),
        pb = _ref18[0],
        pbBreakpoints = _ref18[1];

    if (pb) {
      cssProps.push(css(["padding-bottom:", ";"], pb));
    }

    Object.keys(pbBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-bottom:", ";"], pbBreakpoints[breakpoint])));
    });
  }

  if (props.pl) {
    var _ref19 = Array.isArray(props.pl) ? props.pl : [props.pl, {}],
        _ref20 = _slicedToArray(_ref19, 2),
        pl = _ref20[0],
        plBreakpoints = _ref20[1];

    if (pl) {
      cssProps.push(css(["padding-left:", ";"], pl));
    }

    Object.keys(plBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-left:", ";"], plBreakpoints[breakpoint])));
    });
  }

  if (props.pr) {
    var _ref21 = Array.isArray(props.pr) ? props.pr : [props.pr, {}],
        _ref22 = _slicedToArray(_ref21, 2),
        pr = _ref22[0],
        prBreakpoints = _ref22[1];

    if (pr) {
      cssProps.push(css(["padding-right:", ";"], pr));
    }

    Object.keys(prBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-right:", ";"], prBreakpoints[breakpoint])));
    });
  }

  if (props.pt) {
    var _ref23 = Array.isArray(props.pt) ? props.pt : [props.pt, {}],
        _ref24 = _slicedToArray(_ref23, 2),
        pt = _ref24[0],
        ptBreakpoints = _ref24[1];

    if (pt) {
      cssProps.push(css(["padding-top:", ";"], pt));
    }

    Object.keys(ptBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-top:", ";"], ptBreakpoints[breakpoint])));
    });
  }

  if (props.px) {
    var _ref25 = Array.isArray(props.px) ? props.px : [props.px, {}],
        _ref26 = _slicedToArray(_ref25, 2),
        px = _ref26[0],
        pxBreakpoints = _ref26[1];

    if (px) {
      cssProps.push(css(["padding-left:", ";padding-right:", ";"], px, px));
    }

    Object.keys(pxBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-left:", ";padding-right:", ";"], pxBreakpoints[breakpoint], pxBreakpoints[breakpoint])));
    });
  }

  if (props.py) {
    var _ref27 = Array.isArray(props.py) ? props.py : [props.py, {}],
        _ref28 = _slicedToArray(_ref27, 2),
        py = _ref28[0],
        pyBreakpoints = _ref28[1];

    if (py) {
      cssProps.push(css(["padding-bottom:", ";padding-top:", ";"], py, py));
    }

    Object.keys(pyBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-bottom:", ";padding-top:", ";"], pyBreakpoints[breakpoint], pyBreakpoints[breakpoint])));
    });
  }

  return cssProps;
});

export { Col, Container, Row, Spacer };

/* eslint @typescript-eslint/no-unsafe-member-access: off */
import media from '@jlg/styled-media';
import styled, { CSSObject, DefaultTheme, FlattenInterpolation, FlattenSimpleInterpolation, ThemeProps, css } from 'styled-components';
import { Layout, Spacer, unpackMargin, unpackPadding } from '../../core';

type FlexProps = Pick<CSSObject,
  'alignItems' |
  'flexDirection' |
  'flexWrap' |
  'justifyContent'
>;

type BoxProps = DefaultTheme extends { breakpoints: infer U } ? {
  [key in keyof U]?: number | FlexProps & Layout & Spacer;
} & FlexProps & Layout & Spacer & {
  withCSS?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} : FlexProps & Layout & Spacer & {
  [key: string]: unknown;
  withCSS?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const Flex = styled.div<BoxProps>`
  ${(props): FlattenSimpleInterpolation[] => {
    const cssProps = [];

    cssProps.push(css({
      boxSizing: 'border-box',
      display: 'flex',
    }));

    cssProps.push(css(unpackMargin(props)));
    cssProps.push(css(unpackPadding(props)));

    if (props.alignItems) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      cssProps.push(css({ alignItems: props.alignItems }));
    }

    if (props.flexDirection) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      cssProps.push(css({ flexDirection: props.flexDirection }));
    }

    if (props.flexWrap) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      cssProps.push(css({ flexWrap: props.flexWrap }));
    }

    if (props.theme.breakpoints) {
      Object.keys(props.theme.breakpoints).forEach((breakpoint) => {
        if (typeof props[breakpoint] !== 'undefined') {
          if (props[breakpoint] === 0) {
            cssProps.push(media.breakpoint.up(breakpoint, css(unpackMargin(props[breakpoint] as Spacer))));
            cssProps.push(media.breakpoint.up(breakpoint, css(unpackPadding(props[breakpoint] as Spacer))));
          } else {
            if (typeof props[breakpoint] === 'number') {
              const w = (props[breakpoint] as Layout).w as number;
              cssProps.push(media.breakpoint.up(breakpoint, css({ width: `${w * 100}%` })));
            } else {
              cssProps.push(media.breakpoint.up(breakpoint, css(unpackMargin(props[breakpoint] as Spacer))));
              cssProps.push(media.breakpoint.up(breakpoint, css(unpackPadding(props[breakpoint] as Spacer))));

              if (typeof (props[breakpoint] as Layout).w === 'number') {
                const w = (props[breakpoint] as Layout).w as number;
                cssProps.push(media.breakpoint.up(breakpoint, css({ width: `${w * 100}%` })));
              }
            }
          }
        }
      });
    }

    return cssProps.filter((css) => Object.keys(css).length > 0);
  }}
`;

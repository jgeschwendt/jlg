/* eslint @typescript-eslint/no-unsafe-member-access: off */
import media from '@jlg/styled-media';
import styled, { DefaultTheme, FlattenInterpolation, FlattenSimpleInterpolation, ThemeProps, css } from 'styled-components';
import { Layout, Spacer, unpackMargin, unpackPadding } from '../../core';

type BoxProps = DefaultTheme extends { breakpoints: infer U } ? {
  [key in keyof U]?: number | Layout & Spacer;
} & Layout & Spacer & {
  withCSS?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} : Layout & Spacer & {
  [key: string]: unknown;
  withCSS?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

export const Box = styled.div<BoxProps>`
  ${(props): FlattenSimpleInterpolation[] => {
    const cssProps = [];

    cssProps.push(css({ boxSizing: 'border-box' }));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    unpackMargin(props, (CSS) => cssProps.push(css(CSS)));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    unpackPadding(props, (CSS) => cssProps.push(css(CSS)));

    if (typeof props.w === 'number') {
      cssProps.push(css({ width: `${props.w * 100}%` }));
    }

    if (props.theme.breakpoints) {
      Object.keys(props.theme.breakpoints).forEach((breakpoint) => {
        if (typeof props[breakpoint] !== 'undefined') {
          if (props[breakpoint] === 0) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            unpackMargin(props[breakpoint] as Spacer, (CSS) => cssProps.push(css(CSS)));
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            unpackPadding(props[breakpoint] as Spacer, (CSS) => cssProps.push(css(CSS)));
          } else {
            if (typeof props[breakpoint] === 'number') {
              cssProps.push(media.breakpoint.up(breakpoint, css`width: ${props[breakpoint] as number * 100}%;`));
            } else {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              unpackMargin(props[breakpoint] as Spacer, (CSS) => cssProps.push(media.breakpoint.up(breakpoint, css(CSS))));
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              unpackMargin(props[breakpoint] as Spacer, (CSS) => cssProps.push(media.breakpoint.up(breakpoint, css(CSS))));

              if (typeof (props[breakpoint] as Layout).w === 'number') {
                const w = (props[breakpoint] as Layout).w as number;
                cssProps.push(media.breakpoint.up(breakpoint, css`width: ${w * 100}%;`));
              }
            }
          }
        }
      });
    }

    return cssProps;
  }}
`;

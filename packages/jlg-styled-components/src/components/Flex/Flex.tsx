/* eslint @typescript-eslint/no-unsafe-member-access: off */
import media from '@jlg/styled-media';
import styled, { DefaultTheme, FlattenInterpolation, FlattenSimpleInterpolation, ThemeProps, css } from 'styled-components';
import { Layout, Spacer, unpackMargin } from '../../core';

type FlexProps = {
  alignItems?: string;
  flexDirection?: string;
  flexWrap?: string;
};

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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    unpackMargin(props, (CSS) => cssProps.push(css(CSS)));

    if (props.flexDirection) {
      cssProps.push(css`flex-direction: ${props.flexDirection};`);
    }

    if (props.flexWrap) {
      cssProps.push(css`flex-wrap: ${props.flexWrap};`);
    }

    if (props.theme.breakpoints) {
      Object.keys(props.theme.breakpoints).forEach((breakpoint) => {
        if (typeof props[breakpoint] !== 'undefined') {
          if (props[breakpoint] === 0) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            unpackMargin(props[breakpoint] as Spacer, (CSS) => cssProps.push(css(CSS)));
          } else {
            if (typeof props[breakpoint] === 'number') {
              cssProps.push(media.breakpoint.up(breakpoint, css`width: ${props[breakpoint] as number * 100}%;`));
            } else {
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

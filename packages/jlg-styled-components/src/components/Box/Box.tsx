/* eslint @typescript-eslint/no-unsafe-member-access: off */
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components';
import { Layout, Spacer, unpackMargin, unpackPadding } from '../../core';

// todo: replace later
const merge = require('deepmerge');

type BoxProps = DefaultTheme extends { breakpoints: infer U } ? {
  [key in keyof U]?: number | Layout & Spacer;
} & Layout & Spacer & {
  withCSS?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} : Layout & Spacer & {
  [key: string]: unknown;
  withCSS?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

export const Box = styled.div<BoxProps>(
  (props): FlattenSimpleInterpolation[] => {
    const cssObjects = [];

    cssObjects.push({ boxSizing: 'border-box' });
    cssObjects.push(unpackMargin(props));
    cssObjects.push(unpackPadding(props));

    if (typeof props.w === 'number') {
      cssObjects.push({ width: `${props.w * 100}%` });
    }

    if (props.theme.breakpoints) {
      Object.keys(props.theme.breakpoints).forEach((breakpoint) => {
        if (typeof props[breakpoint] !== 'undefined') {
          if (props.theme.breakpoints[breakpoint] === 0) {
            cssObjects.push(unpackMargin(props[breakpoint] as Spacer));
            cssObjects.push(unpackPadding(props[breakpoint] as Spacer));

            if (typeof (props[breakpoint] as Layout).w === 'number') {
              const w = (props[breakpoint] as Layout).w as number;
              cssObjects.push({ width: `${w * 100}%` });
            }
          } else {
            if (typeof props[breakpoint] === 'number') {
              const w = (props[breakpoint] as Layout).w as number;
              cssObjects.push({
                [`@media (min-width: ${props.theme.breakpoints[breakpoint]}px)`]: { width: `${w * 100}%` },
              });
            } else {
              const margins = unpackMargin(props[breakpoint] as Spacer);
              if (Object.keys(margins).length > 0) {
                cssObjects.push({
                  [`@media (min-width: ${props.theme.breakpoints[breakpoint]}px)`]: margins,
                });
              }

              const paddings = unpackPadding(props[breakpoint] as Spacer);
              if (Object.keys(paddings).length > 0) {
                cssObjects.push({
                  [`@media (min-width: ${props.theme.breakpoints[breakpoint]}px)`]: paddings,
                });
              }

              if (typeof (props[breakpoint] as Layout).w === 'number') {
                const w = (props[breakpoint] as Layout).w as number;
                cssObjects.push({
                  [`@media (min-width: ${props.theme.breakpoints[breakpoint]}px)`]: { width: `${w * 100}%` },
                });
              }
            }
          }
        }
      });
    }

    return merge.all(cssObjects);
  },
);

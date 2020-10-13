/* eslint @typescript-eslint/no-unsafe-assignment: off */
/* eslint @typescript-eslint/no-unsafe-member-access: off */
import { useEffect, useState } from 'react';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  css,
  useTheme,
} from 'styled-components';

type Breakpoints = DefaultTheme extends { breakpoints: infer U } ? U : Record<string, number>;
type Breakpoint = keyof Breakpoints;

const pickBreakpoint = (breakpoint: Breakpoint, adjustment = 0) => (
  ({ theme }: ThemeProps<DefaultTheme & { breakpoints: Breakpoints }>): number => (
    theme.breakpoints[breakpoint] as number + adjustment
  )
);

export const useBreakpoint = (breakpoints?: Breakpoints): Breakpoint => {
  const theme = useTheme() as DefaultTheme & { breakpoints: Breakpoints };
  const breakpointMap = breakpoints || theme.breakpoints;

  const [breakpoint, setBreakpoint] = useState(Object.keys(breakpointMap).find((breakpoint) => {
    return window.matchMedia(`(max-width: ${breakpointMap[breakpoint] as number - .02}px)`).matches;
  }) as Breakpoint);

  useEffect(() => {
    // todo: use window.matchMedia.addListener(...) instead.
    const listeners = () => {
      setBreakpoint(Object.keys(breakpointMap).find((breakpoint) => {
        return window.matchMedia(`(max-width: ${breakpointMap[breakpoint] as number - .02}px)`).matches;
      }) as Breakpoint);
    };

    window.addEventListener('resize', listeners);
    return () => {
      window.removeEventListener('resize', listeners);
    };
  }, []);

  return breakpoint;
};

export default {
  breakpoint: {
    between(
      lower: Breakpoint,
      upper: Breakpoint,
      CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>,
    ): FlattenInterpolation<ThemeProps<DefaultTheme>> {
      const lowerBreakpoint = pickBreakpoint(lower);
      const upperBreakpoint = pickBreakpoint(upper);
      return css`@media (min-width: ${lowerBreakpoint}px) and (max-width: ${upperBreakpoint}px) {
        ${CSS}
      }`;
    },
    down(
      breakpoint: Breakpoint,
      CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>,
    ): FlattenInterpolation<ThemeProps<DefaultTheme>> {
      return css`@media (max-width: ${pickBreakpoint(breakpoint, -0.02)}px) {
        ${CSS}
      }`;
    },
    only(
      breakpoint: Breakpoint,
      CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>,
    ): FlattenInterpolation<ThemeProps<DefaultTheme>> {
      const lower = ({ theme }: ThemeProps<DefaultTheme & { breakpoints: Breakpoints }>): number => {
        const bps = theme.breakpoints;
        const bpsKeys = Object.keys(bps);
        const idx = bpsKeys.findIndex(key => key === breakpoint) - 1;
        return bps[bpsKeys[idx]] as number;
      };

      const upper = ({ theme }: ThemeProps<DefaultTheme & { breakpoints: Breakpoints }>): number => {
        const bps = theme.breakpoints;
        const bpsKeys = Object.keys(bps);
        const idx = bpsKeys.findIndex(key => key === breakpoint) + 1;
        return bps[bpsKeys[idx]] as number;
      };

      return css`@media (min-width: ${lower}px) and (max-width: ${upper}px) {
        ${CSS}
      }`;
    },
    up(
      breakpoint: Breakpoint,
      CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>,
    ): FlattenInterpolation<ThemeProps<DefaultTheme>> {
      return css`@media (min-width: ${pickBreakpoint(breakpoint)}px) {
        ${CSS}
      }` ;
    },
  },
  print(CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>): FlattenInterpolation<ThemeProps<DefaultTheme>> {
    return css`@media print {
      ${CSS}
    }`;
  },
};

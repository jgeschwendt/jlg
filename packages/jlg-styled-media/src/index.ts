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
  ({ theme }: ThemeProps<DefaultTheme & { breakpoints: Breakpoints }>): number => (theme.breakpoints[breakpoint] + adjustment)
);

export const useBreakpoint = (breakpoints?: Breakpoints): Breakpoint => {
  const theme = useTheme() as DefaultTheme & { breakpoints: Breakpoints };

  return Object.keys(breakpoints || theme.breakpoints).pop() as Breakpoint;
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
      return css`
        @media (min-width: ${lowerBreakpoint}px) and (max-width: ${upperBreakpoint}px) {
          ${CSS}
        }
      `;
    },
    down(
      breakpoint: Breakpoint,
      CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>,
    ): FlattenInterpolation<ThemeProps<DefaultTheme>> {
      return css`
        @media (max-width: ${pickBreakpoint(breakpoint, -0.02)}px) {
          ${CSS}
        }
      `;
    },
    only(
      breakpoint: Breakpoint,
      CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>,
    ): FlattenInterpolation<ThemeProps<DefaultTheme>> {
      const lower = ({ theme }: ThemeProps<DefaultTheme & { breakpoints: Breakpoints }>): number => {
        const bps = theme.breakpoints;
        const bpsKeys = Object.keys(bps);
        const idx = bpsKeys.findIndex(key => key === breakpoint) - 1;
        return bps[bpsKeys[idx]];
      };

      const upper = ({ theme }: ThemeProps<DefaultTheme & { breakpoints: Breakpoints }>): number => {
        const bps = theme.breakpoints;
        const bpsKeys = Object.keys(bps);
        const idx = bpsKeys.findIndex(key => key === breakpoint) + 1;
        return bps[bpsKeys[idx]];
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

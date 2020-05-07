import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  css,
} from 'styled-components';

type Breakpoint = keyof DefaultTheme['breakpoints'];

const pickBreakpoint = (breakpoint: Breakpoint, breakpoints?: { [key: string]: number }, adjustment = 0) => (
  ({ theme }: ThemeProps<DefaultTheme>): number => (
    (!breakpoints ? theme.breakpoints[breakpoint] : breakpoints[breakpoint]) + adjustment
  )
);

export const useBreakpoint = (): keyof DefaultTheme['breakpoints'] => {
  return 'md' as keyof DefaultTheme['breakpoints'];
};

export default {
  breakpoint: {
    between(
      lower: Breakpoint,
      upper: Breakpoint,
      CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>,
      breakpoints?: { [key: string]: number },
    ): FlattenInterpolation<ThemeProps<DefaultTheme>> {
      const lowerBreakpoint = pickBreakpoint(lower, breakpoints);
      const upperBreakpoint = pickBreakpoint(upper, breakpoints);
      return css`
        @media (min-width: ${lowerBreakpoint}px) and (max-width: ${upperBreakpoint}px) {
          ${CSS}
        }
      `;
    },
    down(
      breakpoint: Breakpoint,
      CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>,
      breakpoints?: { [key: string]: number },
    ): FlattenInterpolation<ThemeProps<DefaultTheme>> {
      return css`
        @media (max-width: ${pickBreakpoint(breakpoint, breakpoints, -0.02)}px) {
          ${CSS}
        }
      `;
    },
    only(
      breakpoint: Breakpoint,
      CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>,
      breakpoints?: { [key: string]: number },
    ): FlattenInterpolation<ThemeProps<DefaultTheme>> {
      const lower = ({ theme }: ThemeProps<DefaultTheme>): number => {
        const bps = !breakpoints ? theme.breakpoints : breakpoints;
        const bpsKeys = Object.keys(bps);
        const idx = bpsKeys.findIndex(key => key === breakpoint) - 1;
        return bps[bpsKeys[idx]];
      };

      const upper = ({ theme }: ThemeProps<DefaultTheme>): number => {
        const bps = !breakpoints ? theme.breakpoints : breakpoints;
        const bpsKeys = Object.keys(bps);
        const idx = bpsKeys.findIndex(key => key === breakpoint) + 1;
        return bps[bpsKeys[idx]];
      };

      return css`
        @media (min-width: ${lower}px) and (max-width: ${upper}px) {
          ${CSS}
        }
      `;
    },
    up(
      breakpoint: Breakpoint,
      CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>,
      breakpoints?: { [key: string]: number },
    ): FlattenInterpolation<ThemeProps<DefaultTheme>> {
      return css`
        @media (min-width: ${pickBreakpoint(breakpoint, breakpoints)}px) {
          ${CSS}
        }
      ` ;
    },
  },
  print(CSS: FlattenInterpolation<ThemeProps<DefaultTheme>>): FlattenInterpolation<ThemeProps<DefaultTheme>> {
    return css`
      @media print {
        ${CSS}
      }
    `;
  },
};

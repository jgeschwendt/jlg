import 'styled-components';

import { theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof theme.breakpoints;
    colors: typeof theme.colors;
    typography: typeof theme.typography;
  }
}

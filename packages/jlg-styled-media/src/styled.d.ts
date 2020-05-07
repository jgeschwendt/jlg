import 'styled-components';

declare type Breakpoints = Record<string, number>;

declare module 'styled-components' {
  export interface DefaultTheme {
    // eslint-disable-next-line @typescript-eslint/ban-types
    breakpoints: Breakpoints;
  }
}

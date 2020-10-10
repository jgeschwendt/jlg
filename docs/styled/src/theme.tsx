import React from 'react';
import { ThemeProvider, css } from 'styled-components';

const text = {
  body1: css``,
  body2: css``,
};

export const theme = {
  /* eslint-disable sort-keys */
  breakpoints: {
    all: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  /* eslint-enable sort-keys */
  colors: {
    'named.black': 'rgba(0,0,0,0)',
    'named.gold': '#FFD700',
    'named.msu.green': '#18453b',
    'named.white': 'rgba(255,255,255,0)',
    'state.danger': 'red',
    'state.warning': 'orange',
  },
  typography: {
    body1: { css: text.body1, tag: 'p' },
    body2: { css: text.body2, tag: 'p' },
  },
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const Theme = ({ children }: React.PropsWithChildren<{}>): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

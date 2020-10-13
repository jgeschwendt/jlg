import { Text } from '@jlg/styled-components';
import { useBreakpoint } from '@jlg/styled-media';
import React from 'react';
import { withTheme } from './theme';

export default { title: "Hooks" };

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const UseBreakpoint = withTheme(() => {
  const breakpoint = useBreakpoint();
  return (
    <Text>Breakpoint: <code>{breakpoint}</code></Text>
  );
});

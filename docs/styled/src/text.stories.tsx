import { Text } from '@jlg/styled-components';
import React from 'react';
import { Theme } from './theme';

export default { title: "Text" };

export const Typography = (): JSX.Element => (
  <Theme>
    <Text>Default</Text>
    <Text use="body1">Body 1</Text>
    <Text use="body2">Body 1</Text>

    <Text color="named.msu.green">Color Simple</Text>
    <Text color={['named.msu.green', { hover: 'named.gold' }]}>Color Hover</Text>
  </Theme>
);

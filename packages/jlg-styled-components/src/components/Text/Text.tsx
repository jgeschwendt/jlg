import React from 'react';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps, css, useTheme } from 'styled-components';

type ColorKey = DefaultTheme extends { colors: infer U } ? keyof U : string;
type ColorProp = ColorKey | [ColorKey, {
  active?: ColorKey;
  focus?: ColorKey;
  hover?: ColorKey;
}];

type TextProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
  color?: ColorProp;
  use?: DefaultTheme extends { typography: infer U } ? keyof U : string;
  withCSS?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pickColor = (theme: any, name?: string): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
  return name ? theme.colors?.[name] : undefined;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pickTypographyPreset = (theme: any, preset?: string): string | undefined => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (theme.typography) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return preset
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ? theme.typography?.[preset]?.tag
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      : theme.typography?.body1?.tag || theme.typography?.body?.tag || undefined;
  } else {
    window.console.error('You need to set a `typography` key on the theme.');
  }
};

const TextBase = styled.span<TextProps & { useColor: ColorProp }>`
  ${({ theme, useColor }) => {
    if (useColor) {
      if (Array.isArray(useColor)) {
        return css`
          color: ${pickColor(theme, useColor[0])};
          &:hover {
            color: ${pickColor(theme, useColor[1].hover)};
          }
        `;
      } else {
        return css`
          color: ${pickColor(theme, useColor)};
        `;
      }
    }
  }}
`;

export const Text = ({ color, ...props}: React.PropsWithChildren<TextProps>): JSX.Element => {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const as = props.as ? props.as : pickTypographyPreset(theme, props.use);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return <TextBase as={as} useColor={color as ColorProp} {...props} />;
};

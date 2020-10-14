import { CSSObject } from "styled-components";

/* eslint @typescript-eslint/no-unsafe-member-access: off */
export type Spacer = {
  m?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mx?: string;
  my?: string;
  p?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  px?: string;
  py?: string;
};

export type Layout = {
  w?: number;
};

const marginMap = {
  'm': ['margin'],
  'mb': ['marginBottom'],
  'ml': ['marginLeft'],
  'mr': ['marginRight'],
  'mt': ['marginTop'],
  'mx': ['marginLeft', 'marginRight'],
  'my': ['marginBottom', 'marginTop'],
};

const marginKeys = Object.keys(marginMap);

export const unpackMargin = (props: Spacer): CSSObject => {
  return Object.keys(props).reduce<CSSObject>((CSS, prop) => {
    if (marginKeys.includes(prop)) {
      marginMap[prop as keyof typeof marginMap].forEach((cssProp) => {
        CSS[cssProp] = props[prop as keyof typeof props];
      });
    }
    return CSS;
  }, {});
};

const paddingMap = {
  'p': ['padding'],
  'pb': ['paddingBottom'],
  'pl': ['paddingLeft'],
  'pr': ['paddingRight'],
  'pt': ['paddingTop'],
  'px': ['paddingLeft', 'paddingRight'],
  'py': ['paddingBottom', 'paddingTop'],
};

const paddingKeys = Object.keys(paddingMap);

export const unpackPadding = (props: Spacer): CSSObject => {
  return Object.keys(props).reduce<CSSObject>((CSS, prop) => {
    if (paddingKeys.includes(prop)) {
      paddingMap[prop as keyof typeof paddingMap].forEach((cssProp) => {
        CSS[cssProp] = props[prop as keyof typeof props];
      });
    }
    return CSS;
  }, {});
};

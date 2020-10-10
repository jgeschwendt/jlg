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
  'ml': ['marginLef'],
  'mr': ['marginRight'],
  'mt': ['marginTop'],
  'mx': ['marginLeft', 'marginRight'],
  'my': ['marginBottom', 'marginTop'],
};

// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/explicit-module-boundary-types
export const unpackMargin = (props: Spacer, callback: (css: object) => void) => {
  const CSS = {};

  Object.keys(marginMap).forEach((mKey) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (props[mKey]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      marginMap[mKey].forEach((cssProp) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        CSS[cssProp] = props[mKey];
      });
    }
  });

  callback(CSS);
};

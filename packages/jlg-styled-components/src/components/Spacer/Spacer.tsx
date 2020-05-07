import styled, { css } from 'styled-components';
import media from '@jlg/styled-media';

interface SpacerBreakpoints {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

type SpacerEnum = [string, SpacerBreakpoints];

interface SpacerProps {
  m?: string | SpacerEnum;
  mb?: string | SpacerEnum;
  ml?: string | SpacerEnum;
  mr?: string | SpacerEnum;
  mt?: string | SpacerEnum;
  mx?: string | SpacerEnum;
  my?: string | SpacerEnum;
  p?: string | SpacerEnum;
  pb?: string | SpacerEnum;
  pl?: string | SpacerEnum;
  pr?: string | SpacerEnum;
  pt?: string | SpacerEnum;
  px?: string | SpacerEnum;
  py?: string | SpacerEnum;
}

export const Spacer = styled.div<SpacerProps>`
  ${(props) => {
    const cssProps = [];

    if (props.m) {
      const [m, mBreakpoints]: SpacerEnum = Array.isArray(props.m) ? props.m : [props.m, {} as SpacerBreakpoints];

      if (m) {
        cssProps.push(css`margin: ${m};`);
      }

      Object.keys(mBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          margin: ${mBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.mb) {
      const [mb, mbBreakpoints]: SpacerEnum = Array.isArray(props.mb) ? props.mb : [props.mb, {} as SpacerBreakpoints];

      if (mb) {
        cssProps.push(css`margin-bottom: ${mb};`);
      }

      Object.keys(mbBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          margin-bottom: ${mbBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.ml) {
      const [ml, mlBreakpoints]: SpacerEnum = Array.isArray(props.ml) ? props.ml : [props.ml, {} as SpacerBreakpoints];

      if (ml) {
        cssProps.push(css`margin-left: ${ml};`);
      }

      Object.keys(mlBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          margin-left: ${mlBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.mr) {
      const [mr, mrBreakpoints]: SpacerEnum = Array.isArray(props.mr) ? props.mr : [props.mr, {} as SpacerBreakpoints];

      if (mr) {
        cssProps.push(css`margin-right: ${mr};`);
      }

      Object.keys(mrBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          margin-right: ${mrBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.mt) {
      const [mt, mtBreakpoints]: SpacerEnum = Array.isArray(props.mt) ? props.mt : [props.mt, {} as SpacerBreakpoints];

      if (mt) {
        cssProps.push(css`margin-top: ${mt};`);
      }

      Object.keys(mtBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          margin-top: ${mtBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.mx) {
      const [mx, mxBreakpoints]: SpacerEnum = Array.isArray(props.mx) ? props.mx : [props.mx, {} as SpacerBreakpoints];

      if (mx) {
        cssProps.push(css`
          margin-left: ${mx};
          margin-right: ${mx};
        `);
      }

      Object.keys(mxBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          margin-left: ${mxBreakpoints[breakpoint as keyof SpacerBreakpoints]};
          margin-right: ${mxBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.my) {
      const [my, myBreakpoints]: SpacerEnum = Array.isArray(props.my) ? props.my : [props.my, {} as SpacerBreakpoints];

      if (my) {
        cssProps.push(css`
          margin-bottom: ${my};
          margin-top: ${my};
        `);
      }

      Object.keys(myBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          margin-bottom: ${myBreakpoints[breakpoint as keyof SpacerBreakpoints]};
          margin-top: ${myBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.p) {
      const [p, pBreakpoints]: SpacerEnum = Array.isArray(props.p) ? props.p : [props.p, {} as SpacerBreakpoints];

      if (p) {
        cssProps.push(css`padding: ${p};`);
      }

      Object.keys(pBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          padding: ${pBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.pb) {
      const [pb, pbBreakpoints]: SpacerEnum = Array.isArray(props.pb) ? props.pb : [props.pb, {} as SpacerBreakpoints];

      if (pb) {
        cssProps.push(css`padding-bottom: ${pb};`);
      }

      Object.keys(pbBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          padding-bottom: ${pbBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.pl) {
      const [pl, plBreakpoints]: SpacerEnum = Array.isArray(props.pl) ? props.pl : [props.pl, {} as SpacerBreakpoints];

      if (pl) {
        cssProps.push(css`padding-left: ${pl};`);
      }

      Object.keys(plBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          padding-left: ${plBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.pr) {
      const [pr, prBreakpoints]: SpacerEnum = Array.isArray(props.pr) ? props.pr : [props.pr, {} as SpacerBreakpoints];

      if (pr) {
        cssProps.push(css`padding-right: ${pr};`);
      }

      Object.keys(prBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          padding-right: ${prBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.pt) {
      const [pt, ptBreakpoints]: SpacerEnum = Array.isArray(props.pt) ? props.pt : [props.pt, {} as SpacerBreakpoints];

      if (pt) {
        cssProps.push(css`padding-top: ${pt};`);
      }

      Object.keys(ptBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          padding-top: ${ptBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.px) {
      const [px, pxBreakpoints]: SpacerEnum = Array.isArray(props.px) ? props.px : [props.px, {} as SpacerBreakpoints];

      if (px) {
        cssProps.push(css`
          padding-left: ${px};
          padding-right: ${px};
        `);
      }

      Object.keys(pxBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          padding-left: ${pxBreakpoints[breakpoint as keyof SpacerBreakpoints]};
          padding-right: ${pxBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }

    if (props.py) {
      const [py, pyBreakpoints]: SpacerEnum = Array.isArray(props.py) ? props.py : [props.py, {} as SpacerBreakpoints];

      if (py) {
        cssProps.push(css`
          padding-bottom: ${py};
          padding-top: ${py};
        `);
      }

      Object.keys(pyBreakpoints).forEach((breakpoint) => {
        cssProps.push(media.breakpoint.up(breakpoint as any, css`
          padding-bottom: ${pyBreakpoints[breakpoint as keyof SpacerBreakpoints]};
          padding-top: ${pyBreakpoints[breakpoint as keyof SpacerBreakpoints]};
        `));
      });
    }
    return cssProps;
  }}
`;

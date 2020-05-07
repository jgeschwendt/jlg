// import { Spacer } from '../Spacer';
import React, { Children, cloneElement } from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

type JustifyContentProps = 'center' | 'flex-end' | 'flex-start';

interface RowProps {
  children: React.ReactElement | React.ReactElement[];
  gutter?: string;
  justify?: JustifyContentProps;
  withCSS?: any;
}

const StyledRow = styled.div<RowProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${(props): FlattenSimpleInterpolation[] => {
    const CSS: FlattenSimpleInterpolation[] = [];

    if (props.gutter) {
      CSS.push(css`
        margin-left: ${props.gutter === '0' ? 0 : `-${props.gutter}`};
        margin-right: ${props.gutter === '0' ? 0 : `-${props.gutter}`};
      `);
    } else {
      CSS.push(css`
        margin-left: -0.5rem;
        margin-right: -0.5rem;
      `);
    }

    if (typeof props.justify === 'string') {
      CSS.push(css`justify-content: ${props.justify};`);
    }

    if (props.withCSS) {
      CSS.push(props.withCSS);
    }

    return CSS;
  }}
`;

export const Row = ({ children, gutter, ...props }: RowProps): JSX.Element => (
  <StyledRow gutter={gutter} { ...props }>
    {Children.map(children, (child) => (
      cloneElement(child, { gutter, rowProps: props })
    ))}
  </StyledRow>
);

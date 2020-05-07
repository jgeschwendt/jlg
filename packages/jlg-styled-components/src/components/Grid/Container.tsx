import styled, { css } from 'styled-components';

interface ContainerProps {
  maxWidth?: string;
}

export const Container = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  padding-left: .5rem;
  padding-right: .5rem;
  width: 100%;

  ${(props) => {
    const cssProps = [];

    if (props.maxWidth) {
      cssProps.push(css`max-width: ${props.maxWidth};`);
    }

    return cssProps;
  }}
`;


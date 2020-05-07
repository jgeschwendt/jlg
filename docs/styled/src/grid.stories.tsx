/* eslint-disable */
/* eslint eslint-comments/disable-enable-pair: off */
/* eslint eslint-comments/no-unlimited-disable: off */
import { Col, Container, Row } from '@jlg/styled-components';
import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

const theme = {
  breakpoints: {
    all: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  colors: {
    red: 'red',
  },
} as const;

const Spacer = styled.div<any>``;

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof theme.breakpoints;
  }
}

const withTheme = (Component: () => JSX.Element, _theme = theme) => (): JSX.Element => (
  <ThemeProvider theme={_theme}>
    <Component />
  </ThemeProvider>
);


const BoxColor = styled.div`
  background-color: ${(props) => props.color};
  padding: 1rem;
  text-align: center;
`;

const BoxBadge = styled.div`
  background-color: #eee;
  border-radius: 1.5rem;
  color: #333;
  display: inline-block;
  font-size: 1rem;
  padding: 1rem;
`;

const Box: any = ({ children, ...props }: any) => (
  <BoxColor color={getRandomColor()} {...props}>
    <BoxBadge>{children}</BoxBadge>
  </BoxColor>
);

const example01 = withTheme((): JSX.Element => (
  <Container>
    <h2>Example 01</h2>
    <Row>
      <Col md={[1 / 8, { offset: 2 / 8 }]}>😀</Col>
      <Col md={1 / 8}>😎</Col>
      <Col md={1 / 8}>👍</Col>
      <Col md={1 / 8}>💯</Col>
    </Row>
  </Container>
));

const example02 = withTheme(() => (
  <Container maxWidth='1200px' style={{ outline: '1px solid blue' }}>
    <h2>Example 02</h2>
    {[1, 2, 3].map((row) => (
      <Row justify='center'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((col) => (
          <Col
            key={`${row}-${col}`}
            sm={1 / 3}
            md={1 / 4}
            lg={1 / 5}
            xl={1 / 6}
          >
            <Box>{row}:{col}</Box>
          </Col>
        ))}
      </Row>
    ))}
  </Container>
));

const example03 = withTheme(() => (
  <div style={{ margin: 'auto', maxWidth: '1200px', outline: '1px solid blue' }}>
    <h2>Example 03</h2>
    {[1, 2, 3].map((row) => (
      <Row gutter='0' justify='center'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((col) => (
          <Col
            key={`${row}-${col}`}
            sm={1 / 3}
            md={1 / 4}
            lg={1 / 5}
            xl={1 / 6}
          ><Box>{row}:{col}</Box>
          </Col>
        ))}
      </Row>
    ))}
  </div>
));

const Dot = styled.div`
  border-radius: 50%;
  background: ${getRandomColor()};
  width: 100%;
  padding-top: 100%;
  height: 0;
`;

const example04 = withTheme(() => (
  <div style={{ margin: 'auto', maxWidth: '1200px', outline: '1px solid blue' }}>
    <h2>Example 04</h2>
    {[...Array(8).keys()].map((row) => (
      <Row gutter='0'>
        {[...Array(8).keys()].map((col) => (
          <Col key={`${row}-${col}`} all={[(col+1) / 100, { offset: (row+1) / 100 }]}>
            <Dot/>
          </Col>
        ))}
      </Row>
    ))}
    <br />
    {[...Array(8).keys()].reverse().map((row) => (
      <Row gutter='0' withCSS={css`flex-direction: row-reverse`}>
        {[...Array(8).keys()].map((col) => (
          <Col key={`${row}-${col}`} all={[(col+1) / 100, { offset: (row+1) / 100 }]}>
            <Dot/>
          </Col>
        ))}
      </Row>
    ))}
  </div>
));

const example05 = withTheme(() => (
  <Container maxWidth='1200px' style={{ outline: '1px solid blue' }}>
    <Row>
      <Col md={8 / 12} style={{ outline: '1px solid blue' }}>
        <Spacer py={['1rem', { sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem' }]}>
          col-md-8
        </Spacer>
        <Row>
          <Col md={6 / 12} style={{ outline: '1px solid blue' }}>
            <Spacer py={['1rem', { sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem' }]}>
              col-md-6
            </Spacer>
          </Col>
          <Col md={6 / 12} style={{ outline: '1px solid blue' }}>
            <Spacer py={['1rem', { sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem' }]}>
              col-md-6
            </Spacer>
          </Col>
        </Row>
      </Col>
      <Col md={4 / 12} style={{ outline: '1px solid blue' }}>
        <Spacer py={['1rem', { sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem' }]}>
          col-md-4
        </Spacer>
      </Col>
    </Row>
  </Container>
));

export default { title: 'Grid' };
export {
  example01,
  example02,
  example03,
  example04,
  example05,
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

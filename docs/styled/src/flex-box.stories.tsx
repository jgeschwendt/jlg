/* eslint-disable */
/* eslint eslint-comments/disable-enable-pair: off */
/* eslint eslint-comments/no-unlimited-disable: off */
import { Box, Flex, Text } from '@jlg/styled-components';
import React from 'react';
import styled, { css } from 'styled-components';
import { Theme, withTheme } from './theme';

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

const CBox: any = ({ children, ...props }: any) => (
  <BoxColor color={getRandomColor()} {...props}>
    <BoxBadge>{children}</BoxBadge>
  </BoxColor>
);

export default { title: 'Flex Box' };

export const BoxExample1 = () => (
  <Theme>
    <Box mb="1rem" style={{ outline: '1px solid blue' }}>
      <Flex m="0 .5rem" flexWrap="wrap">
        <Box all={1} md={1 / 2} p="0 .5rem">
          <CBox>1:1</CBox>
        </Box>
        <Box all={1} md={1 / 2} p="0 .5rem">
          <CBox>1:2</CBox>
        </Box>
        <Box all={1} p="0 .5rem">
          <CBox>2:1</CBox>
        </Box>
        <Box p="0 .5rem">
          <CBox>2:2</CBox>
        </Box>
      </Flex>
    </Box>
    <Box mb="1rem" style={{ outline: '1px solid blue' }}>
      <Flex m="0 -.5rem" flexWrap="wrap">
        <Box md={1 / 2} p="0 .5rem">
          <CBox>1:1</CBox>
        </Box>
        <Box md={1 / 2} p="0 .5rem">
          <CBox>1:2</CBox>
        </Box>
        <Box md={1 / 2} p="0 .5rem">
          <CBox>2:1</CBox>
        </Box>
        <Box p="0 .5rem">
          <CBox>2:2</CBox>
        </Box>
      </Flex>
    </Box>
    <Box mb="1rem" style={{ outline: '1px solid blue' }}>
      <Flex flexWrap="wrap">
        <Box md={{ w: 1 / 2 }}>
          <CBox>1:1</CBox>
        </Box>
        <Box md={{ w: 1 / 2 }}>
          <CBox>1:2</CBox>
        </Box>
        <Box md={{ w: 1 / 2 }}>
          <CBox>2:1</CBox>
        </Box>
        <Box>
          <CBox>2:2</CBox>
        </Box>
      </Flex>
    </Box>
    <Box mb="1rem">
      <Box sm={{ m: '1rem' }} md={{ m: '2rem' }} lg={{ m: '3rem' }}>
        <CBox>1:2</CBox>
      </Box>
    </Box>
  </Theme>
)

const Dot = styled.div`
  border-radius: 50%;
  background: ${getRandomColor()};
  width: 100%;
  padding-top: 100%;
  height: 0;
`;

export const DotsOnDots = withTheme(() => {
  return (
    <Box style={{ outline: '1px solid blue' }}>
      <Text>Performance Test of {8 * 8 * 4} flexbox items.</Text>
      <Flex flexWrap="wrap">
        <Box w={1 / 2}>
          {[...Array(8).keys()].map((row) => (
            <Flex key={row} flexDirection="row-reverse">
              {[...Array(8).keys()].map((col) => (
                <Box key={`${row}-${col}`} all={{ mb: `${((row+1)/2)}%`, mr: `${(row+1)}%`, w: (col+1) / 100 }} >
                  <Dot/>
                </Box>
              ))}
            </Flex>
          ))}
        </Box>
        <Box w={1 / 2}>
          {[...Array(8).keys()].map((row) => (
            <Flex key={row}>
              {[...Array(8).keys()].map((col) => (
                <Box key={`${row}-${col}`} all={{ mb: `${((row+1)/2)}%`, ml: `${(row+1)}%`, w: (col+1) / 100 }} >
                  <Dot/>
                </Box>
              ))}
            </Flex>
          ))}
        </Box>
        <Box w={1 / 2}>
          {[...Array(8).keys()].reverse().map((row) => (
            <Flex key={row} flexDirection="row-reverse">
              {[...Array(8).keys()].map((col) => (
                <Box key={`${row}-${col}`} all={{ mt: `${((row+1)/2)}%`, mr: `${(row+1)}%`, w: (col+1) / 100 }} >
                  <Dot/>
                </Box>
              ))}
            </Flex>
          ))}
        </Box>
        <Box w={1 / 2}>
          {[...Array(8).keys()].reverse().map((row) => (
            <Flex key={row}>
              {[...Array(8).keys()].map((col) => (
                <Box key={`${row}-${col}`} all={{ mt: `${((row+1)/2)}%`, ml: `${(row+1)}%`, w: (col+1) / 100 }} >
                  <Dot/>
                </Box>
              ))}
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

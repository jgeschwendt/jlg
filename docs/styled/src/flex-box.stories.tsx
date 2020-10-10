/* eslint-disable */
/* eslint eslint-comments/disable-enable-pair: off */
/* eslint eslint-comments/no-unlimited-disable: off */
import { Box, Flex } from '@jlg/styled-components';
import React from 'react';
import styled from 'styled-components';
import { Theme } from './theme';

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

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

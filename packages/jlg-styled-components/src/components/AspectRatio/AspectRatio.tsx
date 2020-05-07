import styled from 'styled-components';

function deriveRatio(ratio: string, viewport: number): number {
  const [x, y] = ratio.split(':');
  return ((parseInt(y, 10) / parseInt(x, 10)) * viewport);
}

interface AspectRatioProps {
  ratio: string;
  scale?: number;
}

export const AspectRatio = styled.div<AspectRatioProps>`
   padding-top: ${({ ratio, scale = 100 }): number => deriveRatio(ratio, scale)}%; /* 1:1 Aspect Ratio */
   position: relative;
   width: 100%;

   & > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
   }
`;

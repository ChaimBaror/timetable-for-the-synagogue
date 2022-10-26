import styled from 'styled-components';
import { Layout } from 'antd';
import { media } from '../../../styles/themes/constants';

export const LayoutMaster = styled(Layout)`
  height: 100vh;
  background-color: rgb(173, 227, 209);

`;

export const LayoutMain = styled(Layout)`
  @media only screen and ${media.md} {
    margin-left: 80px;
    background-color: rgba(242, 220, 172, 0.851);

  }

  @media only screen and ${media.xl} {
    margin-left: unset;
    background-color: rgba(242, 220, 172, 0.851);


  }
`;

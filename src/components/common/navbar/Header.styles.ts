import styled, { css } from 'styled-components';
import { Col, Collapse, Menu } from 'antd';
// import { BurgerIcon } from '@app/components/common/Burger/BurgerIcon';
// import { GitHubButton } from '@app/components/header/components/GithubButton/GitHubButton';
import { BORDER_RADIUS, LAYOUT, media } from '../../../styles/themes/constants';

export const DropdownMenu = styled(Menu)`
  position: flexd;
  line-height: 1.5715;
  z-index: 999;
  display: flex;
  border-radius: ${BORDER_RADIUS};

  &.ant-dropdown-menu {
    box-shadow: var(--box-shadow);
  }
`;

export const HeaderActionWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 600;
  width: auto;
  padding: 0 10px;
  & > .ant-btn > span[role='img'],
  .ant-badge {
    font-size: 1.25rem;
    @media only screen and ${media.md} {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export const DropdownCollapse = styled(Collapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: 600;
    font-size: 0.875rem;

    color: var(--primary-color);

    @media only screen and ${media.md} {
      font-size: 1rem;
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const BurgerCol = styled(Col)`
  z-index: 999;
  display: flex;
`;

// export const MobileBurger = styled(BurgerIcon)`
//   width: 1.75rem;
//   height: 1.75rem;
//   margin-right: -0.5rem;
//   color: var(--text-main-color);

//   ${(props) =>
//     props.isCross &&
//     css`
//       color: var(--text-secondary-color);
//     `};
// `;

export const SearchColumn = styled(Col)`
  padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
`;

interface ProfileColumn {
  $isTwoColumnsLayout: boolean;
}

export const ProfileColumn = styled(Col)<ProfileColumn>`
  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        background-color: var(--sider-background-color);
        padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
      `}
  }
`;

// export const GHButton = styled(GitHubButton)`
//   display: none;

//   @media only screen and ${media.lg} {
//     display: block;
//   }
// `;

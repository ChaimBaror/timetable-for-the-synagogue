import React from 'react';
import { HeaderFullscreen } from '../HeaderFullscreen/HeaderFullscreen';
import '../../../styles/NavbarHeader.scss'


interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {

  return (
    <div className='navbarHeader'>
      <HeaderFullscreen />
    </div>
  );
};

import React from 'react';
import { HeaderFullscreen } from '../../HeaderFullscreen/HeaderFullscreen';
import * as S from './Header.styles'
import { useSelector } from 'react-redux'
import { GetZmanHebcal } from '../../GetZmanHebcal';
import { GetDat } from '../../GetDay';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  const location = useSelector((state: any) => state.location)


  return (
    <S.DropdownMenu>
      <S.DropdownCollapse>
        <S.HeaderActionWrapper>
          <HeaderFullscreen />
        </S.HeaderActionWrapper>
      </S.DropdownCollapse>
      <S.HeaderActionWrapper>
        {location.name}
      </S.HeaderActionWrapper>
      <S.HeaderActionWrapper>
        <GetZmanHebcal name={'שקיעה'} zmanim={'shkiah'} key={"SunsetDesktopHeaderProps"} />
      </S.HeaderActionWrapper>
      <S.HeaderActionWrapper>
        <GetDat type={'dafyomi'} />
      </S.HeaderActionWrapper>
      <S.HeaderActionWrapper>
        <GetDat type={'getSedra'} />
        </S.HeaderActionWrapper>
      <S.HeaderActionWrapper> 
        <GetDat type={'getDay'} />
        </S.HeaderActionWrapper>
    </S.DropdownMenu>

  );
};

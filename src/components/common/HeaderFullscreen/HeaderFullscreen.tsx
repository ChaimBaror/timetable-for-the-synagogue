import React, { useEffect, useRef } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Button } from '../Button/Button';
import { RequireFullscreen } from '../RequireFullscreen/RequireFullscreen';
import { HeaderActionWrapper } from '../navbar/Header.styles';
import '../../styles/Fullscreen.scss'

export const HeaderFullscreen: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    rootRef.current = document.getElementById('Fullscreen');

  }, []);

  return (
    <RequireFullscreen component={rootRef} >
      {(isFullscreen) => (
        <HeaderActionWrapper>
          <Button
            type={isFullscreen ? 'ghost' : 'text'}
            icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          />
        </HeaderActionWrapper>
      )}
    </RequireFullscreen>
  );
};

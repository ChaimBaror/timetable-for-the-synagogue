import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
// import { useAppSelector } from '@app/hooks/reduxHooks';
// import { WithChildrenProps } from '@app/types/generalTypes';

export type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      children?: ReactNode;
    }
  : T & {
      children?: ReactNode;
    };

const RequireAuth: React.FC<WithChildrenProps>  = ({ children }) => {

  // return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
  return <>{children}</>;
};

export default RequireAuth;

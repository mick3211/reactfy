import { userContext } from 'data/contexts/UserContext';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const AnonymousRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { userState } = useContext(userContext);
    const location = useLocation();
    const isLogged = userState.user.id.length > 0;
    location;

    return !isLogged ? (
        <>{children}</>
    ) : (
        <Navigate
            to={(location.state as any)?.redirectTo?.pathname || '/home'}
            state={{ redirectTo: location }}
            replace
        />
    );
};

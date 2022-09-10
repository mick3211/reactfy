import { userContext } from 'data/contexts/UserContext';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { userState } = useContext(userContext);
    const location = useLocation();
    const isLogged = userState.user.id.length > 0;

    if (userState.isLogging) {
        return null;
    }

    return isLogged ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" state={{ redirectTo: location }} replace />
    );
};

import {
    userInitialState,
    useUserReducer,
    UseUserReducerReturnType,
} from 'data/reducers/UserReducer';
import React, { createContext } from 'react';

const initialValue: UseUserReducerReturnType = {
    userState: userInitialState,
    userDispatch: () => {},
};

export const userContext = createContext(initialValue);

interface UserContextProps {
    children: React.ReactNode;
}

export function UserProvider({ children }: UserContextProps) {
    const reducer = useUserReducer();

    return (
        <userContext.Provider value={reducer}>{children}</userContext.Provider>
    );
}

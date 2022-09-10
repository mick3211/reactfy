import { UserInterface } from 'data/types/userInterface';
import produce from 'immer';
import React, { useEffect, useReducer } from 'react';
import { LoginService } from 'data/services/LoginService';

export const userInitialState = {
    user: { id: '' } as UserInterface,
    isLogging: true,
};

export type UserStateType = typeof userInitialState;

type UserReducerActions = 'SET_USER' | 'SET_LOGGING';
type UserActionType = {
    type: UserReducerActions;
    payload: unknown;
};

export const UserReducer = (
    initialState: UserStateType,
    action: UserActionType
): UserStateType => {
    const nextState = produce(initialState, draft => {
        switch (action.type) {
            case 'SET_USER':
                draft.user = action.payload as UserInterface;
                draft.isLogging = false;
                break;
            case 'SET_LOGGING':
                draft.isLogging = action.payload as boolean;
                break;
        }
    });
    return nextState;
};

export type UseUserReducerReturnType = {
    userState: UserStateType;
    userDispatch: React.Dispatch<UserActionType>;
};

export function useUserReducer(): UseUserReducerReturnType {
    const [state, dispatch] = useReducer(UserReducer, userInitialState);

    async function getUser() {
        try {
            dispatch({ type: 'SET_LOGGING', payload: true });
            const user = await LoginService.getUser();
            if (user) {
                dispatch({ type: 'SET_USER', payload: user });
            }
        } finally {
            dispatch({ type: 'SET_LOGGING', payload: false });
        }
    }

    useEffect(() => {
        getUser();
    }, [state.user.id]);

    return {
        userState: state,
        userDispatch: dispatch,
    };
}

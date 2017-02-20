import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

export interface IGlobalState {
    userAgent: string;
}

interface RequestUserAgentAction {
    type: 'REQUEST_USER_AGENT';
}

interface SetUserAgent {
    type: 'SET_USER_AGENT';
    userAgent: string;
}

type GlobalAction = RequestUserAgentAction | SetUserAgent;

export const actionCreators = {
    requestUserAgent: (): AppThunkAction<RequestUserAgentAction> => (dispatch, getState) => {
        dispatch({ type: 'REQUEST_USER_AGENT' });
    },
    setUserAgent: (userAgent: string): AppThunkAction<SetUserAgent> => (dispatch, getState) => {
        dispatch({ type: 'SET_USER_AGENT', userAgent: userAgent });
    }
};

const unloadedState: IGlobalState = { userAgent: null }

export const reducer: Reducer<IGlobalState> = (state: IGlobalState, action: GlobalAction) => {
    switch (action.type) {
        case 'REQUEST_USER_AGENT':
            return {
                userAgent: state.userAgent
            };
        case 'SET_USER_AGENT':
            return {
                userAgent: action.userAgent
            };
    }

    return state || unloadedState;
}
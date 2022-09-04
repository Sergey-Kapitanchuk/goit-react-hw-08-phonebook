import { createSlice } from '@reduxjs/toolkit';
import { userFetch } from './userLoginAuth';

const initialState = {
    name: '',
    email: '',
    token: '',
    isLogin: false,
}

export const slice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addMatcher(
            userFetch.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                const { user, token } = payload;
                state.email = user.email;
                state.name = user.name;
                state.token = token;
                state.isLogin = true;
            }
        );
        builder.addMatcher(
            userFetch.endpoints.logOut.matchFulfilled,
            (state) => {
                state.email = '';
                state.name = '';
                state.token = '';
                state.isLogin = false;
            }
        );
        builder.addMatcher(
            userFetch.endpoints.singUp.matchFulfilled,
            (state, { payload }) => {
                const { user, token } = payload;
                state.email = user.email;
                state.name = user.name;
                state.token = token;
                state.isLogin = true;
            }
        );
    },
});

export const { userLogin, getCurrentUser } = slice.actions;
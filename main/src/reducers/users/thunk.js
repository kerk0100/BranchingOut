import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './users';

export const loginUserAsync = createAsyncThunk(
    actionTypes.LOGIN_USER,
    async ([userName, password]) => {
        return await UserService.loginUser(userName, password);
    }
);

export const checkUserAsync = createAsyncThunk(
    actionTypes.CHECK_USER,
    async ([userName, password]) => {
        return await UserService.checkUser(userName, password);
    }
);

export const checkUserNameFreeAsync = createAsyncThunk(
    actionTypes.CHECK_USERNAME_TAKEN,
    async (userName) => {
        return await UserService.checkUsernameTaken(userName);
    }
);

export const getFriendsAsync = createAsyncThunk(
    actionTypes.GET_FRIENDS,
    async () => {
        return await UserService.getFriends();
    }
);
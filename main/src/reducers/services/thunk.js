import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const loginUserAsync = createAsyncThunk(
    actionTypes.LOGIN_USER,
    async ([userName, password]) => {
        return await UserService.loginUser(userName, password);
    }
);

export const getFriendsAsync = createAsyncThunk(
    actionTypes.GET_FRIENDS,
    async () => {
        return await UserService.getFriends();
    }
);
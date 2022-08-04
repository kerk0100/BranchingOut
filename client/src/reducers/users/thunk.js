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
    async (username) => {
        return await UserService.getFriends(username);
    }
);

export const addFriendAsync = createAsyncThunk(
    actionTypes.ADD_FRIEND,
    async ([user, newFriend]) => {
        return await UserService.addFriend(user, newFriend);
    }
);
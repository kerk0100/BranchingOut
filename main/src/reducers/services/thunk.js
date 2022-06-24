import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const loginUserAsync = createAsyncThunk(
    actionTypes.LOGIN_USER,
    async ([userName, password]) => {
        return await UserService.loginUser(userName, password);
    }
);
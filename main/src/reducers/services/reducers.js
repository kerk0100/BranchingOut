import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {loginUserAsync} from "./thunk";

const INITIAL_STATE = {
    userlist: [],
    loginUser: REQUEST_STATE.IDLE,
    error: null
};

const servicesSlice = createSlice({
    name: 'services',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.loginUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.loginUser = REQUEST_STATE.FULFILLED;
                state.userlist.push(action.payload);
            })
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.loginUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default servicesSlice.reducer;
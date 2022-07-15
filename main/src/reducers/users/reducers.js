import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { loginUserAsync, getFriendsAsync } from "./thunk";

const INITIAL_STATE = {
    userlist: [],
    friendsList:[],
    currentUser: {},
    loginUser: REQUEST_STATE.IDLE,
    getFriends: REQUEST_STATE.IDLE,
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
                state.currentUser = action.payload;
                state.userlist.push(action.payload);
            })
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.loginUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(getFriendsAsync.pending, (state) => {
                state.getFriends = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getFriendsAsync.fulfilled, (state, action) => {
                state.getFriends = REQUEST_STATE.FULFILLED;
                state.friendsList = action.payload;
            })
            .addCase(getFriendsAsync.rejected, (state, action) => {
                state.getFriends = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default servicesSlice.reducer;
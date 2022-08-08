import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {loginUserAsync, getFriendsAsync, removeFriendAsync, checkUserAsync, checkUserNameFreeAsync, addFriendAsync} from "./thunk";

const INITIAL_STATE = {
    userlist: [],
    friendsList:[],
    currentUser: {},
    addFriend: REQUEST_STATE.IDLE,
    loginUser: REQUEST_STATE.IDLE,
    createUser: REQUEST_STATE.IDLE,
    checkUsernameTaken:  REQUEST_STATE.IDLE,
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
            .addCase(checkUserAsync.pending, (state) => {
                state.createUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(checkUserAsync.fulfilled, (state, action) => {
                state.createUser = REQUEST_STATE.FULFILLED;
                state.currentUser = action.payload;
            })
            .addCase(checkUserAsync.rejected, (state, action) => {
                state.createUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(checkUserNameFreeAsync.pending, (state) => {
                state.checkUsernameTaken = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(checkUserNameFreeAsync.fulfilled, (state, action) => {
                state.checkUsernameTaken = REQUEST_STATE.FULFILLED;
                state.currentUser = action.payload;
            })
            .addCase(checkUserNameFreeAsync.rejected, (state, action) => {
                state.checkUsernameTaken = REQUEST_STATE.REJECTED;
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
            })
            .addCase(addFriendAsync.pending, (state) => {
                state.addFriend = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addFriendAsync.fulfilled, (state, action) => {
                state.addFriend = REQUEST_STATE.FULFILLED;
            })
            .addCase(addFriendAsync.rejected, (state, action) => {
                state.addFriend = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(removeFriendAsync.pending, (state) => {
                state.removeFriend = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(removeFriendAsync.fulfilled, (state, action) => {
                state.removeFriend = REQUEST_STATE.FULFILLED;
            })
            .addCase(removeFriendAsync.rejected, (state, action) => {
                state.removeFriend = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default servicesSlice.reducer;
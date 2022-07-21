import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {createReviewAsync, getReviewsAsync, getCafeByNameAsync} from "./thunk";

const INITIAL_STATE = {
    list: [],
    createReview: REQUEST_STATE.IDLE,
    getReviews: REQUEST_STATE.IDLE,
    error: null
};

const servicesSlice = createSlice({
    name: 'mapReviews',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createReviewAsync.pending, (state) => {
                state.createReview = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(createReviewAsync.fulfilled, (state, action) => {
                state.createReview = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(createReviewAsync.rejected, (state, action) => {
                state.createReview = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(getReviewsAsync.pending, (state) => {
                state.getReviews = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getReviewsAsync.fulfilled, (state, action) => {
                state.getReviews = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(getReviewsAsync.rejected, (state, action) => {
                state.getReviews = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(getCafeByNameAsync.pending, (state) => {
                state.getReviews = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getCafeByNameAsync.fulfilled, (state, action) => {
                state.getReviews = REQUEST_STATE.FULFILLED;
                console.log(action.payload)
                state.list = action.payload;
                console.log(state.list)
            })
            .addCase(getCafeByNameAsync.rejected, (state, action) => {
                state.getReviews = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default servicesSlice.reducer;
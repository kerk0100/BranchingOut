import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { createReviewAsync, getReviewsAsync, getReviewsCountAsync } from "./thunk";

const INITIAL_STATE = {
    list: [],
    createReview: REQUEST_STATE.IDLE,
    getReviews: REQUEST_STATE.IDLE,
    getCount: REQUEST_STATE.IDLE,
    // count: String|| Number,
    error: null
};

const servicesSlice = createSlice({
    name: 'reviews',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createReviewAsync.pending, (state) => {
                state.createReview = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(createReviewAsync.fulfilled, (state, action) => {
                //console.log(action.payload)
                state.createReview = REQUEST_STATE.FULFILLED;
                state.reviewList.push(action.payload);
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
            .addCase(getReviewsCountAsync.pending, (state) => {
                state.getCount = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getReviewsCountAsync.fulfilled, (state, action) => {
                state.getCount = REQUEST_STATE.FULFILLED;
                // state.count = action.payload;
            })
            .addCase(getReviewsCountAsync.rejected, (state, action) => {
                state.getCount = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default servicesSlice.reducer;
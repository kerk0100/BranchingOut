import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {createReviewAsync} from "./thunk";

const INITIAL_STATE = {
    reviewList: [],
    createReview: REQUEST_STATE.IDLE,
    error: null
};

const servicesSlice = createSlice({
    name: 'reviewss',
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
                state.reviewList.push(action.payload);
            })
            .addCase(createReviewAsync.rejected, (state, action) => {
                state.createReview = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default servicesSlice.reducer;
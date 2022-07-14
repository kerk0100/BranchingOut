import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import reviewService from './review';

export const createReviewAsync = createAsyncThunk(
    actionTypes.ADD_REVIEW,
    async (review) => {
        return await reviewService.createReview();
    }
);

export const getReviewsAsync = createAsyncThunk(
    actionTypes.GET_REVIEWS,
    async () => {
        return await reviewService.getReviews();
    }
);
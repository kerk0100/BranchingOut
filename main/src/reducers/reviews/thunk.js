import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import reviewService from './review';

export const createReviewAsync = createAsyncThunk(
    actionTypes.ADD_REVIEW,
    async (review) => {
        return await reviewService.createReview(review);
    }
);

export const getReviewsAsync = createAsyncThunk(
    actionTypes.GET_REVIEWS,
    async (filter) => {
        return await reviewService.getReviews(filter);
    }
);

export const getReviewsCountAsync = createAsyncThunk(
    actionTypes.GET_REVIEWS_COUNT,
    async (username) => {
        return await reviewService.getReviewCount(username);
    }
);

export const deleteReviewAsync = createAsyncThunk(
    actionTypes.DEL_REVIEW,
    async (id) => {
        return await reviewService.deleteReview(id);
    }
);
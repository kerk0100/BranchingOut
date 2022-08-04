import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import reviewService from './review';

export const createReviewAsync = createAsyncThunk(
    actionTypes.CREATE_REVIEW,
    async (review) => {
        return await reviewService.createReview();
    }
);

export const getReviewsAsync = createAsyncThunk(
    actionTypes.GET_REVIEWS,
    async (filter) => {
        return await reviewService.getReviews(filter);
    }
);

export const getAddressReviewsAsync = createAsyncThunk(
    actionTypes.GET_ADDRESS_REVIEWS,
    async (address) => {
        return await reviewService.getAddressReviews(address);
    }
);

export const getCafeByNameAsync = createAsyncThunk(
    actionTypes.GET_FILTERED_REVIEWS,
    async (filter) => {
        return await reviewService.getFilteredCafes(filter);
    }
);
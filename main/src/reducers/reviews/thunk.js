import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import reviewService from './review';

export const createReviewAsync = createAsyncThunk(
    actionTypes.CREATE_REVIEW,
    async (review) => {
        return await reviewService.createReview();
    }
);
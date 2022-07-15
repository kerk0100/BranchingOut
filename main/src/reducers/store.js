import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './services/reducers';
import reviewReducer from './reviews/reducers';
import mapReviewReducer from './mapReviews/reducers';

export const store = configureStore({
    reducer: {
        services: serviceReducer, 
        reviews: reviewReducer,
        mapReviews: mapReviewReducer
    },
    devTools: true
});
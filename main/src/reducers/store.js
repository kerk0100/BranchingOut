import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './services/reducers';
import reviewReducer from './reviews/reducers'

export const store = configureStore({
    reducer: {
        services: serviceReducer, 
        reviews: reviewReducer
    },
    devTools: true
});
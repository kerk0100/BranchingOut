import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './services/reducers'

export const store = configureStore({
    reducer: {
        services: serviceReducer
    },
    devTools: true
});
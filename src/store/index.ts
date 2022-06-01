import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contentTypeApi } from './services/contentType';

export const store = configureStore({
  reducer: {
    [contentTypeApi.reducerPath]: contentTypeApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentTypeApi.middleware)
});

setupListeners(store.dispatch);

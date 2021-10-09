import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import {rootReducer} from "./reducers";

const middleware = getDefaultMiddleware()

export const store = configureStore({reducer:rootReducer,middleware})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
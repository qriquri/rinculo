import { PreloadedState, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/SearchSlice";

const reducer = {
  search: searchReducer,
}

export const store = configureStore({
  reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// テストでは個別にストアを作りたいので
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }) as any,
  });
};

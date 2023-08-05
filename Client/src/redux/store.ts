import serverRequestMiddleware from './middleWare';
import {AsideSlice, BuilderSlice} from './slices/';
import {configureStore} from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    builder: BuilderSlice.reducer,
    aside: AsideSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverRequestMiddleware),
});

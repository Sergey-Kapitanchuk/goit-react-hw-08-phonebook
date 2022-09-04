import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { userFetch } from './userLoginAuth';
import { setupListeners } from '@reduxjs/toolkit/query';
import { slice } from './slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, slice.reducer)

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [userFetch.reducerPath]: userFetch.reducer,
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    userFetch.middleware,
  ],
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);


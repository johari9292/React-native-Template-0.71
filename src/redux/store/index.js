import {
  combineReducers,
  configureStore,
  //   getDefaultMiddleware,
} from '@reduxjs/toolkit';
import authSlice from '../slices/auth';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authSlice'],
};
const rootReducer = combineReducers({
  authSlice: authSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});


export const persister = persistStore(store);

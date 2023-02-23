import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSocietyReducer from './authSociety/reducer';
import consultationsReducer from './consultations/reducer';
import isPreloadReducer from './isPreload/reducer';
import spotDetailReducer from './spotDetail/reducer';
import spotsReducer from './spots/reducer';
import vaccinationsReducer from './vaccinations/reducer';


const store = configureStore({
    reducer: {
        authSociety: authSocietyReducer,
        isPreload: isPreloadReducer,
        consultations: consultationsReducer,
        vaccinations: vaccinationsReducer,
        spots: spotsReducer,
        spotDetail: spotDetailReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export default store;
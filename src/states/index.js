import { configureStore } from '@reduxjs/toolkit';
import authSocietyReducer from './authSociety/reducer';
import consultationsReducer from './consultations/reducer';
import isPreloadReducer from './isPreload/reducer';
import vaccinationsReducer from './vaccinations/reducer';


const store = configureStore({
    reducer: {
        authSociety: authSocietyReducer,
        isPreload: isPreloadReducer,
        consultations: consultationsReducer,
        vaccinations: vaccinationsReducer,
    },
});

export default store;
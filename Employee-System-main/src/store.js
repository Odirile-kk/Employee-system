import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './components/employeeSlice';
 import userReducer from './components/userSlice';

const store = configureStore({
    reducer: {
      employee: employeeReducer,
       user: userReducer,
    },
  });
  
  export default store;
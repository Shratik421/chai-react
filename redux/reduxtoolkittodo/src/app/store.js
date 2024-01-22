// 1 = config store
//2 create reducers
//3 
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer:todoReducer
});


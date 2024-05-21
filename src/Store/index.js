import { configureStore } from '@reduxjs/toolkit';
import { SliceReducer } from './SliceBag';

const store=configureStore({
 reducer:{
    bags:SliceReducer
 }
})

export default store
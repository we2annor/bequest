import {combineReducers} from 'redux';
import { addressReducer } from './addressReducer';

export const rootReducer = combineReducers({
    addressBook: addressReducer
})

export type RootState = ReturnType< typeof rootReducer>
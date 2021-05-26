import {createStore} from 'redux';

import rootReducers from './reducers';

const initialState={};

export const store=createStore(
    rootReducers,
    initialState
)
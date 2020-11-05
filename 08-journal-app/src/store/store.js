import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//Aqui agregamos los reducers que queramos
const reducers=combineReducers({
    auth:authReducer,
    ui:uiReducer,
    notes:notesReducer
})

//Solo recibe un reducer
export const store=createStore(
    reducers,
    //Configuracion para manejar peticionas asincronas
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
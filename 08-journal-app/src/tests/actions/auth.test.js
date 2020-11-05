import { createStore } from 'redux';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk' 

import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState={};

let store=mockStore(initState);

describe('Pruebas en las acciones de auth', () => {

    beforeEach(()=>{
        store=mockStore(initState);
    })

    test('Login y logout deben de crear la accion respectiva', () => {
        const uid='ABC123';
        const displayName='Estefania';
        
        const loginAction=login(uid, displayName);
        const logoutAction=logout();

        expect(loginAction).toEqual({
            type:types.login,
            payload:{
                uid,
                displayName
            }
        });

        expect(logoutAction).toEqual({
            type:types.logout
        })

    });

    test('Debe de realizar el startLogout', async() => {
        await store.dispatch(startLogout())        

        const actions=store.getActions();
        
        expect(actions[0]).toEqual({
            type:types.notesLogoutCleaning
        });

        expect(actions[1]).toEqual({
            type:types.logout
        });
    });

    test('Debe de iniciar el startLoginEmailPAssword', async() => {
        await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'));

        const actions=store.getActions();
        
        expect(actions[1]).toEqual({
            type:types.login,
            payload:{
                uid:expect.any(String),
                displayName:null
            }
        })
    });
    
    
    
})

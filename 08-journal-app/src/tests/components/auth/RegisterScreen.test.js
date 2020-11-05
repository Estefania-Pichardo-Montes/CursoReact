import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import {MemoryRouter} from 'react-router-dom'
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';

import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';
// import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

// jest.mock('../../../actions/auth', ()=>({
//     startGoogleLogin:jest.fn(),
//     startLoginEmailPassword:jest.fn()
// }));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState={
    auth:{},
    ui:{
        loading:false,
        msgError:null
    }
};

let store=mockStore(initState);
// store.dispatch=jest.fn();

const wrapper=mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen/>
        </MemoryRouter>
        
    </Provider>
);

describe('Pruebas en registerScreen', () => {
    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de hacer el dispatch de la accion respectiva', () => {
        const emailField=wrapper.find('input[name="email"]');
        emailField.simulate('change',{
            target:{
                value:'',
                name:'email'
            }
        });
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:types.uiSetError,
            payload:'El email no es valido'
        })  
    });

    test('Debe de mostrar el mensaje de error', () => {

        const initState={
            auth:{},
            ui:{
                loading:false,
                msgError:'Email no es correcto'
            }
        };
        
        const store=mockStore(initState);
        
        const wrapper=mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen/>
                </MemoryRouter>
                
            </Provider>
        );

        expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
        expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);

    })
    
    
    
})

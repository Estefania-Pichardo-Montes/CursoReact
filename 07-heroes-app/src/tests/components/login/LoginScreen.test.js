import React from 'react';
import {mount} from 'enzyme'
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../Components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en Login screen', () => {
    
    const history={
        replace:jest.fn()
    }
  
    const contextValue={
        dispatch:jest.fn(),
        user:{
            logged:false
        }
    }
    const wrapper=mount(

        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history}/>
        </AuthContext.Provider>
    )

    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la navegacion', () => {

        const handleClick=wrapper.find('button').prop('onClick');
        handleClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:types.login,
            payload:{
                name:'Estefania'
            }
        });
        expect(history.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');
    })
    
    
})

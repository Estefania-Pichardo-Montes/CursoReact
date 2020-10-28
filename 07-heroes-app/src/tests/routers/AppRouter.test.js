import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en appRouter', () => {
  
    const contextValue={
        dispatch:jest.fn(),
        user:{
            logged:false
        }
    }

    test('Debe de mostrar el login si no esta autenticado', () => {
        
        const wrapper=mount(
        
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
           </AuthContext.Provider>

        );

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el componente marvel si esta autenticadp', () => {
       
        const contextValue={
            dispatch:jest.fn(),
            user:{
                logged:true,
                name:'Estefania'
            }
        }
       
        const wrapper=mount(
        
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
           </AuthContext.Provider>

        );

        //  console.log(wrapper.html());

         expect(wrapper.find('.navbar').exists()).toBe(true);
    });
    
        
});

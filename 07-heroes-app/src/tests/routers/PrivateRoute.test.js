import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en privateRoute', () => {
  
    const props={
        location:{
            pathname:'/marvel'
        }
    }
    Storage.prototype.setItem=jest.fn();

    test('Debe de mostrar el componente si esta autenticado', () => {
       
        const wrapped = mount(

            //Esto hace que yo pueda falsear la informacion para probarlo
            //Cuando hay un high order component, no podemos usar el sahllow
            //Usar mount
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={()=><span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>

        );
        expect(wrapped.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
        
    });

    test('Debe de bloquear el componente si no esta autenticado', () => {
        
        const wrapped = mount(

            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={()=><span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>

        );
        expect(wrapped.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });
    
    
})

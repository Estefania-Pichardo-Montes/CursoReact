import React from 'react';
import {mount, shallow} from 'enzyme';
import {AppRouter} from '../../../Components/09-useContext/AppRouter';
import { UserContext } from '../../../Components/09-useContext/UserContext';

describe('Pruebas en appRouter', () => {
    const user={
        id:1,
        name:'Estefania'
    }
    const wrapper=mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter/>
        </UserContext.Provider>
    );
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();  
    })
    
})

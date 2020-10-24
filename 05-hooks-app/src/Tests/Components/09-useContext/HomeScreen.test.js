import React from 'react';
import {mount, shallow} from 'enzyme';
import {HomeScreen} from '../../../Components/09-useContext/HomeScreen';
import { UserContext } from '../../../Components/09-useContext/UserContext';


describe('Pruebas en homescreen', () => {

    const user={
        name:'Estefania',
        email:'fanny@gmail.com'
    }
    const wrapper=mount(

        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen/>
        </UserContext.Provider>

    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})

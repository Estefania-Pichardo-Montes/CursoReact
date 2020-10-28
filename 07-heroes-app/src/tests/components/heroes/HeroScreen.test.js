import React from 'react';
import {mount, shallow} from 'enzyme'
import { HeroeScreen } from '../../../Components/heroes/HeroeScreen';
import { MemoryRouter, Route } from 'react-router-dom';


describe('Pruebas en HeroScreen', () => {
    
    const history={
        length:10,
        push:jest.fn(),
        goBack:jest.fn()
    }

  
    test('debe de mostrar el componente redirect si no hay argumentos en el url', () => {
       
        const wrapper=mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroeScreen history={history}/>
            </MemoryRouter>
        );
    
        expect(wrapper.find('Redirect').exists()).toBe(true); 
    });

    test('Debe de mostrar un hero si el parametro existe', () => {
        
        const wrapper=mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={HeroeScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);

    });

    test('Debe de regresar a la pantalla anterior con push', () => {
       
        const history={
            length:1,
            push:jest.fn(),
            goBack:jest.fn()
        }

        const wrapper=mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                     path="/hero/:heroeId" 
                     component={(props)=><HeroeScreen history={history}/>} 
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalledWith();

    });

    test('Debe de regresar a la pantalla anterior GoBack', () => {

        const wrapper=mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                     path="/hero/:heroeId" 
                     component={(props)=><HeroeScreen history={history}/>} 
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledTimes(0);
        expect(history.goBack).toHaveBeenCalledWith();

    });

    test('Debe de llamar al redirect si el hero no existe', () => {

        const wrapper=mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123123']}>
                <Route
                     path="/hero/:heroeId" 
                     component={(props)=><HeroeScreen history={history}/>} 
                />
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');

    });
    
    
    
    
})

import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp';
import Adapter from 'enzyme-adapter-react-16';
import startupTest from '../setupTest';

describe('Pruebas en el counterApp', () => {

    let wrapper= shallow(<CounterApp/>);

    //BeforeEach es para inicializar el contador antes de cada
    //prueba
    beforeEach(()=>{

       wrapper=shallow(<CounterApp/>);
    });

    test('debe de mostrar <counterApp></counterApp> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100', () => {
        
        const wrapper=shallow(<CounterApp value={100}/>);
        const counterTest = wrapper.find('h2').text().trim();
        expect(counterTest).toBe('100');
    });

    //En esta prueba cambiamos el valor del contador ahora el valor es 6
    test('debe de incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterTest=wrapper.find('h2').text().trim();

        expect(counterTest).toBe('6');
        
    });
    
    test('debe de decrementar con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterTest=wrapper.find('h2').text().trim();

        expect(counterTest).toBe('4');
        
    });

    test('debe de colocar el valor por defecto con el boton btn reset', () => {

        const wrapper=shallow(<CounterApp value={105}/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText=wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');

                

    })
    
    
})

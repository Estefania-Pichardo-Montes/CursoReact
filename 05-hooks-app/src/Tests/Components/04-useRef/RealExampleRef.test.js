import React from 'react';
import {shallow} from 'enzyme';
import {RealExampleRef} from '../../../Components/04-useRef/RealExampleRef';

describe('Pruebas en Real example ref', () => {
  
    const wrapper=shallow(<RealExampleRef/>);

    test('Debe mostrarse Correctamente ', () => {


        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

    test('Debe mostrarse el componente multipleCustomHooks ', () => {
       
        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    });
    
})

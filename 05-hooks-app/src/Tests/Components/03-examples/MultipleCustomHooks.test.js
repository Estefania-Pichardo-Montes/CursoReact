import React from 'react';
import {shallow} from 'enzyme';
import {MultipleCustomHooks} from '../../../Components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../Hooks/useFetch';
import { useCounter } from '../../../Hooks/useCounter';
jest.mock('../../../Hooks/useFetch');
jest.mock('../../../Hooks/useCounter');


describe('Pruebas en multiple custom hooks', () => {

    useCounter.mockReturnValue({
        counter:10,
        increment:()=>{}
    });
    
    test('Debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        });

        const wrapper=shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();        
    });

    test('Debe de mostrar la informacion', () => {
        
        useFetch.mockReturnValue({
            data:[{
                author:'Estefania',
                quote:'Hola Mundo'
            }],
            loading:false,
            error:null
        });
        const wrapper=shallow(<MultipleCustomHooks/>);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Estefania');


    })
    
    
})

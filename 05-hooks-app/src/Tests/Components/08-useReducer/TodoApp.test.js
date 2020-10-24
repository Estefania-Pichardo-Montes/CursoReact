import React from 'react';
import {mount, shallow} from 'enzyme';
import {TodoApp} from '../../../Components/08-useReducer/TodoApp';
import {demoTodos} from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en TodoApp', () => {
    const wrapper=shallow(<TodoApp/>);

    Storage.prototype .setItem=jest.fn(()=>{});

    test('Debe mostrarse Correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de agregar un ToDo', () => {
       
        const wrapper=mount(<TodoApp/>);

        act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);

        });

        expect(wrapper.find('h1').text().trim()).toBe('ToDo App (2)')
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe eliminar un To do', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('ToDo App (0)');

    })
    
    
})

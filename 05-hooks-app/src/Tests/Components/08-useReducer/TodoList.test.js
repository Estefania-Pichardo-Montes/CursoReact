import React from 'react';
import {shallow} from 'enzyme';
import {TodoList} from '../../../Components/08-useReducer/TodoList';
import {demoTodos} from '../../fixtures/demoTodos';

const handleDelete=jest.fn();
const handleToggle=jest.fn();

const wrapper=shallow(
    <TodoList
        todos={demoTodos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
     />
)

describe('Debe de mostrarse correctamente', () => {

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener 2 list items', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));

    });
    
    
})

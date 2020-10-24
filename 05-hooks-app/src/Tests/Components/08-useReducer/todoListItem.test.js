import React from 'react';
import {shallow} from 'enzyme';
import {TodoListItem} from '../../../Components/08-useReducer/TodoListItem';
import {demoTodos} from '../../fixtures/demoTodos';


describe('Pruebas en To do List Item', () => {

    const handleDelete=jest.fn();
    const handleToggle=jest.fn();
    

    const wrapper=shallow(
        <TodoListItem 
            todo={demoTodos[0] }
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test('Debe mostrarse Correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar la funcion borrar', () => {
        wrapper.find('button').simulate('click');

        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('Debe de llamar la funcion toggle', () => {
        wrapper.find('p').simulate('click');

        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('Debe de mostrar el texto correctamente', () => {
       const p = wrapper.find('p');
       expect(p.text().trim()).toBe(`1.  ${ demoTodos[0].desc }`) 
    });  

    test('Debe de tener la clase complete si esta completada la tarea', () => {
        const todo=demoTodos[0];
        todo.done=true
        const wrapper=shallow(
            <TodoListItem 
                todo={todo }

            />
        );
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
     });  
})

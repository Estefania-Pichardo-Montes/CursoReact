import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState={};

let store=mockStore(initState);
store.dispatch=jest.fn();
const nota={
    id:10,
    date:0,
    title:'Hola',
    body:'Mundo',
    url:'https://algunlugar.com/foto.jpg'
}
const wrapper=mount(
    <Provider store={store}>
        <JournalEntry {...nota} />
    </Provider>
)

describe('Pruebas en el hournalEntry', () => {

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de activar la nota', () => {
        wrapper.find('.journal__entry').prop('onClick')();

        expect(store.dispatch).toHaveBeenCalledWith(
            activeNote(nota.id, {...nota})
        );
    })
    
    
    
})

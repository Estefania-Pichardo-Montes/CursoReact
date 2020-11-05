import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';
import { Sidebar } from '../../../components/journal/Sidebar';

jest.mock('../../../actions/auth', ()=>({
    startLogout:jest.fn(),
}));

jest.mock('../../../actions/notes', ()=>({
    startNewNote:jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState={
    auth:{
        uid:'1',
        name:'Estefania'
    },
    ui:{
        loading:false,
        msgError:null
    },
    notes:{
        active:null,
        notes:[]
    }
};

let store=mockStore(initState);
store.dispatch=jest.fn();

const wrapper=mount(
    <Provider store={store}>
        <Sidebar/>
    </Provider>
)

describe('Pruebas en sidebar', () => {
    test('Debe de mostrarse correctamente', () => {
        //Hacer e snapshot
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar el startLogout', () => {
        wrapper.find('button').prop('onClick')();

        expect(startLogout).toHaveBeenCalled();
    });

    test('Debe de llamar es startNewNote', () => {
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect(startNewNote).toHaveBeenCalled();
    })
    
    
    
})

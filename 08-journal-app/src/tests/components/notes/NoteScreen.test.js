import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';



jest.mock('../../../actions/notes', ()=>({
    activeNote:jest.fn(),
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
        active:{
            id:1234,
            title:'Hola',
            body:'Mundo',
            date:0
        },
        notes:[]
    }
};

let store=mockStore(initState);
store.dispatch=jest.fn();

const wrapper=mount(
    <Provider store={store}>
        <NoteScreen/>
    </Provider>
)

describe('Pruebas en noteScreen', () => {
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de disparar el activeNote', () => {
        wrapper.find('input[name="title"]').simulate('change',{
            target:{
                name:'title',
                value:'Hola de nuevo'
            }
        });

        expect(activeNote).toHaveBeenCalledWith(
            1234,
            {
                body:'Mundo',
                title:'Hola de nuevo',
                id:1234,
                date:0
            });
    })
    
    
})

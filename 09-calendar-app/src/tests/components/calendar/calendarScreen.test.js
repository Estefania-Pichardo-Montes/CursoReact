import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { CalendarScreen } from '../../../components/calendar/CalendarScreen';
import { messages } from '../../../helpers/calendar-messages-es';
import { types } from '../../../types/types';
import { eventSetActive, eventStartLoading } from '../../../actions/events';
import { act } from '@testing-library/react';

const middlewares=[thunk];
const mockStore=configureStore(middlewares);

const initState={
    ui:{
        openModal:false
    },
    calendar:{
        events:[]
    },
    auth:{
        uid:'123',
        name:'Estefania'
    }
};
const store=mockStore(initState);

store.dispatch=jest.fn();
Storage.prototype.setItem=jest.fn()

jest.mock('../../../actions/events', ()=>({
    eventSetActive:jest.fn(),
    eventStartLoading:jest.fn()
}));

const wrapper= mount(
    <Provider store={store}>
        <CalendarScreen/>
    </Provider> 
)

describe('Pruebas en el componente calendarScreen', () => {

    test('Debe de mostrarse correctameten', () => {

        expect(wrapper).toMatchSnapshot();    
    });

    test('Pruebas con las interacciones del calendario', () => {
        
        const calendar=wrapper.find('Calendar');
        const calendarMessages=calendar.prop('messages');

        expect(calendarMessages).toEqual(messages);

        //Simulamos el double click y debe de abrir el uiOpenModal
        calendar.prop('onDoubleClickEvent')();

        expect(store.dispatch).toHaveBeenCalledWith({type:types.uiOpenModal});

        calendar.prop('onSelectEvent')({start:'Hola'});

        expect( eventSetActive ).toHaveBeenCalledWith({start:'Hola'})

        act(()=>{
            calendar.prop('onView')('week');
            expect(localStorage.setItem).toHaveBeenCalledWith('lastView', 'week');
        })
        
    });
    

})

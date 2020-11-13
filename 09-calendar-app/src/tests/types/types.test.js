import {types} from '../../types/types'

describe('Pruebas en Types', () => {
    test('los types deben de ser iguales ', () => {
        expect(types).toEqual({

            uiOpenModal: '[ui] Open modal',
            uiCloseModal: '[ui] Close modal',
        
        
            eventSetActive: '[event] Set Active',
            eventLogout:'[event] Logout event',
        
            eventStartAddNew:'[events] start Add New',
            eventAddNew: '[event] Add new',
            eventClearActiveEvent: '[event] Clear active event',
            eventUpdated: '[event] Event updated',
            eventDeleted: '[event] Event deleted',
            eventLoaded:'[event] Events Loaded',
        
            authCheckingFinish: '[auth] Finish checking Login State',
            authStartLogin:'[auth] Start Login',
            authLogin:'[auth] Login',
            authStartRegister:'[auth] Start Register',
            authStartTokenRenew:'[auth] Start Token Renew',
            authLogout:'[auth] Logout'
        
        
        
        })
    })
    
})

const { types } = require("../../types/types")

describe('Pruebas con nuestros tipos', () => {
    test('Debe de tener estos tipos', () => {
        
        expect(types).toEqual({
            login: '[Auth] Login',
            logout:'[Auth] Logout', 
        
            uiSetError:'[UI] SetError',
            uiRemoveError: '[UI] RemoveError',
        
            uiStartLoading:'[UI] Start loading',
            uiFinishLoading:'[UI] Finish loading',
        
            notesAddNew:'[Notes] New note',
            notesActive:'[Notes] Set active note',
            notesLoad:'[Notes] Load note',
            notesUpdated:'[Notes] Update note ',
            notesFileURL:'[Notes] Load image URL',
            notesDelete:'[Notes] Delete Note',
            notesLogoutCleaning:'[Notes] Logout Cleaning',
        })
    })
    
})

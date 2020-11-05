import {authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en auth reducer', () => {
    
    test('Debe de realizar el login', () => {
       const initState={};

       const action={
           type:types.login,
           payload:{
               uid:'abc',
               displayName:'Estefania'
           }
       };

       const state=authReducer(initState, action);

       expect(state).toEqual({
           uid:'abc',
           name:'Estefania'
       });
    });

    test('Debe de realizar el logout', () => {
        const initState={
            uid:'abc',
                displayName:'Estefania'
        };
 
        const action={
            type:types.logout
        };
 
        const state=authReducer(initState, action);
 
        expect(state).toEqual({});
     });

     test('Ni debe de hacer cambios en el state', () => {
        const initState={
            uid:'abc',
            displayName:'Estefania'
        };
 
        const action={
            type:'asdasdasd'
        };
 
        const state=authReducer(initState, action);
 
        expect(state).toEqual(initState);
     })
    
})

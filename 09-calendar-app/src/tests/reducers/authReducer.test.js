import { authReducer} from '../../reducers/authReducer';
import { types } from '../../types/types';

const initialState={
    cheking:true,
    //uid:null,
    //name:null
}

describe('Pruebas en el auth reducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const action={};
        const state=authReducer(initialState, action);
        expect(state).toEqual(initialState);
    });

    test('Debe de autenticar el usuario', () => {
        const action={
            type:types.authLogin,
            payload:{
                uid:'123',
                name:'Estefania'
            }
        };

        const state=authReducer(initialState,action);
        expect(state).toEqual({ cheking: false, uid: '123', name: 'Estefania' });
    })
    
    
})

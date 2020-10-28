const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");

describe('Pruebas en authReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {
        
        const state=authReducer({logged:false},{});
        expect(state).toEqual({logged:false});
    });

    test('Debe de autenticar y mostrar el nombre del usuario', () => {
       
        const action={
            type:types.login,
            payload:{
                name:'Estefania'
            }
        }
       
        const state=authReducer({logged:false},action);
        expect(state).toEqual(
            {logged:true,
                name:'Estefania'
        });
    });
    test('Debe de borrar el nombre del usuario y el logged en false', () => {
        
        const action={
            type:types.logout

        }
       
        const state=authReducer({logged:false, name:'pedro'},action);
        expect(state).toEqual({logged:false});
    })
    
    
    
})

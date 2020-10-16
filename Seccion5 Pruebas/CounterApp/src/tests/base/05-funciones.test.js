import '@testing-library/jest-dom';
import {getUser} from '../../base/05-funciones';
import {getUsuarioActivo} from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('debe retornar un objeto', () => {
        const userTest={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user=getUser();
        //Para evaluar objetos se debe usar el toequal porque si usamos el toBe fallara 
        //Debido a que no apuntan al mismo espacio en memoria
        //To equal evalua que el objeto tenga las mismas propiedades y que el valor asignado a cada una de ellas sea el mismo

        expect(user).toEqual(userTest);
    })

    //getUsuarioActivo debe retornar un objeto

    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre='Estefania';

        const user=getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid:'ABC567',
            username:nombre
        });
    })
    
})

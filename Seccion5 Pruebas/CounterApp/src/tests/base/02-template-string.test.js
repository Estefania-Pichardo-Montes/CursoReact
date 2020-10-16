import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe ('Pruebas en 02-template-string.js',()=>{
    test('getSaludo debe retornar hola Estefania!', () => {
        const nombre='Estefania';

        const saludo=getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre +'!');
    })
    test('getSaludo debe retornar Hola Oliver! si no hay un argumento por defecto', () => {

        const saludo=getSaludo();

        expect(saludo).toBe('Hola Oliver!');
    })
    
})

//getSaludo debe retornar Hola Oliver! si no hay un argumento por defecto


import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('Debe retornar un heroe Async', (done) => {
       const id=1;
       
       getHeroeByIdAsync(id)
       .then(heroe=>{
           //Despues de hacer los expect llamar al done
           expect(heroe).toBe(heroes[0]);
           done();
       })
    });

    test('Debe de retornar un error en caso de que el heroe no exista', (done) => {
        const id=10;
        
        getHeroeByIdAsync(id)
        .catch(error=>{
            //Despues de hacer los expect llamar al done
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
     });
    
})

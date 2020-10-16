import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {
    test('Debe retornar un heroe por Id', () => {
        
        const id=1;
        const heroe=getHeroeById(id);

        const heroeData=heroes.find(h=>h.id===id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar undefined si el heroe no existe', () => {
        
        const id=10;
        const heroe=getHeroeById(id);

        expect(heroe).toBe(undefined);
    })
    test('Debe retornar un arreglo con los heroes de DC ', () => {
        const owner='DC';
        const heroes=getHeroesByOwner('DC');

        const heroesData=heroes.filter(h=>h.owner==='DC');

        expect(heroes).toEqual(heroesData);
    })

    test('Debe retornar un arreglo con los heroes de Marvel y un length de 2 ', () => {
        const owner='Marvel';
        const heroes=getHeroesByOwner('Marvel');

        expect(heroes.length).toBe(2);
    })
    
    
})

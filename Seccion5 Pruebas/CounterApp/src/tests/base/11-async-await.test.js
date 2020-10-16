import {getImagen} from '../../base/11-async-await';

describe('Purebas con async-await y fetch ', () => {
    test('Debe de retornarl el URL de la imagen', async () => {
        const url= await getImagen();
        // console.log(url);
        expect(url.includes('https://')).toBe(true);
    })
    
})

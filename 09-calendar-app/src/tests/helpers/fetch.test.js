import {fetchConToken, fetchSinToken} from '../../helpers/fetch'

describe('Pruebas en el fetch', () => {

    let token='';

    test('Pruebas en el fetch sin token', async() => {
        
        const resp = await fetchSinToken('auth',{email:'fanny@gmail.com', password:'123456'}, 'POST');

        expect(resp instanceof Response).toBe(true);

        const body= await resp.json();
        expect(body.ok).toBe(true);

        token=body.token;
    });

    test('fetch con token', async() => {

        localStorage.setItem('token', token);

        const resp= await fetchConToken('events/5fa95d91b6579c63d406d14c', {}, 'DELETE');

        const body= await resp.json();

        expect(body.msg).toBe('Evento no existe con ese id')
    })
    
    
    
})

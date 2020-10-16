import React from 'react';
import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
import setupTest from '../setupTest';
import '@testing-library/jest-dom'; 

describe('Pruebas en <PrimeraApp/>', () => {


    // test('debe Mostrar el mensaje "Hola soy Octavia"', () => {
    //     const saludo='Hola, soy Octavia';
    //     const {getByText}=render(<PrimeraApp saludo={saludo}/>)
    //     expect( getByText(saludo) ).toBeInTheDocument;
    // })
    
    test('debe de mostrar <primeraApp/> correctamente ', () => {
        //Shallow es muy parecido al render pero con mas opciones
        //Podemos simular clicks y tabajar con el documento

        const saludo='Hola, soy Octavia'
        const wrapper=shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo mandado por props ', () => {
        
        const saludo='Hola, soy Octavia'
        const subTitulo='Soy un subtitulo'
        const wrapper=shallow(

            <PrimeraApp
             saludo={saludo}
             subtitulo={subTitulo}
             />
        );

        const textoParrafo=wrapper.find('p').text();
        console.log(textoParrafo);
        expect(textoParrafo).toBe(subTitulo);
    })
    
    
})

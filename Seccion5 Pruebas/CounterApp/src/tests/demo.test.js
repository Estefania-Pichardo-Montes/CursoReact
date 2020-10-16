//Se recomienda ponerle al archivo el .test
//Para realizar una prueba ir a consola entrar a la carpeta del proyecto y escribir npm run test
//El test suite va a leer los archivos .test para realizar las pruebas

describe('Pruebas en el archivo demo.test.js',()=>{

    test('debe de ser iguales los string ', () => {
        //1.-Inicializacion
        const mensaje='Hola Mundo';
    
        //2.-Estimulo
        const mensaje2=`Hola Mundo`;
    
        //3.- Observar el comportamiento 
        //Expect() ToBe Hacen una comparacion de lo esperado contra lo que se recibe
        expect(mensaje).toBe(mensaje2);//===
    })
});



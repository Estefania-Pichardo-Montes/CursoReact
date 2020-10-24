import { renderHook, act } from '@testing-library/react-hooks';
import {useForm} from '../../Hooks//useForm';


describe('Pruebas en use form', () => {
    
    const initalForm={
        name:'Estefania',
        email:'fanny@gmail.com'
    };


    test('debe de regresar un formulario por defecto ', () => {
        const {result}= renderHook(()=> useForm(initalForm));
        const [formValues, handleInputChange, reset]=result.current;

        expect(formValues).toEqual(initalForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('Debe de cambiar el valor del formulario', () => {
        const {result}= renderHook(()=> useForm(initalForm));
        const [ , handleInputChange]=result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'Clarke'
                }
            });
        });

        const [formValues]=result.current;

        expect(formValues).toEqual({...initalForm, name:'Clarke'});

    });

    test('Debe de reestablecer el formulario con RESET', () => {

        const {result}= renderHook(()=> useForm(initalForm));
        const [ , handleInputChange, reset]=result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'Clarke'
                }
            });

            reset();
        });

        const [formValues]=result.current;

        expect(formValues).toEqual(initalForm);
    });    
    
})

import { renderHook, act } from '@testing-library/react-hooks';
import {useCounter} from '../../Hooks/useCounter';

describe('Pruebas en use counter', () => {
    test('debe de retornar valores por defecto', () => {

        const {result}=renderHook(()=> useCounter());
        
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');  
    });

    test('debe de tener el counter en el valor asignado', () => {

        const {result}=renderHook(()=> useCounter(100));
        
        expect(result.current.counter).toBe(100); 
    });
    
    test('Debe de incrementar el counter en 1', () => {
        
        const {result}=renderHook(()=> useCounter(100));

        const {increment}=result.current;
        act(()=>{
            increment();
        });

        const {counter}=result.current;
        expect(counter).toBe(101); 
    });
    test('Debe de decrementar en 1', () => {
        
        const {result}=renderHook(()=> useCounter(100));

        const {decrement}=result.current;
        act(()=>{
            decrement();
            
        });

        const {counter}=result.current;
        expect(counter).toBe(99); 
    });

    test('Debe de incrementar y luego hacer el reset', () => {
        
        const {result}=renderHook(()=> useCounter(100));

        const {increment}=result.current;
        const {reset}=result.current;
        act(()=>{
            increment();
            reset();
        });

        const {counter}=result.current;
        expect(counter).toBe(100); 
    });
    
    
})

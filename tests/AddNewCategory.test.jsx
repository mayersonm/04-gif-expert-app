import { fireEvent, render, screen } from "@testing-library/react";
import { AddNewCategory } from "../src/components/AddNewCategory";

describe('Prueba en componente AddNewCategory', () => { 
    
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();
   
    test('Debe de cambiar el valor de la caja de texto', () => { 

        render( <AddNewCategory onNewCategory={ onNewCategory } /> );
        
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( input.value  ).toBe( '' );


        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    }); 



    test(' No debe de llamar el newCategory si el input está vacío', () => { 

        const onNewCategory = jest.fn();

        render( <AddNewCategory onNewCategory={ onNewCategory } /> );
    
        const form  = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        



    });


});
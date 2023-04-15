import { render, screen } from "@testing-library/react";
import { GifExperApp } from "../src/GiftExpertApp";

describe('Pruebas en el componente <GiftExpertApp />', () => { 
    
    test('should first', () => { 

        render( <GifExperApp/> );
        screen.debug();

    })


});
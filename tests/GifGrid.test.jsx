import { render, screen } from "@testing-library/react";
import { GifGrid } from "../src/components/GifGrid";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

jest.mock('../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'Saitama';
    

    test('Debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText('Cargando ...') );
        expect( screen.getByText( category ));

    });

    test('Debe mostrar imagenes del useFect', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url:'https://localhost/imagen.jpg'
            },
            {
                id: '123',
                title: 'GOku',
                url:'https://localhost/imagenG.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe( 2 );

    });

 });
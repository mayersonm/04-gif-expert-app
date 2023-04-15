import { useState } from "react"
import { AddNewCategory , GifGrid } from './components';

export const GifExperApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return;
        
          setCategories([ newCategory, ...categories]);

    }

    return (
        <>
            <h1>GifExperApp</h1>
            <AddNewCategory 
                onNewCategory={ (value)=> onAddCategory(value) }
            />

            { 
                categories.map( (category) => ( 
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                )) 
            }

        </> 
    )
}
import { useState } from "react"

export const AddNewCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('One Punch')
    
    const onInputChangue = ({target}) => {
        setInputValue( target.value )
    }

    const onSubmit = () => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');

    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text" 
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChangue}
             />
        </form>
      
    )
}

import  Proptypes  from "prop-types"
import { useState } from "react"

export const AddNewCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState()
    
    const onInputChangue = ({target}) => {
        setInputValue( target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!inputValue || inputValue.trim().length <= 0) {
            return;
        }
    
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input type="text" 
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChangue}
             />
        </form>
      
    )
}

AddNewCategory.propTypes = {
    onNewCategory: Proptypes.func.isRequired

}

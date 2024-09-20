import React, { useState, useEffect } from 'react';
import './select.css';
import BackEnd_url from '../../config/BackEnd_url';

function SelectForm({ text, name, handleOnchange }) {
    const [categories, setCategories] = useState([]); 

    useEffect(() => {
        BackEnd_url.get('/categories')
            .then(response => {
                setCategories(response.data); 
            })
            .catch(error => {
                console.log("Erro ao buscar categorias:", error);
            });
    }, []); 

    return (
        <div className='form_control'>
            <label htmlFor={name}>{text}</label>
            <select
                name={name}
                onChange={handleOnchange}  
                required
            >
                <option value="">Selecione uma opção</option>

                {categories.length > 0 ? (
                    categories.map((category) => (
                        <option value={category.name} key={category.id}>
                            {category.name}
                            
                        </option>
                        
                    ))
                ) : (
                    <option disabled>Nenhuma opção disponível</option>
                )}
                
            </select>
        </div>
    );
}

export default SelectForm;

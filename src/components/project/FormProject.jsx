import React, { useState, useEffect } from 'react';
import './styles.css';
import Input from '../form/Input';
import SelectForm from '../form/SelectForm';
import SubmitBtn from '../form/SubmitBtn';
import BackEnd_url from '../../config/BackEnd_url';
import { Navigate, useNavigate } from 'react-router-dom';


function FormProject({ handlSubmit, btnText, projectData }) {
    const [name, setName] = useState('');
    const [budget, setBudget] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();


    function createForm(e) {
        e.preventDefault();

        const projectData = {
            name,
            budget,
            category_id: category,
            cost: 0,
            service: [],
        };

        BackEnd_url.post('/project', projectData)
            .then(response => {
                console.log('Projeto criado com sucesso:', response.data);
                setName('');
                setBudget('');
                setCategory('');
                alert('Projeto criado com sucesso:', response.data)
                navigate('/project')

            })
            .catch(error => {
                console.log('Erro ao criar o projeto:', error);
            });
    }

    return (
        <>
            <form className='form' onSubmit={createForm}>
                <Input
                    type='text'
                    text='Nome do projeto'
                    name='name'
                    placeholder='Insira o nome do projeto'
                    value={name}
                    handleOnchange={(e) => setName(e.target.value)}
                />
                <Input
                    type='number'
                    text='Orçamento do projeto'
                    name='budget'
                    placeholder='Insira o orçamento total'
                    value={budget}
                    handleOnchange={(e) => setBudget(e.target.value)}
                />
                <SelectForm
                    name='category_id'
                    text='Selecione a categoria'
                    value={category}
                    handleOnchange={(e) => setCategory(e.target.value)}
                />
                <SubmitBtn text={btnText} />
            </form>
        </>
    );
}

export default FormProject;

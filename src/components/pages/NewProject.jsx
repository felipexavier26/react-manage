import React from 'react'
import './newproject.css'
import FormProject from '../project/FormProject'

function NewProject() {

    return (
        <div className='container-newprotect'>
            <div className='newprotect-container'>
                <h1>Criar projetos</h1>
                <p>Crie seus projetos para depois adicionar os serviços</p>
                <FormProject btnText='Criar Projeto'/>

            </div>
        </div>
    )
}

export default NewProject
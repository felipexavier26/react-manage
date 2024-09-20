import React from 'react'
import './home.css'
import LinkButton from '../layout/LinkButton'


function Home() {
    return (
        <>
            <div className='container-home'>
                <div className='home-Container'>

                    <h1>Bem-vindo</h1>

                    <p>
                        Começe a gerenciar os seus projetos agora mesmo!
                    </p>

                    <LinkButton className='btn' to='/newproject' text='Criar Projeto' />
                </div>
            </div>
        </>
    )
}

export default Home
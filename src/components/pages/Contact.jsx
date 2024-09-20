import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className='container-contact'>
            <h1>Contato</h1>
            <p>Se você tiver alguma dúvida ou quiser entrar em contato conosco, fique à vontade para usar os métodos abaixo:</p>

            <div className='contact-info'>
                <h2>Informações de Contato</h2>
                <p><strong>Email:</strong> contato@empresa.com</p>
                <p><strong>Telefone:</strong> +55 11 1234-5678</p>
                <p><strong>Endereço:</strong> Rua Exemplo, 123, São Paulo, SP, Brasil</p>
            </div>

            <div className='contact-form'>
                <h2>Formulário de Contato</h2>
                <form>
                    <div className='form-group'>
                        <label htmlFor='name'>Nome:</label>
                        <input type='text' id='name' name='name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Mensagem:</label>
                        <textarea id='message' name='message' rows='4' required></textarea>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

import React, { useState } from 'react';
import './Footer.css';

      /* JÁ QUE VEIO ATÉ AQUI, SEGUE LA NO INSTA TAMBÉM: @Crvg_Felipe */

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isMessageClicked, setIsMessageClicked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setIsMessageClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (name && email && message) {
      setIsFormValid(true);

      // Envio do formulário com Formspree
      fetch('https://formspree.io/f/xdovvlnb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then((response) => {
          if (response.ok) {
            setIsSent(true);
            // Lógica adicional após o envio bem-sucedido
            setName('');
            setEmail('');
            setMessage('');
          } else {
            console.log('Erro ao enviar o e-mail. Por favor, tente novamente.');
          }
        })
        .catch((error) => {
          console.log('Erro ao enviar o e-mail:', error);
        });
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <footer className="footer">
      <div className='form-container'>
        <h1 className='logo-nome'>FELIPE COSTA</h1>
        <div className="container">

          <div className="row">
            <div className="col-md-6">
              <h3>Fale comigo!</h3>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={handleNameChange}
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={handleEmailChange}
                />
                <textarea
                  placeholder="Sua mensagem"
                  value={message}
                  onChange={handleMessageChange}
                  onClick={() => setIsMessageClicked(true)}
                ></textarea>
                <button type="submit">Enviar</button>
              </form>
              {!isFormValid && (
                <p>Todos os campos devem ser preenchidos.</p>
              )}
              {isSent && (
                <p>Enviado com sucesso!</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='mail-footer'> <p>FcFelipeCosta@hotmail.com</p> </div>
    </footer>
  );
};

export default Footer;

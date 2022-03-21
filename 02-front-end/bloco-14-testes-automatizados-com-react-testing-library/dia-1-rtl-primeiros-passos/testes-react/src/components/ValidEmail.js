// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';


//https://blog.geekhunter.com.br/criando-componentes-react-componentes-de-classe-e-funcional-sem-estado/
//esse é um componente funcional sem estado
//Embora os componentes façam exatamente a mesma coisa, algo um tanto diferente ocorre na forma como acessamos os dados recebidos por props. No componente de classe precisamos estender a classe Component padrão do React e acessar seus valores através do objeto this.

//Já no componente funcional, o this não existe, pois o mesmo é apenas uma função que pode acessar os valores do objeto diretamente, exatamente como se estivesse recebendo esses dados por parâmetros.

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {
        email &&
        <h3 data-testid="id-is-email-valid" className={verifyEmail(email) ? 'green-text' : 'red-text'}>
          {(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}
        </h3>
      }
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
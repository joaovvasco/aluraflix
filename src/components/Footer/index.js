import React from 'react';
import { FooterBase } from './styles';
import LogoFacebook from '../../assets/img/logo_facebook.png';
import LogoInstagram from '../../assets/img/logo_insta.png';

function Footer() {
  const baseUrl = `${__dirname}/assets/img`;

  return (
    <FooterBase>
      <a href="https://www.instagram.com/ospowerrangersbelem/?hl=pt-br">
        <img className="Logo" src={LogoInstagram} alt="AluraFlix logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

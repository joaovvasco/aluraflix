import React from 'react';
import { FooterBase } from './styles';
import LogoInstagram from '../../assets/img/logo_insta.png';
import {Link} from 'react-router-dom'

function Footer() {

  return (
    <FooterBase>
      <Link to="https://www.instagram.com/ospowerrangersbelem/?hl=pt-br">
        <img className="Logo" src={LogoInstagram} alt="AluraFlix logo" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <Link to="https://www.alura.com.br/">
          Imersão React da Alura
        </Link>
      </p>
    </FooterBase>
  );
}

export default Footer;

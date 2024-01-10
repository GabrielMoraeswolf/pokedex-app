import React from 'react';
import style from '../Footer/Footer.css';
const Footer = () => {
  return (
    <footer className={style.footer} >
      <h3 className={style.h3} >Criado por 
        <a className={style.link} href="https://www.instagram.com/gabriel.moraesw/" target="_blank" rel="noopener noreferrer">@gabriel.moraesw</a>.</h3>
    </footer>
  );
}

export default Footer;
import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>copyright &copy; 2024 powered by <span className={style.logo}>Empire</span></p>
    </div>
  )
}

export default Footer

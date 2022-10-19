import React from 'react'
import css from './Footer.module.css'
import Image from 'next/image'
import Logo from '../../assets/logos.png'

function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
      <i class ="fa fa-facebook-official fa-3x" aria-hidden="true"/> 
      <i class="fa fa-github fa-3x" aria-hidden="true"/>
      <i class="fa fa-instagram fa-3x" aria-hidden="true"/>
      </div>

      <div className={css.logo}>
        <Image src={Logo} alt="" width={100} height={50}/>
        
      </div>
    </div>
    
  )
}

export default Footer
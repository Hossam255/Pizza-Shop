import React from 'react'
import css from './Footer.module.css'
import Image from 'next/image'
import Logo from '../../assets/logos.png'
import { UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons'

function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilFacebook/>
        <UilGithub/>
        <UilInstagram/>
      </div>

      <div className={css.logo}>
        <Image src={Logo} alt="" width={70} height={35}/>
        
      </div>
    </div>
    
  )
}

export default Footer
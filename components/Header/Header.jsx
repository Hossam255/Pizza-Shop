import React, { useEffect, useState } from 'react'
import css from './Header.module.css'
import Image from 'next/image'
import Logo from '../../assets/logo.png'
import { UilShoppingBag, UilReceipt } from '@iconscout/react-unicons'
import { useStore } from '../../store/store'
import Link from 'next/link'

function Header() {
 const [Order, setOrder] = useState("")

 useEffect(()=> {
  setOrder(localStorage.getItem("order"))
 }, [])
  const items = useStore((state)=>state.cart.pizzas.length)
  return (
    <div className={css.header}>
      {/* logo side */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50}/>
        <span>Focus</span>
      </div>

      {/* menu side */}
      <ul className={css.menu}>
        <li>
          <Link href="../">Home</Link>
        </li>
        
      </ul>

      {/* cart side */}
      <div className={css.cartside}>
        <Link href='/cart'>
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2e2e2e"/>
            <div className={css.badge}>{items}</div>
          </div>
        </Link>

        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color='2E2E2E'/>
              {Order != "" && <div className={css.badge}>1</div>}
            </div>
          </Link>
        )}
      </div>
    </div>
    
  )
}

export default Header
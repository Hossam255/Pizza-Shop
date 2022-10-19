import React, { useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import css from './OrderModal.module.css'
import { createOrder } from '../../lib/orderHandler';
import toast, {Toaster} from 'react-hot-toast';
import { useStore } from '../../store/store';
import { useRouter } from 'next/router';

function OrderModal({opened, PaymentMethod, setOpened}) {
    const theme = useMantineTheme();
    const router = useRouter()
    const total =  typeof window !== 'undefined' && localStorage.getItem('total')

    const [FormData, setFormData] = useState({})
    const restCart = useStore((state)=>state.resetCart)
    
    const handleInput = (e)=> {
      setFormData({...FormData, [e.target.name] : e.target.value})
    }
    const handleSubmit = async (e)=> {
      e.preventDefault();
      const id = await createOrder({...FormData, total, PaymentMethod})
      toast.success("Order Placed");
      restCart()
      {
        typeof window !== 'undefined' && localStorage.setItem('order', id)
      }
      router.push(`/order/${id}`)
    }

  return (
    <Modal
    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
    overlayOpacity={0.55}
    overlayBlur={3}
    opened = {opened}
    onClose = {()=> setOpened(null)}
  >
    {/* Modal content */}
    <form onSubmit={handleSubmit} className={css.formContainer}>
      <input onChange={handleInput} type="text" name='name' required placeholder='Name' />
      <input onChange={handleInput} type="text" name='phone' required placeholder='Phone' />
      <textarea onChange={handleInput} name="address" rows={3} placeholder='Address'></textarea>
      <span>
        You will pay <span>$ {total}</span> on delivery
      </span>
      <button type='submit' className='btn'>Place Order</button>
    </form>
    <Toaster/>
  </Modal>
  )
}

export default OrderModal
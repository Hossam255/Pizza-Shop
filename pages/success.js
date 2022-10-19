import React from 'react'
import Layout from '../components/layout'
import OrderModal from '../components/OrderModal/OrderModal'

function success() {
  return (
    <Layout>
        <OrderModal opened={true} PaymentMethod={1}/>
    </Layout>
  )
}

export default success
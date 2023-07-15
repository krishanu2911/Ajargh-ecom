import React from 'react'
import { CartHeader, CartListing } from "../../components/index"

export const CartPage = () => {
  return (
    <div className=' w-full'>
      <CartHeader />
      <CartListing />
    </div>
  )
}

import { useState } from 'react'

export const addToCart = () => {
  const [cart, setCart] = useState([])
  console.log('este boton sirve para agregar al carrito')

  return cart
}
export const deleteCart = () => {}
export const completeBuy = () => {}

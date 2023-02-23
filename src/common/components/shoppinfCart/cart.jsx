import { useState } from 'react'

export default function Cart() {
  const [products, setProducts] = useState([])

  const handleCheckout = async () => {
    // Envía la lista de productos al servidor para procesar la compra
    // Después de procesar la compra, vacía el carrito y muestra un mensaje de confirmación al usuario
    setProducts([])
    alert('¡Gracias por tu compra!')
  }

  const handleRemoveProduct = (index) => {
    // Elimina un producto del carrito por su índice
    setProducts((prevProducts) => prevProducts.filter((product, i) => i !== index))
  }

  return (
    <div className="border-2 border-black  grid">
      {products.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <span>{product.name}</span>
              <span>{product.price}</span>
              <span>{product.quantity}</span>
              <button onClick={() => handleRemoveProduct(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-center">
        <button className="p-4 flex justify-center rounded-2xl bg-[#FFF409]">Seguir comprando</button>
      </div>
    </div>
  )
}

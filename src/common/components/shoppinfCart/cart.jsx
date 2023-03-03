import { useEffect, useState } from 'react'
import ShopItem from './shopItem'
export default function Cart() {
  const [data, setData] = useState([])
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedData = JSON.parse(localStorage.getItem('selectedItems'))
      setData(storedData)
    }
  }, [])

  const calculateTotal = () => {
    let total = 0
    if (data) {
      data.forEach((item) => {
        total += item.course_price
      })
    } else {
      return
    }

    return total
  }

  const eliminarProducto = (id) => {
    //filtrar todos los productos que no hayan sido removidos
    const carritoActualizado = data.filter((item) => item.course_id != id)
    //actualiza la lista visible al usuario
    setData(carritoActualizado)
    //actualizar la lista en el localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedItems', JSON.stringify(carritoActualizado))
    }
  }

  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="grid col-span-2 gap-10">
        <div className="grid gap-10">
          {!data.length <= 0 ? (
            data.map((item, index) => {
              return <ShopItem key={item.course_id} item={item} index={index} removeProduct={eliminarProducto} />
            })
          ) : (
            <p>Tu carrito esta vacio</p>
          )}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-40 p-5 bg-white rounded-xl">
          <div className="">
            <p className="mb-4 font-bold">Resumen de compra</p>
            <div className="grid gap-3">
              <div className="flex justify-between p-5 rounded-lg shadow-lg ">
                <p>Sub total</p>
                <p>s/. {calculateTotal()}</p>
              </div>
              <div className="flex justify-between p-5 rounded-lg shadow-lg">
                <p>Total</p>
                <p>s/. {calculateTotal()}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <button
              className={
                !data.length <= 0
                  ? 'w-full py-5 font-bold text-white bg-black rounded-lg'
                  : 'w-full py-5 font-bold text-[#686868] bg-[#d6d6d6] rounded-lg'
              }
              disabled={!data.length <= 0 ? false : true}
              onClick={() => {
                console.log(`Comprando los siguientes cursos`)
              }}
            >
              PAGAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

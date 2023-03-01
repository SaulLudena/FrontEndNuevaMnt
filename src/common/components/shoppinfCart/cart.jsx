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
    console.log(id)
    /*
    filtrar todos los productos que no hayan sido removidos
    */
    const carritoActualizado = data.filter((item) => item.course_id != id)
    setData(carritoActualizado)
  }

  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="grid gap-10 col-span-2">
        <div className="grid gap-10">
          {data ? (
            data.map((item, index) => {
              return <ShopItem key={item.course_id} item={item} index={index} removeProduct={eliminarProducto} />
            })
          ) : (
            <p>Tu carrito esta vacio</p>
          )}
        </div>
      </div>
      <div>
        <div className="bg-white rounded-xl p-5 flex flex-col gap-40">
          <div className="">
            <p className="font-bold mb-4">Resumen de compra</p>
            <div className="grid gap-3">
              <div className="rounded-lg shadow-lg p-5 flex justify-between ">
                <p>Sub total</p>
                <p>s/. {calculateTotal()}</p>
              </div>
              <div className="rounded-lg shadow-lg p-5 flex justify-between">
                <p>Total</p>
                <p>s/. {calculateTotal()}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="bg-black w-full text-white font-bold py-5 rounded-lg" disabled={data ? false : true}>
              PAGAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

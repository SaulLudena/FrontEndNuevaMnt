import { useEffect, useState } from 'react'
import ShopItem from './shopItem'
import GiUfo from 'react-icons/gi'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { GrClose } from 'react-icons/gr'
import { reusableStyles } from '../../../styles/styles'
export default function Cart() {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpenEdit, setIsOpenEdit] = useState(false)
  const [apiResult, setApiResult] = useState({})
  const [disabledButton, setDisabledButton] = useState(true)

  const [data, setData] = useState([])
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedData = JSON.parse(localStorage.getItem('selectedItems'))
      setData(storedData)
    }
    console.log(data)
  }, [])

  const calculateTotal = () => {
    let total = 0
    if (data) {
      data.forEach((item) => {
        total += parseInt(item.precio_descuento_curso)
      })
    } else {
      return
    }

    return total
  }

  const eliminarProducto = (id) => {
    //filtrar todos los productos que no hayan sido removidos
    const carritoActualizado = data.filter((item) => item.id_curso != id)
    //actualiza la lista visible al usuario
    setData(carritoActualizado)
    //actualizar la lista en el localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedItems', JSON.stringify(carritoActualizado))
    }
  }

  const closeModalDelete = () => {
    setDisabledButton(true)
    setIsOpen(false)
  }
  const openModalDelete = () => {
    setDisabledButton(true)
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalDelete}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white border-2 shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                  >
                    <p>Selecciona tu método de pago</p>
                    <div
                      className="p-3 rounded-full cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        closeModalDelete()
                      }}
                    >
                      <GrClose className="" />
                    </div>
                  </Dialog.Title>
                  <div className="flex flex-col justify-between ">
                    <div className="grid grid-cols-2 my-5 text-sm">
                      <div className="col-span-1 border border-gray-500">Depósito bancario</div>
                      <div className="col-span-1 border border-blue-500">Pago con tarjeta</div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        className={reusableStyles.button}
                        onClick={() => {
                          closeModalDelete()
                        }}
                      >
                        Cancelar
                      </button>

                      <button
                        type="button"
                        disabled={disabledButton}
                        className={disabledButton ? reusableStyles.buttonDisabled : reusableStyles.redButton}
                        onClick={() => {
                          confirmDelete()
                        }}
                      >
                        Eliminar curso
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="grid grid-cols-3 gap-10">
        <div className="grid col-span-2 gap-10">
          <div className="grid gap-10">
            {!data.length <= 0 ? (
              data.map((item, index) => {
                return (
                  <ShopItem key={item.id_curso} item={item} index={item.id_curso} removeProduct={eliminarProducto} />
                )
              })
            ) : (
              <div>Tu carrito esta vacio</div>
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
                  openModalDelete()
                }}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

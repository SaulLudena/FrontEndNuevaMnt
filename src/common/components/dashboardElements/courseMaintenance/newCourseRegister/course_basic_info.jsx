import { Disclosure, Transition } from '@headlessui/react'
import { reusableStyles } from '../../../../../styles/styles'
import { BsChevronUp, BsFillPencilFill } from 'react-icons/bs'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Course_basic_info({ register, errors, reset }) {
  const [PriceType, setPriceType] = useState(false)
  const [allCategories, setAllCategories] = useState()
  const [courseAmount, setCourseAmout] = useState({
    normalCourseAmount: 0,
    discountCourseAmount: 0,
  })

  useEffect(() => {
    const fetchingCategories = async () => {
      const result = await axios.get('http://localhost:3003/category/getAllCategories')
      setAllCategories(result.data.getAllCategories)
    }
    console.log(allCategories)
    fetchingCategories()
  }, [])

  const handlePrice = (event) => {
    const { name, value } = event.target
    setCourseAmout((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const setCourseToFree = () => {
    setPriceType(false)
    reset({
      precio_regular: 0,
      precio_descuento: 0,
    })
    console.log('Has tornado el curso a de pago')
  }

  const setCourseToSomePrice = () => {
    setPriceType(true)
  }
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className={reusableStyles.disclosureItem}>
            <div className="flex items-center gap-2 ">
              <BsFillPencilFill size={15} />
              <span>Informacion del curso</span>
            </div>
            <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
          </Disclosure.Button>
          <Transition
            enter="transition duration-400 ease-in-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-40 ease-in-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-10 text-sm ">
              <div className="flex flex-col gap-5 p-5 bg-white ">
                <div className="grid gap-3">
                  <p className="font-medium">Titulo del curso</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('titulo_curso', { required: true })}
                  />
                  {errors?.titulo_curso?.type === 'required' && (
                    <div className="">
                      <span className={reusableStyles.formAlerts}>Campo requerido</span>
                    </div>
                  )}
                </div>

                <div className="grid gap-3">
                  <p className="font-medium">Slug del curso</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('slug_curso', { required: true })}
                  />
                  {errors?.slug_curso?.type === 'required' && (
                    <div className="">
                      <span className={reusableStyles.formAlerts}>Campo requerido</span>
                    </div>
                  )}
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Sobre el curso</p>
                  <textarea
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    rows={6}
                    {...register('descripcion_curso', { required: true })}
                  />
                  {errors?.descripcion_curso?.type === 'required' && (
                    <div className="">
                      <span className={reusableStyles.formAlerts}>Campo requerido</span>
                    </div>
                  )}
                </div>

                <div className="grid gap-3">
                  <p className="font-medium">Selecciona una categoria</p>
                  <select
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('categoria_curso', { required: true })}
                  >
                    {/*hacer un map de las categorias de la base de datos */}
                    <option value={1}>Negocios</option>
                    <option value={2}>Fotografia</option>
                  </select>
                  {errors?.categoria_curso?.type === 'required' && (
                    <div className="">
                      <span className={reusableStyles.formAlerts}>Campo requerido</span>
                    </div>
                  )}
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Tipo de costo del curso</p>
                  <div className="grid grid-cols-2 gap-5">
                    <label htmlFor="field-wind" className={reusableStyles.inputFormForCourseMaintenance}>
                      <input
                        {...register('precio_curso')}
                        type="radio"
                        value={0}
                        className="mr-3"
                        onClick={() => {
                          setCourseToFree()
                        }}
                      />
                      <p>Gratis</p>
                    </label>
                    <label htmlFor="field-sun" className={reusableStyles.inputFormForCourseMaintenance}>
                      <input
                        {...register('precio_curso')}
                        type="radio"
                        value={1}
                        className="mr-3"
                        onClick={() => {
                          setCourseToSomePrice()
                        }}
                      />{' '}
                      De pago
                    </label>
                  </div>
                  {PriceType ? (
                    <div>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="grid gap-3 ">
                          <p className="font-medium">Precio regular</p>
                          <div className="flex">
                            <p className="p-3 border-2 border-r-0 rounded-l-lg bg-emerald-300 border-emerald-300">
                              S/.
                            </p>
                            <input
                              type="number"
                              className={reusableStyles.inputFormToSetprice}
                              placeholder="0"
                              min={0}
                              onChange={handlePrice}
                              {...register('precio_regular', { required: true })}
                            />
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <p className="font-medium">Precio descuento</p>
                          <div className="flex">
                            <p className="p-3 border-2 border-r-0 rounded-l-lg bg-emerald-300 border-emerald-300">
                              S/.
                            </p>
                            <input
                              type="number"
                              className={reusableStyles.inputFormToSetprice}
                              placeholder="0"
                              min={0}
                              onChange={handlePrice}
                              {...register('precio_descuento', { required: true })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Thumbnail del curso</p>
                  <div className="grid grid-cols-2 gap-10">
                    <div className="grid col-span-1 gap-3">
                      <input
                        type="file"
                        className={reusableStyles.inputFormForCourseMaintenance}
                        {...register('thumbnail_curso', { required: true })}
                      />
                      {errors?.thumbnail_curso?.type === 'required' && (
                        <div className="">
                          <span className={reusableStyles.formAlerts}>Campo requerido</span>
                        </div>
                      )}
                    </div>
                    <div className="col-span-1">
                      <p className="font-medium ">Pro tip:</p>
                      <ul className="gap-4 text-gray-700 list-disc rid">
                        <li>El tamaño de la imagen debe ser 700x430 pixeles</li>
                        <li>Debes seleccionar una imagen</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

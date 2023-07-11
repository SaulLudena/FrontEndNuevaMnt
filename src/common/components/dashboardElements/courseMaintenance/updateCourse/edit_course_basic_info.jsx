import { Disclosure, Transition } from '@headlessui/react'
import { reusableStyles } from '../../../../../styles/styles'
import { BsChevronUp, BsFillPencilFill, BsImageAlt } from 'react-icons/bs'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Edit_course_basic_info({ courseDetail, reset, register, setValue }) {
  //console.log(courseDetail)
  const [previewImage, setPreviewImage] = useState('')
  const [PriceType, setPriceType] = useState(courseDetail.tipo_precio_curso)
  const [allCategories, setAllCategories] = useState([])
  const [courseAmount, setCourseAmout] = useState({
    normalCourseAmount: 0,
    discountCourseAmount: 0,
  })

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
  }

  const setCourseToSomePrice = () => {
    setPriceType(true)
  }

  const handleImagePreview = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPreviewImage(e.target.files[0])
    }
  }

  useEffect(() => {
    setValue('titulo_curso', courseDetail.nombre_curso)
    setValue('slug_curso', courseDetail.slug_curso)
    setValue('descripcion_curso', courseDetail.descripcion_curso)
    setValue('categoria_curso', courseDetail.tb_categoria_curso?.nombre_categoria_curso)
    setValue('tipo_precio_curso', courseDetail.tipo_precio_curso)
    setValue('precio_regular_curso', courseDetail.precio_regular_curso)
    setValue('precio_descuento_curso', courseDetail.precio_descuento_curso)
    setValue('thumbnail_curso', courseDetail.url_imagen_principal_curso)
    setPriceType(courseDetail.tipo_precio_curso)
    const fetchingCategories = async () => {
      try {
        const result = await axios.get('http://localhost:3003/category/getAllCategories')
        setAllCategories(result.data.getAllCategories)
      } catch (error) {
        console.log(error)
      }
    }
    fetchingCategories()
    //apuntar al objeto que trae los detalles de un curso
  }, [courseDetail])

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
                    defaultValue={courseDetail.nombre_curso}
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('titulo_curso', { required: false })}
                    onChange={(e) => {
                      setValue('titulo_curso', e.target.value)
                    }}
                  />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Slug del curso</p>
                  <input
                    defaultValue={courseDetail.slug_curso}
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('slug_curso', { required: false })}
                    onChange={(e) => {
                      setValue('slug_curso', e.target.value)
                    }}
                  />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Sobre el curso</p>
                  <textarea
                    defaultValue={courseDetail.descripcion_curso}
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    rows={6}
                    {...register('descripcion_curso', { required: false })}
                    onChange={(e) => {
                      setValue('descripcion_curso', e.target.value)
                    }}
                  />
                </div>

                <div className="grid gap-3">
                  <p className="font-medium">Selecciona una categoria</p>
                  <select
                    className={reusableStyles.inputFormForCourseMaintenance}
                    value={courseDetail.tb_categoria_curso_id_categoria_curso}
                    {...register('categoria_curso', { required: false })}
                  >
                    <option value={courseDetail.tb_categoria_curso_id_categoria_curso}>
                      {courseDetail.tb_categoria_curso && courseDetail.tb_categoria_curso.nombre_categoria_curso}
                    </option>
                    {allCategories &&
                      allCategories.map((category, index) => {
                        return (
                          <option key={index} value={category.id_categoria_curso}>
                            {category.nombre_categoria_curso}
                          </option>
                        )
                      })}
                  </select>
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Tipo de costo del curso</p>
                  <div className="grid grid-cols-2 gap-5">
                    <label htmlFor="field-wind" className={reusableStyles.inputFormForCourseMaintenance}>
                      <input
                        {...register('tipo_precio_curso')}
                        type="radio"
                        value={0}
                        checked={courseDetail.tipo_precio_curso === '0' ? true : false}
                        className="mr-3"
                        onChange={() => {
                          setCourseToFree()
                        }}
                      />
                      <p>Gratis</p>
                    </label>
                    <label htmlFor="field-sun" className={reusableStyles.inputFormForCourseMaintenance}>
                      <input
                        {...register('tipo_precio_curso')}
                        type="radio"
                        value={1}
                        checked={courseDetail.tipo_precio_curso === '1' ? true : false}
                        className="mr-3"
                        onChange={() => {
                          setCourseToSomePrice()
                        }}
                      />{' '}
                      De pago
                    </label>
                  </div>
                  {courseDetail.tipo_precio_curso === '1' ? (
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
                              defaultValue={courseDetail.precio_regular_curso}
                              onChange={handlePrice}
                              {...register('precio_regular_curso', { required: false })}
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
                              defaultValue={courseDetail.precio_descuento_curso}
                              onChange={handlePrice}
                              {...register('precio_descuento_curso', { required: false })}
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
                    <div className="grid col-span-1 gap-3 ">
                      <div className="relative grid gap-3 rounded-lg ">
                        <div className="flex items-center p-5 text-yellow-900 bg-yellow-100 border-2 border-yellow-400 rounded-lg ">
                          <BsImageAlt size={20} />
                          <p className="ml-3">Seleccionar imagen</p>
                        </div>
                        <input
                          type="file"
                          className="absolute w-full h-full opacity-0 cursor-pointer"
                          accept=".jpg, .jpeg, .png"
                          {...register('thumbnail_curso', {
                            required: false,
                            onChange: handleImagePreview,
                          })}
                        />
                      </div>
                      <img
                        src={courseDetail.url_imagen_principal_curso}
                        /*                          src={URL.createObjectURL(previewImage)}*/
                        alt="thumbnail course"
                        className="object-cover w-full border-2 border-yellow-400 rounded-lg h-60"
                      />
                      {previewImage && (
                        <img
                          src={URL.createObjectURL(previewImage)}
                          alt="thumbnail course"
                          className="object-cover w-full border-2 border-yellow-400 rounded-lg h-60"
                        />
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

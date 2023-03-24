import { Disclosure, Transition } from '@headlessui/react'
import { reusableStyles } from '../../../../../styles/styles'
import { BsChevronUp, BsFillPencilFill } from 'react-icons/bs'

export default function Course_basic_info({ register }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={reusableStyles.disclosureItem}>
            <div className="flex items-center gap-2">
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
                    {...register('titulo_curso')}
                  />
                </div>

                <div className="grid gap-3">
                  <p className="font-medium">Slug del curso</p>
                  <input
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    {...register('slug_curso')}
                  />
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Sobre el curso</p>
                  <textarea
                    type="text"
                    className={reusableStyles.inputFormForCourseMaintenance}
                    rows={6}
                    {...register('descripcion_curso')}
                  />
                </div>

                <div className="grid gap-3">
                  <p className="font-medium">Selecciona una categoria</p>
                  <select className={reusableStyles.inputFormForCourseMaintenance} {...register('categoria_curso')}>
                    <option>Negocios</option>
                    <option>Tecnologia</option>
                    <option>Emprendimiento</option>
                  </select>
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Precio del curso</p>
                  <div className="grid grid-cols-2 gap-5">
                    <label htmlFor="field-wind" className={reusableStyles.inputFormForCourseMaintenance}>
                      <input {...register('precio_curso')} type="radio" value={0} id="field-wind" className="mr-3" />
                      <p>Gratis</p>
                    </label>
                    <label htmlFor="field-sun" className={reusableStyles.inputFormForCourseMaintenance}>
                      <input {...register('precio_curso')} type="radio" value={1} id="field-sun" className="mr-3" /> De
                      pago
                    </label>
                  </div>
                </div>
                <div className="grid gap-3">
                  <p className="font-medium">Thumbnail del curso</p>
                  <div className="grid grid-cols-2 gap-10">
                    <div className="col-span-1">
                      <input
                        type="file"
                        className={reusableStyles.inputFormForCourseMaintenance}
                        {...register('thumbnail_curso')}
                      />
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

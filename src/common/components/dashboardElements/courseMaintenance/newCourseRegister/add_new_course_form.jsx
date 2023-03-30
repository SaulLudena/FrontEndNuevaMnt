import { Disclosure } from '@headlessui/react'
import { reusableStyles } from '../../../../../styles/styles'
import { BsChevronUp } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useFieldArray, useForm } from 'react-hook-form'

import Course_basic_info from './course_basic_info'
import Course_video_preview from './course_video_preview'
import Course_builder from './course_builder'
import Course_resources from './course_resources'
import Course_extra_info from './course_extra_info'

export default function TabNav() {
  const { register, handleSubmit, control } = useForm()

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'modulos_curso',
    // nombre del campo que será un array
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-10">
        <form className="flex flex-col col-span-8 gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="h-auto ">
              <button className="px-10 py-4 flex items-center gap-3 justify-center rounded-lg bg-[#FFF409]">
                <AiFillCheckCircle /> Publicar curso
              </button>
            </div>
          </div>
          <div className="grid gap-3">
            {/*Menu expandible de informacion principal del curso Y PASAR LAS PROPS !!!!!*/}
            <Course_basic_info register={register} />
            {/*Menu expandible de  video Y PASAR LAS PROPS !!!!!*/}
            <Course_video_preview register={register} />
            {/*Menu expandible del maquetador de curso Y PASAR LAS PROPS !!!!!*/}
            <Course_builder register={register} fields={fields} append={append} remove={remove} update={update} />

            {/*Menu expandible de google meet (no hay contenido)*/}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={reusableStyles.disclosureItem}>
                    {' '}
                    <span>Google Meet</span>
                    <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"></Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/*Menu expandible de zoom meeting (no hay contenido)*/}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={reusableStyles.disclosureItem}>
                    <span>Zoom meeting</span>
                    <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in
                    full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/*Menu expandible de recursos del curso Y PASAR LAS PROPS !!!!!*/}
            <Course_resources register={register} />
            {/*Menu expandible de datos adicionales Y PASAR LAS PROPS !!!!!*/}
            <Course_extra_info register={register} />
          </div>
        </form>
        <div className="col-span-4">
          <p className="text-2xl font-medium"> Consejos para la subida de cursos</p>
          <div>
            <ul className="grid gap-4 p-5 text-gray-700 list-disc">
              <li>Set the Course Price option or make it free.</li>
              <li>Standard size for the course thumbnail is 700x430.</li>
              <li>Video section controls the course overview video.</li>
              <li>Course Builder is where you create & organize a course.</li>
              <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
              <li>Prerequisites refers to the fundamental courses to complete before taking this particular course.</li>
              <li>Information from the Additional Data section shows up on the course single page.s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

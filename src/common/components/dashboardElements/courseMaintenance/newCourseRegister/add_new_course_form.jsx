import { Disclosure } from '@headlessui/react'
import { reusableStyles } from '../../../../../styles/styles'
import { BsChevronUp } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

import Course_basic_info from './course_basic_info'
import Course_video_preview from './course_video_preview'
import Course_builder from './course_builder'
import Course_resources from './course_resources'
import Course_extra_info from './course_extra_info'

export default function TabNav() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    const courseObject = {
      titulo_curso: data.titulo_curso,
      slug_curso: data.slug_curso,
      descripcion_curso: data.descripcion_curso,
      categoria: data.categoria_curso,
      precio_curso: data.precio_curso,
      thumbnail_curso: data.thumbnail_curso,
      url_preview_curso: data.url_preview_curso,
      modulos_curso: [
        {
          nombre_modulo: data.nombre_modulo,
          resumen_modulo: data.resumen_modulo,
          lecciones: [
            {
              nombre_leccion: 'leccion 1',
              url_leccion: 'http://vimeo.com',
            },
          ],
        },
      ],
    }
    console.log(courseObject)
  }
  return (
    <div className=" ">
      <div className="grid grid-cols-12 gap-10">
        <form className="col-span-8 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className=" h-auto">
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
            <Course_builder register={register} />

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
          <p className="font-medium text-2xl"> Consejos para la subida de cursos</p>
          <div>
            <ul className="list-disc p-5 grid gap-4 text-gray-700">
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

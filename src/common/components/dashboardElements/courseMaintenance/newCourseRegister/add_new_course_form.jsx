import { AiFillCheckCircle } from 'react-icons/ai'
import { useFieldArray, useForm } from 'react-hook-form'
import Course_basic_info from './course_basic_info'
import Course_video_preview from './course_video_preview'
import Course_builder from './course_builder'
import Course_resources from './course_resources'
import Course_extra_info from './course_extra_info'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
export default function TabNav() {
  const [disableButton, setDisableButton] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm()

  //useFieldArray para modulos
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'modulos_curso',
  })
  //useFieldArray para recursos
  const {
    fields: resourceFields,
    append: appendResource,
    remove: removeResource,
    update: updateResource,
  } = useFieldArray({
    control,
    name: 'recursos_curso',
  })

  const onSubmit = async (data) => {
    console.log(data)
    setDisableButton(true)
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      if (key === 'modulos_curso') {
        formData.append('modulos_curso', JSON.stringify(value)) // Convertir el arreglo a una cadena JSON
        for (const modulo of value) {
          for (const leccion of modulo.lessons) {
            if (leccion.leccion_imagen) {
              // Verifica si es un solo archivo o una lista de archivos
              if (leccion.leccion_imagen instanceof FileList) {
                for (let i = 0; i < leccion.leccion_imagen.length; i++) {
                  formData.append('leccion_imagen', leccion.leccion_imagen[i])
                }
              } else if (leccion.leccion_imagen instanceof File) {
                formData.append('leccion_imagen', leccion.leccion_imagen)
              }
            }
          }
        }
      } else if (key === 'modulos_curso') {
        formData.append('modulos_curso', JSON.stringify(value)) // Convertir el arreglo a una cadena JSON
      } else if (key === 'thumbnail_curso') {
        formData.append('thumbnail_curso', value[0])
      } else {
        formData.append(key, value)
      }
    }
    if (data.recursos_curso && data.recursos_curso.length > 0) {
      for (let i = 0; i < data.recursos_curso.length; i++) {
        formData.append('recursos_curso', data.recursos_curso[i])
      }
    }
    formData.append('nuevamenteToken', Cookies.get('nuevamenteToken'))

    try {
      const response = await axios.post('http://localhost:3003/course/addNewCourse', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const { message, status } = response.data
      if ((status === 200) & (message === 'Curso agregado correctamente')) {
        window.location.href = '/dashboard/zonaDeMentores/'
      }
      console.log(message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="">
      <div className="grid grid-cols-12 gap-10">
        <form className="flex flex-col col-span-8 gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="h-auto ">
              <button
                className={
                  !disableButton
                    ? `px-10 py-4 flex items-center gap-3 justify-center rounded-lg bg-[#4BFF9E] shadow-sm`
                    : `px-10 py-4 flex items-center gap-3 justify-center rounded-lg bg-[#c3fdde]`
                }
                disabled={disableButton}
              >
                <AiFillCheckCircle /> Publicar curso
              </button>
            </div>
          </div>
          <div className="grid gap-3">
            {/*Menu expandible de informacion principal del curso Y PASAR LAS PROPS !!!!!*/}
            <Course_basic_info register={register} errors={errors} reset={reset} setValue={setValue} />
            {/*Menu expandible de  video Y PASAR LAS PROPS !!!!!*/}
            <Course_video_preview register={register} />
            {/*Menu expandible del maquetador de curso Y PASAR LAS PROPS !!!!!*/}
            <Course_builder
              register={register}
              fields={fields}
              append={append}
              remove={remove}
              update={update}
              setValue={setValue}
            />
            <Course_resources
              register={register}
              resourceFields={resourceFields}
              appendResource={appendResource}
              removeResource={removeResource}
              updateResource={updateResource}
              setValue={setValue}
            />
            <Course_extra_info register={register} />
          </div>
        </form>
        <div className="col-span-4">
          <p className="text-2xl font-medium">Consejos para la subida de cursos</p>
          <div>
            <ul className="grid gap-4 p-5 text-gray-700 list-disc">
              <li>Establece el precio del curso o vuelvelo gratis</li>
              <li>Las dimensiones de la imagen del curso deben ser 700x300</li>
              <li>El maquetador de cursos es donde organizas un curso</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

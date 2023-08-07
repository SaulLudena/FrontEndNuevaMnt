import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { useRouter } from 'next/router'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useFieldArray, useForm } from 'react-hook-form'

import Edit_course_basic_info from './edit_course_basic_info'
import Edit_video_preview from './edit_video_preview'
import Edit_course_builder from './edit_course_builder'
export default function updateCourse() {
  const router = useRouter()
  const { idCurso } = router.query
  const [disableButton, setDisableButton] = useState(false)
  const [courseDetail, setCourseDetail] = useState({})
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  //useFieldArray para modulos
  const { fields, insert, append, remove, update } = useFieldArray({
    control,
    name: 'modulos_curso',
  })

  /*usando useeffect y axios hacer un call a la api y recueperar datos del curso*/
  useEffect(() => {
    try {
      const getCourseById = async () => {
        if (idCurso) {
          const response = await axios.post('http://localhost:3003/course/getCourseById', {
            nuevamntToken: Cookies.get('nuevamenteToken'),
            id_curso: idCurso,
          })

          setCourseDetail(response.data.getCourseById[0])
          console.log(response.data.getCourseById[0])
        }
      }
      getCourseById()
    } catch (error) {
      console.log(error)
    }
  }, [idCurso])

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <div className="grid grid-cols-12 gap-10">
        <form className="flex flex-col col-span-8 gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="h-auto ">
              <button
                className={
                  !disableButton
                    ? `px-10 py-4 flex items-center gap-3 justify-center rounded-lg bg-[#FFF409] shadow-sm`
                    : `px-10 py-4 flex items-center gap-3 justify-center rounded-lg bg-[#fdf88b]`
                }
                disabled={disableButton}
              >
                <AiFillEdit /> Guardar cambios
              </button>
            </div>
          </div>
          <div className="grid gap-3">
            <Edit_course_basic_info courseDetail={courseDetail} register={register} setValue={setValue} />
            <Edit_video_preview courseDetail={courseDetail} />
            <Edit_course_builder
              courseDetail={courseDetail}
              reset={reset}
              register={register}
              remove={remove}
              update={update}
              insert={insert}
              setValue={setValue}
              append={append}
              fields={fields}
              getValues={getValues}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

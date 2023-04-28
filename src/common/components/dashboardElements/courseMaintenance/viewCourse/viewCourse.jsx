import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function viewCourse() {
  const router = useRouter()
  const { idCurso } = router.query
  useEffect(() => {
    const getCourseById = async () => {
      const response = await axios.post('http://localhost:3003/course/getCourseById', {
        nuevamntToken: Cookies.get('nuevamenteToken'),
        id_curso: 91,
      })
      console.log(response)
    }
    getCourseById()
  }, [])

  /*recuperar el id, llamar el detalle del curso y  */
  return <div>viendo curso</div>
}

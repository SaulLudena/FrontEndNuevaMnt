import React from 'react'
import { reusableStyles } from '../../../../../styles/styles'
export default function BasicCourseInfoForm() {
  return (
    <div className="mt-10">
      <form action="" className="grid gap-10">
        <div className="grid grid-cols-1 gap-10 2xl:grid-cols-3 lg:grid-cols-3">
          <div className="grid gap-2 ">
            <h1>Nombre del curso</h1>
            <input type="text" className={reusableStyles.inputForm} required={true} />
          </div>
          <div className="grid gap-2 ">
            <h1>Selecciona la categoria adecuada</h1>
            <select name="" id="" className={reusableStyles.inputForm}>
              <option value="">Negocios</option>
              <option value="">Tecnología</option>
              <option value="">Creatividad</option>
            </select>
          </div>
          <div className="grid gap-2 ">
            <h1>Selecciona la modalidad del curso</h1>
            <select name="" id="" className={reusableStyles.inputForm}>
              <option value="">Pago unico</option>
              <option value="">Pago por suscripcion</option>
            </select>
          </div>
          <div className="grid gap-2 ">
            <h1>Descripcion del curso</h1>
            <textarea className={reusableStyles.inputForm} />
          </div>
          <div className="grid gap-2 ">
            <h1>Objetivo del curso</h1>
            <textarea className={reusableStyles.inputForm} />
          </div>
          <div className="grid gap-2 ">
            <h1>Metodología del curso</h1>
            <textarea className={reusableStyles.inputForm} />
          </div>
          <div className="grid gap-2 ">
            <h1>Precio del curso</h1>
            <select name="" id="" className={reusableStyles.inputForm}>
              <option value="">s/.1000</option>
              <option value="">s/.2500</option>
              <option value="">s/.3000</option>
            </select>
          </div>
          <div className="grid gap-2 ">
            <h1>Seleccione imagen principal del curso</h1>
            <input type="file" className={reusableStyles.inputForm} />
          </div>
          <div className="grid gap-2 ">
            <h1>Seleccione imagen secundaria del curso</h1>
            <input type="file" className={reusableStyles.inputForm} />
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <button className="px-10 py-4 bg-yellow-400 rounded-lg ">Registrar curso</button>
          </div>
        </div>
      </form>
    </div>
  )
}

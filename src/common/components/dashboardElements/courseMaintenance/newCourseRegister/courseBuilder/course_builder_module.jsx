import { BsFillPlusCircleFill } from 'react-icons/bs'
import Course_module_item from './course_module_item'
import { useForm, useFieldArray } from 'react-hook-form'
export default function Course_builder_module({ register, fields, append, remove }) {
  /*
  el algoritmo funcionaria de la siguiente manera:
      1-Un boton que agrega un componente que contiene un formulario y que tiene otro boton dentro
      2-Dentro de ese componente tener un boton que contiene un formulario y agrege otro componente (item_leccion) a la lista
  */

  return (
    <div className="bg-white p-5 flex flex-col gap-5 ">
      <div className="grid gap-3">
        {fields.map((item, index) => {
          return (
            <Course_module_item key={item.id} register={register} item={item} index={index} removeModule={remove} />
          )
        })}
      </div>
      <div>
        <div
          className="cursor-pointer flex w-56 items-center gap-3 px-5 py-3 bg-yellow-400 rounded-lg outline-none"
          onClick={() => {
            append({ moduleName: '', lesson: [{ lessonName: '' }] })
          }}
        >
          <BsFillPlusCircleFill />
          Agregar nuevo modulo
        </div>
      </div>
    </div>
  )
}

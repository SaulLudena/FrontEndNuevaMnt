import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { reusableStyles } from '../../../../../styles/styles'
import { VscSymbolStructure } from 'react-icons/vsc'
import { BsChevronUp } from 'react-icons/bs'
import Edit_course_builder_module from './editCourseBuilder/edit_course_builder_module'
export default function Edit_course_builder({
  courseDetail,
  reset,
  remove,
  update,
  insert,
  setValue,
  getValues,
  register,
  append,
  fields,
}) {
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className={reusableStyles.disclosureItem}>
            <div className="flex items-center gap-3">
              <VscSymbolStructure />
              <span>Maquetador de cursos</span>
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
              <Edit_course_builder_module
                courseDetailForModules={courseDetail}
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
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

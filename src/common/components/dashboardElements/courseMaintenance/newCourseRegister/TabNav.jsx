import { Tab } from '@headlessui/react'
import React from 'react'
import { Fragment } from 'react'
import AddBasicCourseInfoForm from '../newCourseRegister/addBasicCourseInfoForm'
import AddModules from '../newCourseRegister/addModules'
export default function TabNav() {
  return (
    <div>
      <Tab.Group>
        <Tab.List>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`outline-none rounded-tl-lg rounded-bl-lg p-3 ${
                  selected ? 'bg-amber-400 text-white' : 'bg-white text-black'
                }`}
              >
                Informacion basica
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button className={`outline-none g p-3 ${selected ? 'bg-amber-400 text-white' : 'bg-white text-black'}`}>
                Modulos
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button className={`outline-none  p-3 ${selected ? 'bg-amber-400 text-white' : 'bg-white text-black'}`}>
                Lecciones
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button className={`outline-none  p-3 ${selected ? 'bg-amber-400 text-white' : 'bg-white text-black'}`}>
                Recursos
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`outline-none rounded-tr-lg rounded-br-lg p-3 ${
                  selected ? 'bg-amber-400 text-white' : 'bg-white text-black'
                }`}
              >
                Pruebas
              </button>
            )}
          </Tab>
          {/* ...  */}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <AddBasicCourseInfoForm />
          </Tab.Panel>
          <Tab.Panel>
            <AddModules />
          </Tab.Panel>
          <Tab.Panel>Formulario de lecciones</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          {/* ... */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

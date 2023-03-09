import { Tab } from '@headlessui/react'
import React, { Fragment } from 'react'
import TopNav from '../../topnav/topNav'
import BasicCourseForm from './basicCourseForm'
export default function courseMaintenanceCreate() {
  return (
    <div className="flex flex-1 w-full pt-5 pb-5 pr-5 overflow-hidden">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-10 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className="grid w-full gap-2 text-3xl font-bold">
          <h1>Crea un nuevo curso</h1>
        </div>
        <div className="">
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={`outline-none rounded-lg p-3 ${
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
                  <button
                    className={`outline-none g p-3 ${selected ? 'bg-amber-400 text-white' : 'bg-white text-black'}`}
                  >
                    Modulos
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={`outline-none  p-3 ${selected ? 'bg-amber-400 text-white' : 'bg-white text-black'}`}
                  >
                    Lecciones
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={`outline-none  p-3 ${selected ? 'bg-amber-400 text-white' : 'bg-white text-black'}`}
                  >
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
                <BasicCourseForm />
              </Tab.Panel>
              <Tab.Panel>Formulario de modulos</Tab.Panel>
              <Tab.Panel>Formulario de lecciones</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
              {/* ... */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

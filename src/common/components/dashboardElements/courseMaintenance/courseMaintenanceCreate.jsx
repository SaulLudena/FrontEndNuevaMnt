import { Tab } from '@headlessui/react'
import React from 'react'
import TopNav from '../../topnav/topNav'
export default function courseMaintenanceCreate() {
  return (
    <div className="flex flex-1 w-full pt-5 pb-5 pr-5 overflow-hidden">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-10 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className="text-3xl font-bold  w-full grid gap-2">
          <h1>Crea un nuevo curso</h1>
        </div>
        <div className="">
          <Tab.Group>
            <Tab.List>
              <Tab className="border-2 border-black p-5 rounded-tl-xl rounded-bl-xl">Informacion basica</Tab>
              <Tab className="border-2 border-black p-5">Modulos</Tab>
              <Tab className="border-2 border-black p-5">Lecciones</Tab>
              <Tab className="border-2 border-black p-5 rounded-tr-xl rounded-br-xl">Recursos</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>fomulario de registro</Tab.Panel>
              <Tab.Panel>formulario de modulos</Tab.Panel>
              <Tab.Panel>formulario de lecciones</Tab.Panel>
              <Tab.Panel>formulario de recursos</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

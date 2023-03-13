import { Tab } from '@headlessui/react'
import React, { Fragment } from 'react'
import TopNav from '../../topnav/topNav'
import TabNav from '../courseMaintenance/newCourseRegister/TabNav'
export default function courseMaintenanceCreate() {
  return (
    <div className="flex flex-1 w-full pt-5 pb-5 pr-5 overflow-hidden">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-10 overflow-y-scroll scroller w-full ">
        <TopNav />
        <div className="grid w-full gap-2 text-3xl font-bold">
          <h1>Crea un nuevo curso</h1>
        </div>
        <div className="">
          <TabNav />
        </div>
      </div>
    </div>
  )
}

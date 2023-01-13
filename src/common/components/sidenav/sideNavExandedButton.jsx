import React from 'react'

export default function sideNavExandedButton({ toggleBarFunction, icon, isOpen, label }) {
  return (
    <button onClick={toggleBarFunction} className="group animation transition-all">
      <div className="group-hover:text-gray-800 group-hover:bg-[#FFF409] flex justify-between  px-12 py-5 rounded-xl text-gray-400 transition ease-in-out">
        <div className="flex items-center gap-5 w-full">
          {icon}
          {isOpen ? <p className="text-sm">{label}</p> : ''}
        </div>
      </div>
    </button>
  )
}

import Link from 'next/link'
import { useState } from 'react'

export default function SidenavItem({ route, label, icon, isOpen }) {
  const [isActive, setActive] = useState(false)
  const toggleItem = () => {
    setActive(true)
  }
  return (
    <Link href={route} className=" group" onClick={toggleItem}>
      <div
        className={`group-hover:text-gray-800 ${
          isActive ? `bg-[#FFF409]` : 'group-hover:bg-[#FFF409]'
        }  flex justify-between py-3 rounded-xl text-gray-400 ${isOpen ? 'px-12' : 'px-3 py-3 text-8xl'}`}
      >
        <div className={`flex ${isOpen ? 'flex gap-5' : 'gap-1  flex-col'} items-center  h-full w-full duration-300`}>
          {icon}
          <p className="text-sm break-normal duration-300">{label}</p>
        </div>
      </div>
    </Link>
  )
}

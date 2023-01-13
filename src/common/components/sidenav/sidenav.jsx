import Link from 'next/link'
import { useState } from 'react'
/*Importando iconos */
import { AiOutlineHome } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { BiBrain } from 'react-icons/bi'
/*Importando items y botton para el sidenav */
import SidenavItem from '../sidenav/sidenavItem'
import SideNavButtom from '../sidenav/sideNavExandedButton'
/*Importando el estado avisor en toda la aplicacion*/
import { showState } from './sidenavState'
export default function sidenav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`flex h-screen p-5 ${isOpen ? 'w-72' : ' w-40'} duration-500`}>
      <div className={`flex flex-col justify-between h-full    ${isOpen ? 'w-72' : ' w-40'} duration-500`}>
        {/*Logo */}
        <div className=" h-32 flex items-center justify-center">
          <p>Logo</p>
        </div>
        {/*Componentizando las opciones de navegacion*/}
        <div className="px-0 flex flex-col h-full pt-14">
          <SidenavItem
            route="/dashboard/"
            label="Principal"
            icon={<AiOutlineHome className="group-hover:text-gray-800 text-gray-700 text-xl duration-300 " />}
            isOpen={isOpen}
          />
          <SidenavItem
            route="/miAprendizaje/"
            label="Mi&nbsp;aprendizaje"
            icon={<BiBrain className="group-hover:text-gray-800 text-gray-700 text-xl duration-300 " />}
            isOpen={isOpen}
          />
          <SidenavItem
            route="/masCursos/"
            label="Más&nbsp;cursos"
            icon={<BiSearch className="group-hover:text-gray-800 text-gray-700 text-xl duration-300 " />}
            isOpen={isOpen}
          />
        </div>

        <div className="px-0 flex flex-col gap-0 h-32 ">
          {/*Componentizando el boton para expandir y cerrar el sidenav */}
          <SideNavButtom
            toggleBarFunction={() => {
              setIsOpen(!isOpen)
            }}
            icon={<RiMenuUnfoldFill className="group-hover:text-gray-700 text-gray-400 text-xl" />}
            isOpen={isOpen}
            label="Contraer"
          />
        </div>
      </div>
    </div>
  )
}

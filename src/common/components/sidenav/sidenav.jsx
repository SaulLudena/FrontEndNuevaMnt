import { useEffect, useState } from 'react'
/*Importando iconos */
import { AiOutlineHome } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { BiBrain } from 'react-icons/bi'
/*Importando items y botton para el sidenav */
import SidenavItem from '../sidenav/sidenavItem'
import SideNavButtom from '../sidenav/sideNavExandedButton'
import Logo from '../reusable/logo'
import Link from 'next/link'

export default function sidenav() {
  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    // Obtener el estado del sidenav del localStorage
    const storedState = localStorage.getItem('sidenavState')
    if (storedState === 'closed') {
      setIsOpen(false)
    }
  }, [])

  const toggleSidenav = () => {
    const newState = !isOpen
    setIsOpen(newState)
    // Guardar el estado del sidenav en localStorage
    localStorage.setItem('sidenavState', newState ? 'open' : 'closed')
  }
  /*revisar esto mas rato */
  const customStyle = 'border-2 border-black fixed z-0 bg-white sm:w-full h-96 bottom-0'
  return (
    <div className={`flex h-screen duration-500 ${isOpen ? 'w-72 p-5' : ' w-40 p-3'} `}>
      <div className={`flex flex-col justify-between h-full duration-500 ${isOpen ? 'w-72' : ' w-40'} `}>
        {/*Logo */}
        <div className="flex items-center justify-center h-32 ">
          <Link href="/dashboard/">
            <Logo />
          </Link>
        </div>
        {/*Componentizando las opciones de navegacion*/}
        <div className="flex flex-col h-full px-0 pt-14">
          <SidenavItem
            route="/dashboard/"
            label="Principal"
            icon={
              <AiOutlineHome
                className="text-xl text-gray-700 duration-300 group-hover:text-gray-800"
                size={isOpen ? 25 : 35}
              />
            }
            isOpen={isOpen}
          />
          <SidenavItem
            route="/miAprendizaje/"
            label="Mi&nbsp;aprendizaje"
            icon={
              <BiBrain
                className="text-xl text-gray-700 duration-300 group-hover:text-gray-800 "
                size={isOpen ? 25 : 35}
              />
            }
            isOpen={isOpen}
          />
          <SidenavItem
            route="/masCursos/"
            label="Más&nbsp;cursos"
            icon={
              <BiSearch
                className="text-xl text-gray-700 duration-300 group-hover:text-gray-800 "
                size={isOpen ? 25 : 35}
              />
            }
            isOpen={isOpen}
          />
        </div>

        <div className="flex flex-col h-32 gap-0 px-0 ">
          {/*Componentizando el boton para expandir y cerrar el sidenav */}
          <SideNavButtom
            toggleBarFunction={toggleSidenav}
            icon={
              <RiMenuUnfoldFill className="text-xl text-gray-400 group-hover:text-gray-700" size={isOpen ? 25 : 35} />
            }
            isOpen={isOpen}
            label="Contraer"
          />
        </div>
      </div>
    </div>
  )
}

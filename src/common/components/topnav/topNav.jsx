import { RiShutDownLine, RiLightbulbLine } from 'react-icons/ri'
import { FiBell } from 'react-icons/fi'
import UserInfo from '../userInfo/userInfo'
import cleanSessionStorage from '../../hooks/auth/sessionStorage/cleanSessionStorage'
export default function topNav() {
  return (
    <div className="flex items-center justify-between ">
      <div>
        <UserInfo />
      </div>
      <div className="flex gap-3">
        <button onClick={cleanSessionStorage} className="group transition-500 flex ">
          <div className="group-hover:text-gray-700 flex justify-between  p-3 text-xl rounded-3xl text-gray-400">
            <FiBell className="group-hover:text-gray-700 text-gray-700" />
          </div>
        </button>
        <button onClick={cleanSessionStorage} className="group transition-500 flex">
          <div className="group-hover:text-gray-700 flex justify-between  p-3 text-xl rounded-3xl text-gray-400">
            <RiLightbulbLine className="group-hover:text-gray-700 text-gray-700" />
          </div>
        </button>
        <button onClick={cleanSessionStorage} className="group transition-500 flex">
          <div className="group-hover:text-gray-700 flex justify-between  p-3 text-xl rounded-3xl text-gray-400">
            <RiShutDownLine className="group-hover:text-gray-700 text-gray-700" />
          </div>
        </button>
      </div>
    </div>
  )
}

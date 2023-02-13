import { RiShutDownLine, RiLightbulbLine } from 'react-icons/ri'
import { FiBell } from 'react-icons/fi'
import UserInfo from '../userInfo/userInfo'
import cookies from 'js-cookie'
const logout = () => {
  cookies.remove('nuevamenteToken')
  if (process.browser) {
    window.location.reload()
  }
}
export default function topNav() {
  return (
    <div className="flex items-center justify-between ">
      <div>
        <UserInfo />
      </div>
      <div className="flex gap-2 items-center">
        <button className="group transition-500 flex ">
          <div className="group-hover:text-white flex justify-between text-xl rounded-3xl text-gray-400">
            <div className="group-hover:bg-gray-200 p-4 rounded-full">
              <FiBell className=" text-gray-700" />
            </div>
          </div>
        </button>
        <button className="group transition-500 flex">
          <div className="group-hover:text-gray-700 flex justify-between text-xl rounded-3xl text-gray-400">
            <div className="group-hover:bg-gray-200 p-4 rounded-full">
              <RiLightbulbLine className=" text-gray-700" />
            </div>
          </div>
        </button>

        <button
          onClick={() => {
            logout()
          }}
          className="group transition-500 flex"
        >
          <div className="group-hover:text-gray-700 flex justify-between text-xl rounded-3xl text-gray-400">
            <div className="group-hover:bg-gray-200 p-4 rounded-full">
              <RiShutDownLine className=" text-gray-700" />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import FormProfile from '../myprofile/formProfile'
export default function TabnavSettings() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={`
              ${selected ? ' text-amber-400 border-b-4 border-amber-400 bg-white' : 'bg-white text-black'}  
              animation duration-200 px-10 py-3  border-b-4 border-white rounded-tl-lg rounded-bl-lg outline-none`}
            >
              Mi perfil
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={`
              ${selected ? ' text-amber-400 border-b-4 border-amber-400 bg-white' : 'bg-white text-black'}  
              animation duration-200 px-10 py-3  border-b-4 border-white outline-none`}
            >
              Contraseña
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={`
              ${selected ? ' text-amber-400 border-b-4 border-amber-400 bg-white' : 'bg-white text-black'}  
              animation duration-200 px-10 py-3  border-b-4 border-white rounded-tr-lg rounded-br-lg outline-none`}
            >
              Perfiles sociales
            </button>
          )}
        </Tab>
        {/* ...  */}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <FormProfile />
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  )
}

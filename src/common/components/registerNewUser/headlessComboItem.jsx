import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { AiOutlineCheck } from 'react-icons/ai'
import { HiSelector } from 'react-icons/hi'

const months = [
  { name: 'Enero' },
  { name: 'Febrero' },
  { name: 'Marzo' },
  { name: 'Abril' },
  { name: 'Mayo' },
  { name: 'Junio' },
  { name: 'Julio' },
  { name: 'Agosto' },
  { name: 'Septiembre' },
  { name: 'Octubre' },
  { name: 'Noviembre' },
  { name: 'Diciembre' },
]
export default function HeadlessComboItem({ style }) {
  const [selected, setSelected] = useState(months[0])
  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className={`{${style} }`}>
            <span className="block truncate text-left ">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-left">
              <HiSelector className="h-5 w-5 text-gray-400  " aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {months.map((month, monthIdx) => (
                <Listbox.Option
                  key={monthIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-[#fff3096e] text-gray-900' : 'text-gray-900'
                    }`
                  }
                  disabled={month[0]}
                  value={month}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{month.name}</span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <AiOutlineCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

import { Transition } from '@headlessui/react'
import React from 'react'

export default function Transitions() {
  return (
    <Transition
      enter="transition duration-400 ease-in-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-40 ease-in-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    ></Transition>
  )
}

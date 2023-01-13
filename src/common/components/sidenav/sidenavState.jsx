import { useState } from 'react'

export default function toggleState() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }
}

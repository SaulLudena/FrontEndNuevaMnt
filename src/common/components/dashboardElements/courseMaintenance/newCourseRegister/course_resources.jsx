import { Disclosure, Transition } from '@headlessui/react'
import React, { useState } from 'react'
import { BsChevronUp, BsFillTrashFill } from 'react-icons/bs'
import { AiFillFileAdd } from 'react-icons/ai'
import { GrAttachment } from 'react-icons/gr'
import { reusableStyles } from '../../../../../styles/styles'
import { set } from 'react-hook-form'

export default function Course_resources({ appendResource, removeResource }) {
  const [uploadedFiles, setUploadedFiles] = useState([])

  const handleFileEvent = (event) => {
    const newFiles = []
    for (let i = 0; i < event.target.files.length; i++) {
      newFiles.push(event.target.files[i])
    }
    setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles])
    appendResource(newFiles)
  }

  const deleteFile = (index) => {
    const newFiles = [...uploadedFiles]
    newFiles.splice(index, 1)
    removeResource(index)
    setUploadedFiles(newFiles)
  }

  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className={reusableStyles.disclosureItem}>
            <div className="flex items-center gap-3">
              <GrAttachment />
              <span>Recursos del curso</span>
            </div>
            <BsChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
          </Disclosure.Button>
          <Transition
            enter="transition duration-400 ease-in-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-40 ease-in-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-10 text-sm ">
              <div className="flex flex-col gap-5 p-5 bg-white ">
                <div className="relative grid gap-3 rounded-lg ">
                  <div className="flex items-center p-5 text-yellow-900 bg-yellow-100 border-2 border-yellow-400 rounded-lg ">
                    <AiFillFileAdd size={20} />
                    <p className="ml-3">Seleccione recursos del curso</p>
                  </div>
                  <input
                    type="file"
                    name="recursos_curso"
                    className="absolute w-full h-full border-2 border-red-600 opacity-0 cursor-pointer"
                    accept=".jpg, .jpeg, .png, .pdf, .doc, .docx, .xls, .xlsx, .txt"
                    onChange={(e) => {
                      handleFileEvent(e)
                    }}
                    multiple
                  />
                </div>
                <div className="gap-2 grid">
                  {uploadedFiles.map((file, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-3 p-5 text-black bg-gray-50 rounded-lg "
                      >
                        <div className="flex gap-2">
                          <GrAttachment size={20} />
                          <p className="ml-3">
                            {file.name.substr(0, 20)}
                            {file.name.length > 20 ? '...' : ''}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="p-3 rounded-full cursor-pointer hover:bg-gray-200"
                          onClick={() => {
                            deleteFile(index)
                          }}
                        >
                          <BsFillTrashFill />
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

import React from 'react'

export default function CloseButtonViewCourse() {
  return (
    <div className="flex justify-end">
      <button
        onClick={() => {
          setIsOpenProp(!isOpenProp)
          if (process.browser) {
            window.location.reload()
          }
        }}
        className="flex items-center gap-2  p-2"
      >
        <p>Minimizar</p>
        <AiFillCloseCircle size={35} />
      </button>
    </div>
  )
}

import TopNav from '../topnav/topNav'
import FormProfile from './formProfile'
export default function Myprofile() {
  return (
    <div className="flex flex-1 w-full pt-5 pb-5 pr-5 overflow-hidden">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-7 overflow-y-scroll scroller w-full ">
        <TopNav />
        {/*
        tamanio original: grid-cols-1 grid-cols-4
        tamanio mediano: grid-cols-3
        tamanio grande: grid-cols-4 grid-rows-4
        */}
        <div className="">
          <FormProfile />
        </div>
      </div>
    </div>
  )
}

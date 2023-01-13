import Link from 'next/link'
export default function sidenavItem({ route, label, icon, isOpen }) {
  return (
    <Link href={route} className="group">
      <div className="group-hover:text-gray-800 group-hover:bg-[#FFF409] flex justify-between  px-12 py-5 rounded-xl text-gray-400 ">
        <div className="flex items-center gap-5 h-full w-full duration-300">
          {icon}
          {isOpen ? (
            <p className="text-sm break-normal duration-300">{label}</p>
          ) : (
            <p className="text-sm break-normal hidden duration-300 ">{label}</p>
          )}
        </div>
      </div>
    </Link>
  )
}

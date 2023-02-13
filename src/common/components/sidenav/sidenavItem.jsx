import Link from 'next/link'

export default function sidenavItem({ route, label, icon, isOpen }) {
  return (
    <Link href={route} className="group">
      <div
        className={`group-hover:text-gray-800 group-hover:bg-[#FFF409] flex justify-between py-3 rounded-xl text-gray-400 ${
          isOpen ? 'px-12' : 'px-5 py-5 text-8xl'
        }`}
      >
        <div className={`flex ${isOpen ? 'flex gap-5' : 'gap-3  flex-col'} items-center  h-full w-full duration-300`}>
          {icon}
          <p className="text-sm break-normal duration-300">{label}</p>
        </div>
      </div>
    </Link>
  )
}

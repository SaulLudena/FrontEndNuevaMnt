import Cart from './cart'
import TopNav from '../topnav/topNav'
export default function ShoppingCart() {
  return (
    <div className="flex flex-1 overflow-hidden w-full pt-5 pr-5 pb-5">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-7 overflow-y-scroll scroller w-full ">
        <TopNav />

        <div className="">
          <Cart />
        </div>
      </div>
    </div>
  )
}

import Cart from './cart'
import TopNav from '../topnav/topNav'
export default function ShoppingCart() {
  return (
    <div className="flex flex-1 overflow-hidden w-full pt-5 pr-5 pb-5">
      <div className="bg-[#F7F7F7]  rounded-xl h-full p-9 flex flex-col gap-7 overflow-y-scroll scroller w-full ">
        <TopNav />

        <div className="grid gap-4">
          <div className="text-3xl font-bold  w-full grid gap-2">
            <h1>Tu carrito de compras</h1>
          </div>
          <Cart />
        </div>
      </div>
    </div>
  )
}

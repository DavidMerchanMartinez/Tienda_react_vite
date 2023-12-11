import { IoCalendarNumberOutline } from "react-icons/io5";
import { PiToteSimpleDuotone } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs"
import { FaChevronRight } from "react-icons/fa6";


const OrdersCard = props => {
  const { date,totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light flex items-center'><IoCalendarNumberOutline className='mr-2 text-cyan-600'/>{date}</span>
          <span className='font-light flex items-center'><PiToteSimpleDuotone  className='mr-2 text-cyan-600'/>{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl flex items-center'><BsCashCoin  className='mr-2 text-cyan-600'/>{totalPrice}</span>
          <FaChevronRight className='h-6 w-6 text-black cursor-pointer' />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard
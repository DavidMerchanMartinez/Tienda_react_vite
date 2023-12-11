import { RiDeleteBackLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs"


const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <RiDeleteBackLine onClick={() => handleDelete(id)} className='h-6 w-6 text-cyan-600 cursor-pointer mr-2'></RiDeleteBackLine>
  }

  return (
    <div className="flex justify-between items-center mb-3 bg-cyan-50 rounded-lg">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium mr-2 flex items-center'><BsCashCoin className="mr-2"/>{price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard
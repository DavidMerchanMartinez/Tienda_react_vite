import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { BsCashCoin } from "react-icons/bs"

import './styles.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl text-cyan-600'>Detail</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeProductDetail()}></XMarkIcon>
        </div>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.images}
          alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <img className='h-[15rem] w-[15rem] self-center' src={`${context.productToShow.image}`} alt="imagen" />
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
        <span className='font-medium text-2xl mb-2 flex items-center mt-4 self-end '><BsCashCoin className='text-cyan-600 mr-2'/>{context.productToShow.price}</span>
      </p>
    </aside>
  )
}

export default ProductDetail
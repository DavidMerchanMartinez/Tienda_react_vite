import { useContext } from 'react'
import { IoCart } from "react-icons/io5";
import { ShoppingCartContext } from '../../Context'
import { CiBookmarkCheck } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";

const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          <CiBookmarkCheck className='h-6 w-6 text-cyan-600'></CiBookmarkCheck>
        </div>
      )
    } else {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => {
            addProductsToCart(event, data.data)
            context.closeProductDetail()
            }}>
          <IoCart className='h-6 w-6 text-black'></IoCart>
        </div>
      )
    }
  }

  return (
    <div
      className=' bg-slate-100 cursor-pointer w-56 h-60 rounded-lg hover:scale-110'
      onClick={() => showProduct(data.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-medium flex items-center'><BsCashCoin className='mr-2  text-cyan-600'/>{data.data.price}</span>
      </p>
    </div>
  )
}

export default Card
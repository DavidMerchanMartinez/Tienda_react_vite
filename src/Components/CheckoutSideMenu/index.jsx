import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'
import { BsCashCoin } from "react-icons/bs"


const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    console.log('Productos en el carrito:', context.cartProducts);
    const date = new Date().toISOString().split('T')[0]
    const orderToAdd = {
      date:date ,
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
   
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }

  const priceNull = () => {  
    if(totalPrice(context.cartProducts) != 0){
      context.closeCheckoutSideMenu()
      handleCheckout()  
    }
      
  }

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white w-[21%] celular:w-full`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl text-cyan-600'>My Order</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          context.cartProducts.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image} 
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className=' font-semibold'>Total:</span>
          <span className='font-medium text-2xl flex items-center'><BsCashCoin className='mr-2 text-cyan-600'/>{totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='bg-cyan-600 py-3 text-white w-full rounded-lg' 
          onClick={() => {
            priceNull()
          }}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
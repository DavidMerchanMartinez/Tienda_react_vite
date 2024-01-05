import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { FaShopify } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";


const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4 text-cyan-600'

  const changeText = context.account ? "Sing Out" : "Sing In"


  const menuClick = () => {
      if(context.isMenuActive){
        context.setIsMenuActive(false)
        window.location.href = '/'
      }else{
        context.setIsMenuActive(true)
      } 
  }


  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white celular:px-3'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg flex items-center'>
        
        
          <NavLink to={!context.isMenuActive? "/menu" :  "" } 
                    className={`hidden celular:block `}
                    onClick={menuClick}
                   >
              <div className='mr-2'> <LuMenuSquare className='h-6 w-6' /></div>
          </NavLink>
        
          <NavLink to='/' 
          onClick={(event) => {
            if(context.disableLink){
              event.preventDefault(); 
            }else{
            context.setIsMenuActive(false)
            context.setSearchByCategory()
            }
          }
          }
          disabled = {context.disableLink}>
            <div className='flex items-center'><FaShopify className=' text-cyan-600'/>Shopi</div>
          </NavLink>
          
        </li>

        <li>
          <NavLink
            to='/'
            onClick={(event) =>{
              if(localStorage.getItem('sing-out') == 'true'){ 
                event.preventDefault(); 
              }else{
              context.setSearchByCategory()
              context.setIsMenuActive(false)
              }
            }
          }
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/clothes'
            onClick={(event) => {
              if(localStorage.getItem('sing-out') == 'true'){ 
                event.preventDefault(); 
              }else{
                context.setSearchByCategory("clothing")
                context.setIsMenuActive(false)
              }
              }
            }

             className={({ isActive }) =>
               isActive ? activeStyle : undefined
             }>
            Clothes
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/electronics'
            onClick={(event) => {
              if(localStorage.getItem('sing-out') == 'true'){ 
                event.preventDefault(); 
              }else{
              context.setSearchByCategory('electronics')
              context.setIsMenuActive(false)
              }
            }
            }
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/jewelery'
            onClick={(event) => {
              if(localStorage.getItem('sing-out') == 'true'){ 
                event.preventDefault(); 
              }else{
              context.setSearchByCategory("jewelery")
              context.setIsMenuActive(false)
              }
            } 
            }
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Jewelery
          </NavLink>
        </li>
       
      </ul>
      <ul className='flex items-center gap-3 celular:hidden'>
        <li className='text-black/60'>
         david@gmail.com
        </li>

        <li>
          <NavLink
            to='/my-orders'
            onClick={(event) => {
              if(localStorage.getItem('sing-out') == 'true'){
                event.preventDefault(); 
              }
              }
            }
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            onClick={(event) => {   
              if(localStorage.getItem('sing-out') == 'true'){ 
                event.preventDefault()
              }
              }
            }
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li>
        <NavLink
         to='/sing-out'
          className={({ isActive }) =>
           isActive ? activeStyle : undefined
                    }
           onClick={()=>{
            localStorage.setItem('sing-out', JSON.stringify(true))
              context.closeAccount()
              context.gumUpLink()
           }}>
              
             {changeText}
      </NavLink>
        
        </li>
        <li className='flex items-center'>
          <ShoppingBagIcon className='h-6 w-6   text-cyan-600'></ShoppingBagIcon>
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
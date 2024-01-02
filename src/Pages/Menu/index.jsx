import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'


const Menu = () => {

const context = useContext(ShoppingCartContext)

    return(
        <div className="pt-[69px] flex flex-col items-center justify-center  h-screen text-white gap-16 rounded-lg bg-gradient-to-r from-black via-cyan-900 to-black">
        
        <NavLink to="/my-orders" className="flex w-[60%] h-[8%] border-2 items-center rounded-lg justify-center" onClick={()=>{context.setIsMenuActive(false)}}>
          <div className="h-auto w-auto text-center font-extralight ">
            My-Orders
          </div>
        </NavLink>
      
        <NavLink to="/my-account" className="flex w-[60%] h-[8%] border-2 items-center rounded-lg justify-center " onClick={()=>{context.setIsMenuActive(false)}}>
          <div className="h-auto w-auto text-center font-extralight">
            My-Account
          </div>
        </NavLink>
      
        <NavLink to="/sing-out" className="flex w-[60%] h-[8%] border-2 items-center rounded-lg justify-center" onClick={()=>{context.setIsMenuActive(false)}}>
          <div className="h-auto w-auto text-center font-extralight">
            Sign out
          </div>
        </NavLink>
        
      </div>
    )
}

export default Menu

import { useContext } from "react";
import { VscAccount } from "react-icons/vsc";
import { ShoppingCartContext } from "../../Context";

const Account = () => {
 
    const context = useContext(ShoppingCartContext)

return(
   
    <div className=" max-w-[25rem] ">
      
        <h1 className=" text-lg text-center text-md  font-bold text-cyan-600">My Account</h1>
        <div className="flex self-center w-100% justify-center">
        <VscAccount className="h-20 w-20 mt-5 items-center" />
        </div>

        <div className="flex items-center ">
            <h1 className="mt-5 ml-10 text-md  flex font-bold text-cyan-600 ">Name</h1>
            <h1 className="mt-5 ml-3 font-semibold text-black ">{context.userData.user}</h1> 
        </div>
       
        <div className="flex items-center ">
            <h1 className="mt-5 ml-14 text-md text-start flex font-bold text-cyan-600">Age:</h1>
            <h1 className="mt-5 ml-3 font-semibold text-black">20</h1>
       </div>

       <div className="flex items-center ">
            <h1 className="mt-5 ml-6 text-md text-start flex font-bold text-cyan-600">Country: </h1>
            <h1 className="mt-5 ml-3 font-semibold text-black">Colombia</h1> 
       </div>

       <div className="flex  ">
            <h1 className="text-justify mt-5 text-md font-bold flex text-cyan-600">Descripción: </h1>   
            <h1 className="mt-5 ml-3 font-semibold text-black">Apasionado por las compras en línea, encuentra en esta plataforma la felicidad en descubrir productos emocionantes y únicos.</h1> 
        </div>
        
        
    </div>
)
}

export default Account
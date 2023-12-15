import { VscAccount } from "react-icons/vsc";

const Account = () => {
return(
    <div className=" max-w-[25rem] ">
      
        <h1 className=" text-lg text-center text-md  font-bold text-cyan-600">My Account</h1>
        <div className="flex self-center w-100% justify-center">
        <VscAccount className="h-20 w-20 mt-5 items-center" />
        </div>
        <h1 className="mt-5 ml-10 text-md  flex font-bold text-cyan-600">Name: <h1 className="ml-3 font-semibold text-black">David</h1> </h1>
        <h1 className="mt-5 ml-14 text-md text-start flex font-bold text-cyan-600">Age:<h1 className="ml-3 font-semibold text-black">20</h1></h1>
        <h1 className="mt-5 ml-6 text-md text-start flex font-bold text-cyan-600">Country: <h1 className="ml-3 font-semibold text-black">Colombia</h1> </h1>

        <h1 className="text-justify mt-5 text-md font-bold flex text-cyan-600">Descripción: 
        <h1 className="ml-3 font-semibold text-black">Apasionado por las compras en línea, encuentra en esta plataforma la felicidad en descubrir productos emocionantes y únicos.</h1> </h1>   
       
        
    </div>
)
}

export default Account
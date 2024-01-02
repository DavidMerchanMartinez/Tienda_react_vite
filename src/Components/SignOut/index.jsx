import { FaUser } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { NavLink } from "react-router-dom";


const SignOut = () => {
    return(
        
        <div className=" w-[40%] h-full flex flex-col justify-center mt-[7rem]
                        celular:w-full ">
        <h1 className=" font-mono text-4xl text-center text-cyan-900 font-semibold mb-5">Welcome</h1>

        {/* login */}

        <div className=" flex mt-3 mb-3 items-center">
            <FaUser className="ml-5 h-5 w-5 text-cyan-900" />
            <h1 className=" text-2xl font-medium ml-2">  User:</h1>
            <span className="text-2xl font-normal ml-2">David</span>
        </div>
 
         <div className=" flex mt-3 mb-3 items-center">
            <MdLockPerson className="ml-5 h-5 w-5 text-cyan-900" />
            <h1 className=" text-2xl font-medium ml-2">Password:</h1>
            <span className="text-2xl font-normal ml-2 "> 123456789</span>
         </div>

         <div className=" flex flex-col mt-8 items-center">
            <button className=" text-2xl h-12 w-[45%] text-white rounded-lg  bg-gradient-to-r from-black via-cyan-900 to-black  duration-200 hover:scale-110"> log in</button>
            <a href="" className=" text-base border-b-[1px] border-black my-3">ForgotPassword</a>
         </div>
 
        {/* sign in */}

         <div className="flex justify-center mt-8">
            <NavLink to="/sing-in" className=" flex justify-center items-center text-2xl h-12 w-[45%] text-black rounded-lg border-black border-[1px] duration-200 text-center
                                              hover:bg-gradient-to-r from-black via-cyan-900 to-black hover:text-white hover:scale-110">

                        <button  className="justify-center items-center"> Sing in</button>
            </NavLink>  
         </div>
        
      
        
 
     </div>
    )
}

export default SignOut
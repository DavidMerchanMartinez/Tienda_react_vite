import { FaUserTie } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";


const SignIn = () => {
 return(
    <div className=" w-[30rem] h-[35rem] mt-7 flex flex-col justify-center celular:w-full">
       <h1 className=" text-3xl text-center text-cyan-900 font-semibold">Sing in</h1>

        <div className=" flex flex-col mt-3 ">
            
            <label htmlFor="" className=" text-lg font-medium  flex items-center"><FaUserTie className="h-5 w-5 mr-2"/> User:</label>
            <input type="text" className="w-[90%] ml-5 mt-3 rounded-lg border-black border-2 border-solid h-8 cursor-pointer text-cyan-900 text-lg pl-3 font-medium " />
        </div>

        <div className=" flex flex-col mt-3">
        
        <label htmlFor="" className=" text-lg font-medium  flex items-center"> <HiOutlineMail className="h-5 w-5 mr-2 "/> Email:</label>
        <input type="text" className="w-[90%] ml-5 mt-3 rounded-lg border-black border-2 border-solid h-8  cursor-pointer text-cyan-900 text-lg pl-3 font-medium" />
        </div>

        <div className=" flex flex-col mt-3">
        <label htmlFor="" className=" text-lg font-medium flex items-center"> <CiLock className="h-5 w-5 mr-2 "/> Password:</label>
        <input type="text" className="w-[90%] ml-5 mt-3 rounded-lg border-black border-2 border-solid h-8  cursor-pointer text-cyan-900 text-lg pl-3 font-medium" />
        </div>

        <div className=" flex mt-8 justify-center ">
            <button className=" text-2xl h-12 w-[45%] text-white rounded-lg  bg-gradient-to-r from-black via-cyan-900 to-black  duration-200 hover:scale-110">Sign In</button>
           
         </div>
       

    </div>
 )   
}

export default SignIn
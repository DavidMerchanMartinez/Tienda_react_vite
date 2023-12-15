
const SingIn = () => {
 return(
    <div className=" w-[30rem] h-[35rem] mt-7 flex flex-col justify-center">
       <h1 className=" text-3xl text-center text-cyan-700 font-semibold">Sing in</h1>

        <div className=" flex flex-col mt-3">
        <label htmlFor="" className=" text-lg font-medium ml-5">User:</label>
        <input type="text" className="w-[27rem] ml-5 mt-3 rounded-lg border-black border-2 border-solid h-8 cursor-pointer text-cyan-800 text-lg pl-3 font-medium " />
        </div>

        <div className=" flex flex-col mt-3">
        <label htmlFor="" className=" text-lg font-medium ml-5">Password:</label>
        <input type="text" className="w-[27rem] ml-5 mt-3 rounded-lg border-black border-2 border-solid h-8  cursor-pointer text-cyan-800 text-lg pl-3 font-medium" />
        </div>

        <div className=" flex justify-center mt-8">
        <button className=" bg-cyan-700 h-10 w-44 text-white rounded-lg "> Sing in</button>
        </div>
       

    </div>
 )   
}

export default SingIn
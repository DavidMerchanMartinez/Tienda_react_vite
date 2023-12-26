

const Menu = () => {
    return(
        <div className="pt-[69px] flex flex-col items-center h-screen text-white gap-7 rounded-lg
          bg-gradient-to-r from-black via-cyan-900 to-black
                ">
            <div className="mt-5 border-2 h-8 w-[60%] text-center rounded-lg">My-Orders</div>
            <div className=" border-2 h-8 w-[60%] text-center rounded-lg">My-Account</div>
            <div className=" border-2 h-8 w-[60%] text-center rounded-lg">Sign In</div>
        </div> 
    )
}

export default Menu

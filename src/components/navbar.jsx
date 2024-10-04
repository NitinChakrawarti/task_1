import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
    return (
        <>
            <div className="shadow-[0px_4px_5px_rgba(0,0,0,0.25)] z-10 h-[88px] w-full flex justify-between items-center  px-[24px] ">
                <div className="logo font-extrabold text-[41px] font-primary">Grabky</div>
           
                <div className="text-[19px] font-medium">
                    <ul className="flex items-center justify-evenly text-primary">
                        <li className=" pl-8  flex items-center">Services <MdKeyboardArrowDown /> </li>
                        <li className=" pl-8 ">Partner</li>
                        <li className=" pl-8 "> <button className="bg-primary text-secondary h-[45px] w-[131px] font-semibold  rounded-full">Sign in</button> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;

import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoMicrosoft, IoLogoSlack } from "react-icons/io5";

 function SideBar() {
    return (
        <div className='w-[90px] boarder-r-[1px]
        h-screen fixed flex flex-col justify-around items-center'
        >
            <h2 className='-rotate-90 tracking-widest'>HOMEPAGE</h2>
            <div className='flex flex-col gap-7 mb-10 text-[20px]'>
                <IoLogoGithub className='curser-pointer hover:scale-110 transition-all ease-in-out'/>
                <IoLogoLinkedin className='curser-pointer hover:scale-110 transition-all ease-in-out' />
                <IoLogoMicrosoft className='curser-pointer hover:scale-110 transition-all ease-in-out' />
                <IoLogoSlack className='curser-pointer hover:scale-110 transition-all ease-in-out' />


            </div>

        </div>
    )
}

export default SideBar

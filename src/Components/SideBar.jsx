// import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoMicrosoft, IoLogoSlack } from "react-icons/io5";

 function SideBar() {
    return (
        <div className='w-[90px] boarder-r-[1px] h-screen fixed flex flex-col justify-around items-center'>
            <h2 className='-rotate-90 tracking-widest'>HOMEPAGE</h2>
            <div className='flex flex-col gap-7 mb-10 text-[20px]'>
                <a href='https://github.com/L-Lainio' target='_blank' rel='noopener noreferrer'>
                    <IoLogoGithub className='cursor-pointer hover:scale-110 transition-all ease-in-out' />
                </a>
                <a href='https://www.linkedin.com/in/lora-lainio-1a3a55255/' target='_blank' rel='noopener noreferrer'>
                    <IoLogoLinkedin className='cursor-pointer hover:scale-110 transition-all ease-in-out' />
                </a>
                <a href='mailto:loralainio@outlook.com' target='_blank' rel='noopener noreferrer'>
                    <IoLogoMicrosoft className='cursor-pointer hover:scale-110 transition-all ease-in-out' />
                </a>
                <a href='https://ucfvirtfsfft0-cuh3274.slack.com/team/U06QZ845QTS' target='_blank' rel='noopener noreferrer'>
                    <IoLogoSlack className='cursor-pointer hover:scale-110 transition-all ease-in-out' />
                </a>
            </div>
        </div>
    )
}

export default SideBar

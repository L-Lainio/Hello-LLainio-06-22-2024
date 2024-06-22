import React from 'react'
import Strings from './Shared/Strings'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

function About() {
    return (
        <div className='mt-12 px-44 text-center flex flex-col item-center'>

                <h2 className='text-[40px] font-bold'>{Strings.ABOUT_HEADING}</h2>
                    <FaQuoteLeft className='bg-dark-purple-500 p-3 text-[44px] rounded-full mt-6 text-white'/>
                    <FaQuoteRight className='bg-dark-purple-500 p-3 text-[44px] rounded-full mt-6 text-white'/>

        </div>
    )
}

export default About

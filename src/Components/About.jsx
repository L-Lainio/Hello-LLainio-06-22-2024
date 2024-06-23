import Strings from './Shared/Strings';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

function About() {
    return (
        <div className='mt-9 px-25 text-center flex flex-col items-center'>
            <h2 className='text-[3rem] font-bold'>{Strings.ABOUT_HEADING}</h2>
            <FaQuoteLeft className='bg-purple-500 p-3 text-[44px] rounded-full mt-6 text-white'/>
            <h2 className='my-5 text-gray-400 text-[14px]'>{Strings.ABOUT_DESC}</h2>
            <FaQuoteRight className='bg-purple-500 p-3 text-[44px] rounded-full mt-6 text-white'/>
        </div>
    );
}

export default About

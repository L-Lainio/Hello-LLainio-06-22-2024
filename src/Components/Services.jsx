import React from 'react'
import Strings from './Shared/Strings'
import {Icon} from 'react-icons/io5'



function Services() {
    const servicesList = [
        {
            id: 1,
            title: Strings.FRONTED,
            desc: Strings.FRONTED_DESC,
            logo: '/logo.png',
        },
        {
            id: 2,
            title: Strings.BACKEND,
            desc: Strings.BACKEND_DESC,
            logo: '/backend.png',
        }
    ];

    return (
        <div className='px-12 mt-12'>
            <div className='flex item-center'>
                <div className='w-[20px] h-[7px] bg-lavender-600 rounded-full'></div>
                <div className='w-full boarder-[1px] mx-4 mt-[-2px]'></div>
                <h2 className='text-[24px] font-bold'>{Strings.SERVICES}</h2>
                <div className='w-full boarder-[1px] mx-4 mt-[-2px]'></div>
                <div className='w-[20px] h-[7px] bg-lavender-600 rounded-full'></div>
            </div>

            <div className='flex justify-around mt-16'>
                {servicesList.map((item) => (
                    <div key={item.id} className='text-center flex flex-col justify-center item-center gap-6'>
                        <div className='bg-gray-200 rounded-full w-[50px] h-[50px]'>
                            <img src={item.logo} className='w-[50px] h-[50px]
                            P-5 hover:scale-125 transition-all cursor-pointer'/>
                        </div>
                        <h2 className='mt-5 font-bold'>{item.title}</h2>
                        <h2 className='text-gray-400'>{item.desc}</h2>
                        <Icon className='bg-misty-gray-500 text-[35px]
                        p-2 text-white rounded-full cursor-pointer hover:scale-125
                        transition-all'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;

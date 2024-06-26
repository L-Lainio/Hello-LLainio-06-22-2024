// import React from 'react';
import Strings from './Shared/Strings';
import { IoStarSharp, IoConstruct } from "react-icons/io5";

function Services() {
    const servicesList = [
        {
            id: 1,
            title: Strings.FRONTED,
            desc: Strings.FRONTED_DESC,
            logo: <IoStarSharp />,
        },
        {
            id: 2,
            title: Strings.BACKEND,
            desc: Strings.BACKEND_DESC,
            logo: <IoConstruct />,
        },
        // {
        //     id: 3,
        //     logo: <IoGitNetworkSharp />,
        // }
    ];

    return (
        <div className='px-12 mt-12 bg-image'
        style={{
            padding: '10px',
            margin: '1.5px'
        }}
        >
            <div className='flex items-center'>
                <div className="w-[20px] h-[7px] bg-red-600 rounded-full"></div>
                <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
                <h2 className='text-[24px] font-bold'>{Strings.SERVICES}</h2>
                <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
                <div className="w-[20px] h-[7px] bg-red-600 rounded-full"></div>
            </div>
            <div className='flex justify-around mt-16'>
                {servicesList.map((service) => (
                    <div key={service.id} className='bg-lavender round w-[] h[] flex flex-col items-center'>
                        <div className='bg-lavender rounded-full w-[60px] h-[100px] flex items-center justify-center'>
                            {service.logo}
                        </div>
                        <h2 className='mt-5 font-bold text-center'>{service.title}</h2>
                        <h2 className='text-gray-400 text-center'>{service.desc}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;

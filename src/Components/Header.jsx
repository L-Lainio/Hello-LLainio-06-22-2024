/* eslint-disable react/jsx-key */
import { IoMailOutline } from 'react-icons/io5';

function Header() {
    const menu = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ];

    return (
        <div className='flex items-center w-full justify-between bg-clear p-5'>
            <div className='w-[75px] h-[75px] bg-red'>
                <img src='/public/vite.svg' className='p-7' />
            </div>
            <div className='hidden md:flex gap-14'>
                {menu.map((item, index) => (
                    <div key={index} className='cursor-pointer hover:underline-offset-4 font-medium'>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
            <div className='w-[75px] h-[75px] flex justify-center items-center'>
                <IoMailOutline />
            </div>
        </div>
    )
}
export default Header

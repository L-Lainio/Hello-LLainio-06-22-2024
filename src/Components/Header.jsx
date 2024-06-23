// import { IoMailOutline } from 'react-icons/io5';

const Header = () => {
    const menu = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
    ];

    return (
        <header className='flex items-center w-full justify-between bg-clear p-5'>
            <div className='w-[75px] h-[75px] bg-red'>
                <img src='/public/vite.svg' className='p-7' alt='Logo' />
            </div>
            <div className='hidden md:flex gap-14'>
                {menu.map((item, index) => (
                    <div key={index} className='cursor-pointer hover:underline-offset-4 font-medium'>
                        <a href={item.link}>
                            <h2>{item.name}</h2>
                        </a>
                    </div>
                ))}
                {/* Rest of your component */}
            </div>
        </header>
    );
};

export default Header;

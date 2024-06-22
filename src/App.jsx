// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import ProfilePic from './Components/ProfilePic'

function App() {

  return (
    <>
      <Header />
      <SideBar />
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='md:col-span-2'>
          <div className='flex flex-row space-x-4'>
            <div className='w-1/3 md:order-1'>
              User Data
            </div>
            <div className='w-1/3 hidden md:block'>
              <ProfilePic />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

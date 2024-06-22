// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import ProfilePic from './Components/ProfilePic'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Services from './Components/Services'

function App() {

  return (
    <div className='w-screen'>
      <Header />
      <SideBar />
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='md:col-span-2 p-5 mt-[90px]'>
          <Introduction />
          <About />
          <div className='hidden md:col-span-2 p-5 mt-[45px]'>
            <ProfilePic />
            <Services />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

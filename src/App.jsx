// import React from 'react';
import Header from './Components/Header'
import SideBar from './Components/SideBar'
// import ProfilePic from './Components/ProfilePic'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Services from './Components/Services'
import ProgressBar from './Components/ProgressBar'


function App() {
  return (
    <div className="overlay-container">
      <div className="bg-fixed bg-center bg-cover">
        <Header />
      </div>
      <SideBar />
      <div style={{ backgroundImage: "url('./assets/futuristic-technology-background.jpg')" }} className="overlay-container ml-[75px] grid grid-cols-1 md:grid-cols-6">
        <div className='md:col-span-3 p-5 mt-[45px]'>

          <a href="#home">
            {/* Home content */}
            <a href="#about">
              <About />
              {/* About content */}
            </a>
            <a href="#contact">
              {/* Contact content */}
            </a>
          </a>
          <Introduction />
          <Services />
        </div>
        <div className='hidden md:col-span-3 p-5 mt-[45px]'>
          <ProgressBar />
        </div>
        <div className='md:col-span-3 p-5 mt-[75px]'>
          {/* <ProfilePic /> */}
        </div>
      </div>
    </div>
  );
}
export default App;

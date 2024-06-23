// import React from 'react';
import Header from './Components/Header'
import SideBar from './Components/SideBar'
// import Profile from './Components/Profile'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Services from './Components/Services'
// import ProgressBar from './Components/ProgressBar'
import BackgroundVideo from './Components/BackgroundVideo';
// import ContactForm from './Components/ContactForm';

const App = () => {
  return (
    <div className="overlay-container">
      <div className="bg-fixed bg-center bg-cover">
        <Header />
      </div>
      <SideBar />
      <div className="ml-[75px] grid grid-cols-3 md:grid-cols-6">
        <div className='md:col-span-6'>
          <a href="#home"> {/* Home content */} </a>
          <a href="#about"> <About /> {/* About content */} </a>
          <a href="#contact"> {/* Contact content */} </a>

          <Introduction />
          <Services />
        </div>
        <div className='md:col-span-3 p-5 mt-[45px]'>
          {/* <ProgressBar /> */}
        </div>
        <div className='md:col-span-3 p-5 mt-[75px]'>
          {/* <ContactForm /> */}
        </div>
      </div>
      <BackgroundVideo />
    </div>
  );
}

export default App;

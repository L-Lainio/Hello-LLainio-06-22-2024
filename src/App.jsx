// import React from 'react';
import Header from './Components/Header'
import SideBar from './Components/SideBar'
// import Profile from './Components/Profile'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Services from './Components/Services'
// import ProgressBar from './Components/ProgressBar'
import BackgroundVideo from './Components/BackgroundVideo';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer'

const App = () => {
  return (
    <body>
      <div className="grid-overlay-container">
        <div className="bg-fixed bg-center bg-cover">
          <Header />
          <SideBar />
          <div className="ml-[75px] grid grid-cols-12 gap-3">
            <div className='md:col-span-5'>
              <a href="#home"> {/* Home content */} </a>
              <a href="#about"> <About /> {/* About content */} </a>
              <Introduction />
              <Services />
            </div>
            <div className='md:col-span-3 p-5 mt-[45px]'>
              {/* <ProgressBar /> */}
            </div>
            <div className='md:col-span-3 p-5 mt-[75px]'>
              <a href="#contactform"> <ContactForm />{/* Contact content */} </a>
            </div>
          </div>
          <BackgroundVideo />
        </div>
      </div>
      <Footer />
    </body>

  );
}

export default App;

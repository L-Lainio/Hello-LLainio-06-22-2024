import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import ProfilePic from './Components/ProfilePic'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Services from './Components/Services'
import ProgressBar from './Components/ProgressBar'
import './App.css';

function App() {
  return (
    <div className='w-screen'>
      <Header />
      <SideBar />
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='md:col-span-2 p-5 mt-[90px]'>
          <Introduction />
          <About />
          <Services />
        </div>
        <div className='hidden md:col-span-2 p-5 mt-[45px]'>
          <ProgressBar />
          <ProfilePic />
        </div>
      </div>
    </div>
  );
}

export default App;

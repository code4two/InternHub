import viteLogo from '../assets/vite.svg'
import PageBar from '../components/pageBar';
import Theme from '../components/theme';
import profilePic from '../assets/profilePic.jpg'
import { IoNotifications } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { CgDarkMode, CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { PiStudentBold } from "react-icons/pi";
import { IoMdSchool } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const MainLayout = () => {
  return (
    <div>
      <nav className='flex flex-row justify-end sm:hidden px-4 bg-indigo-800 shadow-lg py-2 fixed-top'>
        <div className='items-center text-white text-5xl'>
          <a href="#"><GiHamburgerMenu /></a>
        </div>
      </nav>
      <div className="grid grid-cols-12">
      <div className="col-span-3 xl:col-span-2 bg-indigo-800 text-white text-xl hidden md:block">
        <div className="flex flex-row mb-5 px-5 font-bold mt-6 p-2">
            <div className='flex flex-row gap-2 items-center'>
                <img src={viteLogo} alt="DevsumLogo"/>
                <h2 className='text-xl'>DEVSUM</h2>
            </div>
        </div>
        <div className='px-5 pt-2 pb-54'>
            <PageBar title="Dashboard" Icon2={RxDashboard}/>
            <PageBar title="Candidate" Icon2={PiStudentBold} />
            <PageBar title="Internship" Icon2={IoMdSchool}/>
            <PageBar title="Profile" Icon2={CgProfile}/>
        </div>
        <div className='flex flex-row pt-54'>
            <Theme title="Light" Icon={MdLightMode} />
            <Theme title="Dark" Icon={CgDarkMode} />
        </div>
      </div>
      <div className='col-span-9 xl:col-span-10 bg-slate-600 hidden md:block'>
        <nav className='flex flex-row justify-end items-center text-xl gap-6 px-4 sm:px-8 mt-6'>
          <div className='flex flex-row justify-between items-center'>
            <a href="#"><img className='rounded-full w-15 h-15 mx-3' src={profilePic} alt="profile pic" /></a>
            <h2 className='font-bold text-white'>Mark Zukerberg</h2>
          </div>
          <div className='items-center text-white text-3xl' >
            <a href="#"><IoNotifications /></a>
          </div>
        </nav>
      </div>
    </div>      
  </div>
  );
};

export default MainLayout;
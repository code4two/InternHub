import viteLogo from '../assets/vite.svg'
import PageBar from '../components/pageBar';
import Theme from '../components/theme';
import profilePic from '../assets/profilePic.jpg'
import { IoNotifications } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { CgDarkMode, CgToggleSquare, CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { PiStudentBold } from "react-icons/pi";
import { IoMdSchool } from "react-icons/io";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-12 my-6">
      <div className="col-span-2 bg-blue-900 text-white text-xl hidden xl:block">
        <div className="flex flex-row justify-between mb-5 px-5 font-bold mt-6 p-2">
            <div className='flex flex-row gap-2 items-center'>
                <img src={viteLogo} alt="DevsumLogo"/>
                <h2 className='text-xl'>DEVSUM</h2>
            </div>
            <div className='items-center block sm:hidden'>
                X
            </div>
        </div>
        <div className='px-5 pt-2 pb-50'>
            <PageBar title="Dashboard" Icon2={RxDashboard}/>
            <PageBar title="Candidate" Icon2={PiStudentBold} />
            <PageBar title="Internship" Icon2={IoMdSchool}/>
            <PageBar title="Profile" Icon2={CgProfile}/>
        </div>
        <div className='flex flex-row pt-50'>
            <Theme title="Light" Icon={MdLightMode} />
            <Theme title="Dark" Icon={CgDarkMode} />
            <Theme title="Auto" Icon={CgToggleSquare} />
        </div>
      </div>
      <div className='col-span-10 bg-slate-600'>
        <nav className='flex flex-row justify-end items-center text-xl gap-6 px-4 sm:px-8 mt-6'>
          <div className='flex flex-row justify-between items-center'>
            <a href="#"><img className='rounded-full w-16 h-16 mx-3' src={profilePic} alt="profile pic" /></a>
            <h2 className='font-bold text-white'>Mark Zukerberg</h2>
          </div>
          <div className='items-center text-white text-3xl' >
            <a href="#"><IoNotifications /></a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainLayout;
import Tbody from '../components/tbody';
import Thead from '../components/tbody';
import { FaPlus } from "react-icons/fa";

const Candidate = () => {
  return (
    <div className='text-white text-xl font-medium px-4 sm:px-8'>
        <div className="flex flex-row justify-between mt-6">
            <div>
                <h2 className='mb-4 text-3xl'>Candidates</h2>
                <p className='text-lg font-normal mb-6'>Manage and review internship applications</p>
                <input className='p-3 border border-gray-400 font-normal w-175 rounded-md outline-none' type="text" placeholder='Search by name or email...' />
                <h2 className='my-6 text-3xl'>All Candidates ()</h2>
            </div>
            <div className='mt-4'>
              <button className='bg-indigo-800 font-semibold text-xl rounded-lg py-3 px-8'><span className='text-white'><FaPlus /></span>Add Candidiate</button>
            </div>
        </div>
        <div className='bg-indigo-700 mb-10'>
            <table className='w-full'>
                <Thead name="Name" email="Email" type="Applied Internship" status="Status" />
                <Tbody name="John Paul" email="johnpaul@gmail.com" type="Cybersecurity" status="Rejected" />
                <Tbody name="Thomas Stone" email="thomasstone@gmail.com" type="Data Analyst" status="Pending" />
                <Tbody name="Julius Berger" email="juliusberger@gmail.com" type="Backend Developer" status="Approved" />
                <Tbody name="Daniel Hardman" email="danielhardman@gmail.com" type="Product Designer" status="Pending" />
                <Tbody name="Donal Trump" email="donaltrump@gmail.com" type="Data Engineer" status="Approved" />
                <Tbody name="Louis Litt" email="louilitt@gmail.com" type="Project Manager" status="Pending" />
                <Tbody name="Rita Dominic" email="ritadominic@gmail.com" type="Human Resource Manager" status="Approved" />
                <Tbody name="Muhammed Khan" email="muhammedkhan@gmail.com" type="Frontend Developer" status="Rejected" />
            </table>
        </div>
    </div>
  );
};

export default Candidate;
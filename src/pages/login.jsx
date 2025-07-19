import viteLogo from '../assets/vite.svg'
import FormInput from '../components/FormInput';

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='px-6 py-7 shadow-xl font-semibold rounded-2xl text-lg w-135 bg-sky-100 xl:px-8 xl:py-8 '>
            <div className="flex-items-center justify-center mb-5">
                <img className='mx-auto' src={viteLogo} alt="Vite Logo" />
            </div>
            <h2 className='text-center mb-5 text-xl font-bold md:text-2xl'>WELCOME TO DEVSUM</h2>
            <div className='text-gray-800 md:text-xl'>
                <h2 className='mb-4'>Please Enter Your Login Details</h2>
                <FormInput />
            </div>
        </div>
    </div>
  );
};

export default Login;                                                                                    
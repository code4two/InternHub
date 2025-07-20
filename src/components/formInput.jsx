import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormInput = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error states
    setEmailError(false);
    setPasswordError(false);

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let valid = true;

    if (!email.trim() || !password.trim()) {
      alert('Both email and password are required.');
      if (!email.trim()) setEmailError(true);
      if (!password.trim()) setPasswordError(true);
      valid = false;
    } else if (!emailPattern.test(email.trim())) {
      alert('Please enter a valid email address.');
      setEmailError(true);
      valid = false;
    }

    if (valid) {
      navigate('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col mb-5 relative mx-w-sm'>
            <label htmlFor="Email">Email</label>
            <input className={`border border-gray-400 outline-none mt-2 p-2 font-normal ${emailError ? 'border-red-500 border-2' : 'border-gray-300'}`} type="email" placeholder='e.g. elonmusk@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex flex-col mb-8 relative mx-w-sm'>
            <label htmlFor="Password">Password</label>
            <input className={`p-2 mt-2 border border-gray-400 outline-none font-normal ${passwordError ? 'border-red-500 border-2' : 'border-gray-300'}`} type="password" placeholder='e.g. teslaferrari#25' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="text-white w-full bg-indigo-800 py-2 text-center cursor-pointer border-0">
            Log In
        </button>
    </form>
  );
};

export default FormInput;
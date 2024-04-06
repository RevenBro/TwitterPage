import React from 'react';

import LoginImg from '../../assets/Images/Login-logo.svg';

function Login({setToken}) {

  const loginFormSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      login: evt.target.login.value,
      password: evt.target.password.value
    };
    setToken(data)
    window.localStorage.setItem("token", JSON.stringify(data))
  };

  return (
    <div className='flex py-[40px] justify-center'>
      <form onSubmit={loginFormSubmit} className='flex flex-col w-[450px]'>
        <img className='mb-[30px] inline-block' src={LoginImg} width={50} height={41} alt='Twitter icon'/>
        <h2 className='font-black text-[42px] leading-[49px] mb-[30px]'>Log in to Twitter</h2>
        <label className='mb-[25px]'>
          <input className='w-full pl-[17px] py-[20px] border-[1px] border-[#00000033] rounded-[6px]' type='text' name='login' required autoComplete='off' placeholder="Phone number, email address"/>
        </label>
        <label className='mb-[25px]'>
          <input className='w-full pl-[17px] py-[20px] border-[1px] border-[#00000033] rounded-[6px]' type='text' name='password' required autoComplete='off' placeholder="Password"/>
        </label>
        <button className='rounded-[76px] bg-[#1DA1F2] py-[18px] text-[18px] font-bold leading-6 text-white hover:opacity-80 mb-[35px]'>Log In</button>
        <div className='flex justify-between'>
          <button type='button' className='text-[17px] font-normal leading-6 text-[#1DA1F2]'>Forgot password?</button>
          <button type='button' className='text-[17px] font-normal leading-6 text-[#1DA1F2]'>Sign up to Twitter</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

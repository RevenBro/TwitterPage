import React from 'react'

function FollowComp({url, title, username}) {
  return (
    <div className='flex items-center justify-between py-[17px]'>
        <div className='flex items-center space-x-3'>
            <img src={url} width={60} height={60}/>
            <div className='flex flex-col'>
                <strong className='text-[18px] font-semibold leading-6 mb-[2px]'>{title}</strong>
                <span className='opacity-60 text-[18px] font-normal leading-6'>{username}</span>
            </div>
        </div>
        <button className='bg-black hover:bg-[#fff] hover:text-black rounded-[50px] w-[92px] text-white py-[8px] text-[18px] font-bold leading-[100%]'>Follow</button>
    </div>
  )
}

export default FollowComp
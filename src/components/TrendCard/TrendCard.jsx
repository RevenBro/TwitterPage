import React from 'react'
import MoreIcon from '../../assets/Images/more.svg'

function TrendCard() {
  return (
    <div className=' flex justify-between py-[15px]'>
        <div className='flex flex-col justify-between'>
            <span className='text-[#393B41] text-[16px] font-normal leading-5 opacity-60 mb-[2px]'>Trending in Germany</span>
            <strong className='text-[20px] font-semibold leading-7 text-black mb-[3px]'>Revolution</strong>
            <span className='opacity-60 text-[#393B41] text-[16px] font-normal leading-5'>50.4K Tweets</span>
        </div>
        <img src={MoreIcon} width={24} height={24}/>
    </div>
  )
}

export default TrendCard
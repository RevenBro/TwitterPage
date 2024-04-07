import React from 'react'

import {Link} from "react-router-dom"

import TrendCard from '../TrendCard/TrendCard'
import FollowComp from '../FollowComp/FollowComp'

import SearchIcon from '../../assets/Images/search-icon.svg'
import Settings from '../../assets/Images/settings.svg'
import User1 from '../../assets/Images/xUser1.svg'
import User2 from '../../assets/Images/xUser2.png'
import RightbarImg from '../../assets/Images/rightbar-img.png'

function RightBar({state}) {
  return (
    <div className='w-[30%] flex flex-col items-center overflow-y-auto h-[100vh] py-[20px] border-l-[1px] border-l-[#D8D8D8] border-l-solid'>
    <div className='relative mb-[20px]'>
      <img className='absolute left-[22px] top-[27%]' src={SearchIcon} width={19.5} height={19.5} />
      <input className='w-[373px] rounded-[31px] py-[12px] pl-[64px] bg-[#EFF3F4]' placeholder='Search Twitter' type="search" required name="search"/>
    </div>
    {state && 
    <img src={RightbarImg} width={"82%"} height={178}/>
    }
    <div className='w-[373px] bg-[#F7F9F9] mt-[20px] rounded-[10px] mb-[20px] py-[20px] px-[15px]'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[24px] font-bold leading-8'>Trends for you</h3>
        <img src={Settings} alt="settings" width={24} height={24}/>
      </div>
      <TrendCard/>
      <TrendCard/>
      <TrendCard/>
      <button className='text-[18px] text-[#1DA1F2] font-normal leading-[100%] cursor-pointer'>Show more</button>
    </div>

    <div className='bg-[#F7F9F9] rounded-[10px] mb-[20px] w-[373px] py-[20px] px-[15px]'>
      <h3 className='text-black text-[24px] font-bold leading-8'>You might like</h3>
      <FollowComp url={User1} title={"Mushtariy"} username={"@Mushtar565266"}/>
      <FollowComp url={User2} title={"Shuhratbek"} username={"@mrshukhrat"}/>
      <button className='text-[18px] text-[#1DA1F2] mt-[10px] font-normal leading-[100%] cursor-pointer'>Show more</button>
    </div>

    <div>
      <div className='space-x-3 mb-[7px]'>
        <Link to={'https://twitter.com/en/tos'}>Terms of Service</Link>
        <Link className='underline' to={'https://twitter.com/en/privacy'}>Privacy Policy</Link>
        <Link to={'https://twitter.com/en/rules-and-policies/x-cookies'}>Cookie Policy</Link>
      </div>
      <p className='text-[16px] font-normal leading-5'>Imprint Ads Info More ··· © 2021 Twitter, Inc.</p>
    </div>
  </div>
  )
}

export default RightBar
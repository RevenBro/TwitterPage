import React, { useEffect, useState } from 'react'

import { Link, Outlet } from 'react-router-dom'

import BackIcon from '../../assets/Images/back-icon.svg'
import TweetBanner from '../../assets/Images/tweet-banner.png'
import BoburAvatar from '../../assets/Images/BoburAvatar.svg'
import AddressIcon from '../../assets/Images/address-icon.svg'
import LinkIcon from '../../assets/Images/link-icon.svg'
import BirthdayIcon from '../../assets/Images/birthday-icon.svg'
import CalendarIcon from '../../assets/Images/calendar-icon.svg'

function Profile({setState}) {
  useEffect(() => {
    setState(true)
  },[])

  const [activeLink, setActiveLink] = useState("Tweets")
  return (
    <div className='h-[100vh] overflow-y-auto'>
      <div className='flex py-[18px] px-[25px]'>
        <button>
          <img src={BackIcon} alt="Arrow back" width={20}/>
        </button>
        <div>
          <strong classname="text-[20px] font-bold leading-7 mt-[5px]">Bobur</strong>
          <p className='text-[16px] font-normal leading-5 opacity-60'>1,070 Tweeets</p>
        </div>
      </div>
      <img src={TweetBanner} width={'100%'}/>
      <div className='flex items-center justify-between px-[25px] mb-[10px]'>
        <img className='-mt-[76px]' src={BoburAvatar} width={145} height={145}/>
        <button className='rounded-[50px] border-[1px] text-[18px] font-semibold leading-6'>Edit profile</button>
      </div>
      <div className='px-[25px]'>
        <h3 className='text-[24px] font-bold leading-8 mb-[3px]'>Bobur</h3>
        <p className='text-[16px] font-normal leading-5 opacity-60 mb-[15px]'>@bobur_mavlonov</p>
        <p className='text-[18px] font-medium mb-[15px] leading-6'>UX&UI designer at <span className='text-[#1DA1F2] cursor-pointer'>@abutechuz</span></p>
        <div className='flex items-center mb-[18px] justify-between'>
          <p className='flex items-center space-x-[2px]'>
            <img src={AddressIcon} width={22} height={22}/>
            <span className='opacity-60 text-[15px] font-normal leading-6'>Mashag'daman</span>
          </p>
          <p className='flex items-center space-x-[2px]'>
            <img src={LinkIcon} width={22} height={22}/>
            <a href='https://t.me/boburjon_mavlonov' className='text-[15px] text-[#1DA1F2] font-normal leading-6'>t.me/boburjon_mavlonov</a>
          </p>
          <p className='flex items-center space-x-[2px]'>
            <img src={BirthdayIcon} width={22} height={22}/>
            <span className='text-[15px] font-normal leading-6 opacity-60'>Born November 24, 2000</span>
          </p>
          <p className='flex items-center space-x-[2px]'>
            <img src={CalendarIcon} width={22} height={22}/>
            <span className='text-[15px] font-normal leading-6 opacity-60'>Joined May 2020</span>
          </p>
        </div>
        <div className='space-x-[30px] mb-[40px]'>
          <strong className='text-[18px] font-bold leading-6'>
            67
            <span className='font-normal ml-[5px]'>Following</span>
          </strong>
          <strong className='text-[18px] font-bold leading-6'>
            47
            <span className='font-normal ml-[5px]'>Followers</span>
          </strong>
        </div>
      </div>
      <div className='px-[25px] flex items-center justify-between'>
        <Link onClick={() => setActiveLink("Tweets")} className={`${activeLink == "Tweets" ? "font-bold border-blue-500" : "text-[18px] font-normal leading-6 border-transparent"} border-b-[3px]`} to={''}>Tweets</Link>
        <Link onClick={() => setActiveLink("Tweets & replies")} className={`${activeLink == "Tweets & replies" ? "font-bold border-blue-500" : "text-[18px] font-normal leading-6 border-transparent"} border-b-[3px]`} to={'tweets-replies'}>Tweets & replies</Link>
        <Link onClick={() => setActiveLink("Media")} className={`${activeLink == "Media" ? "font-bold border-blue-500" : "text-[18px] font-normal leading-6 border-transparent"} border-b-[3px]`} to={'media'}>Media</Link>
        <Link onClick={() => setActiveLink("Likes")} className={`${activeLink == "Likes" ? "font-bold border-blue-500" : "text-[18px] font-normal leading-6 border-transparent"} border-b-[3px]`} to={'likes'}>Likes</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Profile
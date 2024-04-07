import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import NavbarList from './components/NavbarList/NavbarList'
import HomePage from './pages/Home/Home'
import ExplorePage from './pages/Explore/Explore'
import NotifitacionPage from './pages/Notifications/Notifications'
import MessagesPage from './pages/Messages/Messages'
import BookmarksPage from './pages/Bookmarks/Bookmarks'
import ListsPage from './pages/Lists/Lists'
import ProfilePage from './pages/Profile/Profile'
import MorePage from './pages/More/More'

import Tweets from './pages/Profile/ProfileLinks/Tweets'
import TweetsReplies from './pages/Profile/ProfileLinks/TweetsReplies'
import Media from './pages/Profile/ProfileLinks/Media'
import Likes from './pages/Profile/ProfileLinks/Likes'

import {Bookmarks, Explore, Home, Lists, Messages, More, Notification, Profile} from './assets/icon'
import Logo from './assets/Images/Login-logo.svg'
import Contact from './assets/Images/contact.png'
import MoreImg from './assets/Images/more.svg'
import RightBar from './components/RightBar/RightBar'

function Authentification() {
  const [state, setState] = useState(false)
  return (
    <div className='flex justify-center'>
      <div className='overflow-y-auto h-[100vh] w-[17%] flex flex-col ml-[50px] mt-[20px] border-r-[1px] border-r-solid border-r-[#D8D8D8]'>
        <img src={Logo} width={40} height={33}/>
        <ul className='flex flex-col mt-[45px] gap-[25px]'>
          <NavbarList url={'/'} title={"Home"}>
            <Home/>
          </NavbarList>
          <NavbarList url={'/explore'} title={"Explore"}>
            <Explore/>
          </NavbarList>
          <NavbarList url={'/notification'} title={"Notification"}>
            <Notification/>
          </NavbarList>
          <NavbarList url={'/messages'} title={"Messages"}>
            <Messages/>
          </NavbarList>
          <NavbarList url={'/bookmarks'} title={"Bookmarks"}>
            <Bookmarks/>
          </NavbarList>
          <NavbarList url={'/lists'} title={"Lists"}>
            <Lists/>
          </NavbarList>
          <NavbarList url={'/profile'} title={"Profile"}>
            <Profile/>
          </NavbarList>
          <NavbarList url={'/more'} title={"More"}>
            <More/>
          </NavbarList>
        </ul>
        <button className='w-[230px] mb-[40px] inline-block py-[15px] text-white mt-[30px] hover:opacity-80 bg-[#1D9BF0] rounded-[27px] text-[17px] font-bold leading-6]'>Tweet</button>
        
        <div className='flex items-center space-x-6'>
          <img className='rounded-[50%] border-[1px] border-black' src={Contact} width={50} height={50}/>
          <div className='flex flex-col'>
            <strong className='text-[16px] font-semibold leading-5'>Abdulloh</strong>
            <span className='opacity-60 text-[16px] font-normal leading-5'>@abdulloh207</span>
          </div>
          <button>
            <img src={MoreImg}/>
          </button>
        </div>
      </div>

      <div className='overflow-y-auto v-[100vh] w-[50%]'>
        <Routes>
          <Route path='/' element={<HomePage setState={setState}/>}/>
          <Route path='/explore' element={<ExplorePage/>}/>
          <Route path='/notification' element={<NotifitacionPage/>}/>
          <Route path='/messages' element={<MessagesPage/>}/>
          <Route path='/bookmarks' element={<BookmarksPage/>}/>
          <Route path='/lists' element={<ListsPage/>}/>
          <Route path='/profile' element={<ProfilePage setState={setState}/>}>
            <Route path='' element={<Tweets/>}/>
            <Route path='tweets-replies' element={<TweetsReplies/>}/>
            <Route path='media' element={<Media/>}/>
            <Route path='likes' element={<Likes/>}/>
          </Route>
          <Route path='/more' element={<MorePage/>}/>
        </Routes>
      </div>

      <RightBar state={state}/>
      {/* <div className='w-[30%] flex flex-col items-center overflow-y-auto h-[100vh] py-[20px] border-l-[1px] border-l-[#D8D8D8] border-l-solid'>
        <div className='relative mb-[20px]'>
          <img className='absolute left-[22px] top-[27%]' src={SearchIcon} width={19.5} height={19.5} />
          <input className='w-[373px] rounded-[31px] py-[12px] pl-[64px] bg-[#EFF3F4]' placeholder='Search Twitter' type="search" required name="search"/>
        </div>

        <div className='w-[373px] bg-[#F7F9F9] rounded-[10px] mb-[20px] py-[20px] px-[15px]'>
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
      </div> */}
    </div>
  )
}

export default Authentification
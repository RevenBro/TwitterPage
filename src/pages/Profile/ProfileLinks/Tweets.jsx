import React from 'react'

import PostItem from '../../../components/PostItem/PostItem'

import PinIcon from '../../../assets/Images/pin-icon.svg'
import BoburAvatar from '../../../assets/Images/BoburAvatar.svg'
import HeroImg from '../../../assets/Images/hero-img.png'

function Tweets() {
  return (
    <div className='relative'>
      <div className='mt-[15px] absolute flex items-center space-x-[15px] pl-[66px]'>
        <img src={PinIcon} width={20} height={20}/>
        <span className='text-[16px] font-semibold leading-5 text-[#536471]'>Pinned Tweet</span>
      </div>
      <div>
      <PostItem avatarIcon={BoburAvatar} userEmail={"@bobur_mavlonov · Apr 1"} userName={"Bobur"} postBody={"4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim"} commentCount={10} likeCount={8} retweetCount={1}/>
      <PostItem avatarIcon={BoburAvatar} userEmail={"@bobur_mavlonov · Apr 1"} userName={"Bobur"} postBody={"Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz.Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar haqida emas."} likeCount={9} retweetCount={5}/>
      <PostItem avatarIcon={BoburAvatar} userEmail={"@bobur_mavlonov · Apr 1"} userName={"Bobur"} postBody={"A bo'pti maskamasman"} commentCount={10} likeCount={10} retweetCount={1} postHeroImg={HeroImg}/>
      </div>
    </div>
  )
}

export default Tweets
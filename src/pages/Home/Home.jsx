import React, { useState } from 'react'

import Header from '../../components/Header/Header'
import PostItem from '../../components/PostItem/PostItem'

import ContactIcon from '../../assets/Images/contact.png'
import TweetImg from '../../assets/Images/tweet-img.svg'
import Designsta from '../../assets/Images/designsta.png'
import Cloutex from '../../assets/Images/cloutex.png'
import Creative from '../../assets/Images/creative.png'
import PostHeroImg from '../../assets/Images/postHeroImg.png'

function Home() {

  const [getPosts, setGetPosts] = useState([
    {
      id: 1,
      avatarIcon: Designsta,
      userName: "Designsta",
      userEmail: "@inner · 25m",
      postBody: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount: 10,
      retweetCount: 1,
      likeCount: 8,
      postHeroImg: null
    },
    {
      id: 2,
      avatarIcon: Cloutex,
      userName: "cloutexhibition",
      userEmail: "@RajLahoti · 22m",
      postBody: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount: null,
      retweetCount: 5,
      likeCount: 9,
      postHeroImg: null
    },
    {
      id: 3,
      avatarIcon: Creative,
      userName: "CreativePhoto",
      userEmail: "@cloutexhibition · 1h",
      postBody: "Обетда..... Кечиринглар",
      commentCount: 10,
      retweetCount: 1,
      likeCount: 8,
      postHeroImg: PostHeroImg
    },
  ])

  const [postImgUrl, setPostImgUrl] = useState(null)

  const formChangeImg = (evt) => {
    setPostImgUrl(URL.createObjectURL(evt.target.files[0]));
  }

  const formAddPost = (evt) => {
    evt.preventDefault()

    const data = {
      // id: getPosts.length ? getPosts[getPosts - 1].id + 1 : 1,
      avatarIcon: ContactIcon,
      userName: "Abdulloh",
      userEmail: "@Abdulloh207 · 1m",
      postBody: evt.target.userValue.value,
      commentCount: null,
      retweetCount: null,
      likeCount: null,
      postHeroImg: postImgUrl ? postImgUrl : null
    }
    setGetPosts([data, ...getPosts])
    evt.target.reset()
  }

  return (
    <>
      <div className='overflow-y-auto h-[100vh]'>
        <Header title={"Home"}/>
        <hr />
        <form onSubmit={formAddPost} className='relative px-[20px] py-[5px] flex items-start'>
          <img className='mr-[15px] rounded-[50%] border-[1px] border-black' src={ContactIcon} width={55} height={55}/>
          <label className='mt-[10px] w-full'>
            <input className='text-[#828282] text-[22px] mb-[55px] font-semibold leading-7 outline-none w-full' type="text" required name='userValue' placeholder="What's happening" autoComplete='off'/>
            <label>
              <img src={TweetImg} width={190}/>
              <input onChange={formChangeImg} className='scale-0 opacity-0' type="file"/>
            </label>
          </label>
          <button className='absolute right-7 bottom-8 w-[108px]  bg-[#1DA1F2] opacity-70 rounded-[120px] shadow-md text-white py-[10px]'>Tweet</button>
        </form>
        <hr/>

        <ul>
          {getPosts.map((item, index) => (
            <PostItem key={index} avatarIcon={item.avatarIcon} userEmail={item.userEmail} userName={item.userName} postBody={item.postBody} commentCount={item.commentCount} likeCount={item.likeCount} retweetCount={item.retweetCount} postHeroImg={item.postHeroImg}/>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
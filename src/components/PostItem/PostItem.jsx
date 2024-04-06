import React from 'react'

import MoreIcon from '../../assets/Images/more.svg'
import PostAction from '../PostAction/PostAction'
import CommentIcon from '../../assets/Images/comment-icon.svg'
import RetweetIcon from '../../assets/Images/retweet-icon.svg'
import LikeIcon from '../../assets/Images/like-icon.svg'
import ShareIcon from '../../assets/Images/share-icon.svg'
import StatsIcon from '../../assets/Images/stats-icon.svg'
import LikeActiveIcon  from '../../assets/Images/like-active.svg'
import RetweetActiveIcon from '../../assets/Images/retweet-active.svg'

function PostItem({avatarIcon, userName, userEmail, postBody, commentCount, retweetCount, likeCount, postHeroImg}) {
  return (
    <li className='relative px-[25px] pt-[30px] pb-[21px] border-[1px] border-[#D8D8D8]'>
    <img className='cursor-pointer absolute top-[41px] right-[25px]' src={MoreIcon} alt="Vector img" width={17} height={4} />

    <div className='flex items-start'>
      <img src={avatarIcon} alt="Posted user icon" width={60} height={60} />
      <div className='ml-[15px] flex flex-col'>
        <div className='flex space-x-[5px]'>
          <h2 className='text-[#000000] text-[20px] font-bold'>{userName}</h2>
          <p className='text-[18px] text-[#000000] opacity-60'>{userEmail}</p>
        </div>
        <div>
          <p className='text-[18px] text-[#000000]'>{postBody}</p>
        </div>
        {postHeroImg ? 
        <img className='max-w[659px] max-h-[453px]' src={postHeroImg} width={659} height={453}/>
        : ""}
        
        <ul className='flex items-center mt-[22px] space-x-[80px]'>
            <PostAction activeIcon={CommentIcon} actionIcon={CommentIcon} actionCount={commentCount}/>
            <PostAction activeColor={"text-green-500"} activeIcon={RetweetActiveIcon} actionIcon={RetweetIcon} actionCount={retweetCount}/>
            <PostAction activeColor={"text-red-500"} activeIcon={LikeActiveIcon} actionIcon={LikeIcon} actionCount={likeCount}/>
            <PostAction activeIcon={ShareIcon} actionIcon={ShareIcon}/>
            <PostAction activeIcon={StatsIcon} actionIcon={StatsIcon}/>
        </ul>
      </div>    
    </div> 
  </li>
  )
}

export default PostItem
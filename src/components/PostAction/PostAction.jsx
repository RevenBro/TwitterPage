import React, { useState } from 'react'

function PostAction({actionIcon, actionCount, activeIcon, activeColor}) {

  const [changeAction, setChangeAction] = useState(false)

  const actionClick = () => {
    setChangeAction(!changeAction)
  }

  return (
    <li onClick={actionClick} className='flex items-center space-x-[10px]'>
      <img src={changeAction ? activeIcon : actionIcon} width={24} height={24}/>
      <span className={`${changeAction ? activeColor : "text-gray-500"}  text-[20px]`}>
        {changeAction ? actionCount + 1 : actionCount}
      </span>
    </li>
  )
}

export default PostAction
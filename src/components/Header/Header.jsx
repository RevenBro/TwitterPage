import React from 'react'

import mode from '../../assets/Images/mode.svg'

function Header({title}) {
  return (
    <div className='py-[20px] px-[20px] flex justify-between'>
        <span className='text-[24px] font-bold leading-8'>{title}</span>
        <img src={mode} width={22} height={21}/>
    </div>
  )
}

export default Header
import React from 'react'

import { NavLink } from 'react-router-dom'

function NavbarList({url, title, children}) {
  return (
    <NavLink className="flex items-center space-x-[20px] text-[#000] " to={url}>
        {children}
        <span className='text-[18px] leading-6'>{title}</span>
    </NavLink>
  )
}

export default NavbarList
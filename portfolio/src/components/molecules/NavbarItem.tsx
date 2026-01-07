import React from 'react'
import Text from '../atoms/Text';

interface NavbarItemProps {
  label: string;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, href }) => {

  

  return (
    <div className='px-2 py-1'>
      <li>
        <a href={href} className="menu-item border-t"><Text text={label}/></a>
      </li>
    </div>
  )
}

export default NavbarItem
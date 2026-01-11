"use client";
import React from 'react'
import Text from '../atoms/Text';
 
interface NavbarItemProps {
  label: string;
  href: string;
  classNameText?: string;
  classNameLi?: string;
  classNameContainer?: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, href, classNameText, classNameLi, classNameContainer, setOpen }) => {

  
  
  return (
    <div className={`px-2 py-1 ${classNameContainer}`}>
      <li className={classNameLi}>
        <a href={href} onClick={() => setOpen && setOpen(false)} className="menu-item border-t" ><Text text={label} className={classNameText}/></a>
      </li>
    </div>
  )
}

export default NavbarItem
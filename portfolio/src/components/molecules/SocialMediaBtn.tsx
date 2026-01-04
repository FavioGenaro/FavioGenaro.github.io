import React from 'react'
import Text from '../atoms/Text'
import { SocialMediaBtnProps } from '@/types/props'

const SocialMediaBtn: React.FC<SocialMediaBtnProps> = ({ children, link, label }) => {
  return (
    <a className="flex items-center justify-center gap-2 sm:mt-0 cursor-pointer background-btn-social-media border border-gray-300 rounded-full px-4 py-1" 
        target="_blank"
        href={link}>
        {children}
        <Text text={label}/>
    </a>
  )
}

export default SocialMediaBtn
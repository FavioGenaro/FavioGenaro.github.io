import React from 'react'

interface TextProps {
  text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
  return (
    <p className='text-base text-black dark:text-white text'>
      {text}
    </p>
  )
}

export default Text
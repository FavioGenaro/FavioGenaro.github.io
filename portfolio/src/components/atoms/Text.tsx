import React from 'react'

interface TextProps {
  text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
  return (
    <p className='text-base text font-sans'>
      {text}
    </p>
  )
}

export default Text
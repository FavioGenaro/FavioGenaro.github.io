import React from 'react'

interface TextProps {
  text: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ text, className }) => {
  return (
    <p className={`text-xs md:text-base text font-sans ${className}`}>
      {text}
    </p>
  )
}

export default Text
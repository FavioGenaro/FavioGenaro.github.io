import React from 'react'

interface SubtitleProps {
  subtitle: string
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <h2 className="titleH2 font-bold text-[#2563EB]">{subtitle}</h2>
  )
}

export default Subtitle
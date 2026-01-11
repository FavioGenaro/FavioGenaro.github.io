"use client";
import React from 'react'

interface SubtitleProps {
  subtitle: string
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <h2 className="titleH2 font-bold subtitle">{subtitle}</h2>
  )
}

export default Subtitle
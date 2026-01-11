"use client";
import { type SectionLayoutProps } from '../../types/props'
import React from 'react'

const SectionLayout: React.FC<SectionLayoutProps> = ( { id, children, classSection, classDiv } ) => {
  return (
    <section className={`space-y-6 ${classSection}`} id={id}>
        <div className={`flex gap-4 mx-auto w-full max-w-6xl justify-center px-4 md:p-0 ${classDiv}`}>
            {children}
        </div>
    </section>
  )
}

export default SectionLayout 
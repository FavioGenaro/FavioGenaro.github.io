import { SectionLayoutProps } from '@/types/Section'
import React from 'react'

const SectionLayout: React.FC<SectionLayoutProps> = ( { id, children, classSection, classDiv } ) => {
  return (
    <section className={`space-y-6 py-16 ${classSection}`} id={id}>
        <div className={`flex gap-4 mx-auto w-full max-w-6xl justify-center p-1 md:p-0 ${classDiv}`}>
            {children}
        </div>
    </section>
  )
}

export default SectionLayout
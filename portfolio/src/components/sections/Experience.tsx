import { SectionProps } from '@/types/Section'
import React from 'react'
import SectionLayout from '../templates/SectionLayout'
import Subtitle from '../atoms/Subtitle'


const Experience: React.FC<SectionProps> = ({ id }) => {
  return (
    // absolute
    // <div className=''>
    //   <section id={id}>Experiencia  </section>
    // </div>
    <SectionLayout id={id} classSection="mt-20 bg-[#F7F9FC] py-12" classDiv="flex-col">
      <div className='flex justify-center'>
          <Subtitle subtitle='Experiencia laboral' />
      </div>
      <div className='flex m-auto w-fit gap-8'>
      </div>
    </SectionLayout>
  )
}

export default Experience
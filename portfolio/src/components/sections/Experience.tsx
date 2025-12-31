import { SectionProps } from '@/types/Section'
import React from 'react'
import SectionLayout from '../templates/SectionLayout'
import Subtitle from '../atoms/Subtitle'


const Experience: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionLayout id={id} classSection="mt-20 background-secondary pt-20 pb-12" classDiv="flex-col">
      <div className='flex justify-center'>
          <Subtitle subtitle='Experiencia laboral'/>
      </div>
      <div className='flex m-auto w-fit gap-8'>
      </div>
    </SectionLayout>
  )
}

export default Experience
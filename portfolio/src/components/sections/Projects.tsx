import { SectionProps } from '@/types/Section'
import React from 'react'
import SectionLayout from '../templates/SectionLayout'
import Subtitle from '../atoms/Subtitle'
import ProjectGrid from '../organisms/ProjectGrid'

const Projects: React.FC<SectionProps> = ( { id } ) => {
  return (
    <SectionLayout id={id} classSection="mt-20 background-secondary py-12" classDiv="flex-col">
      <div className='flex justify-center'>
          <Subtitle subtitle='Proyectos Personales'/>
      </div>
      <div className='flex flex-col mt-8 w-full'>
        <ProjectGrid/>
      </div>
    </SectionLayout>
  )
}

export default Projects
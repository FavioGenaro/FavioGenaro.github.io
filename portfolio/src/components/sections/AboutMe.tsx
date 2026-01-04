import React from 'react'
import foto from "../../../public/aboutme.svg"
import Text from '../atoms/Text'
import Image from 'next/image'
import Subtitle from '../atoms/Subtitle'
import { SectionProps } from '@/types/props'
import SectionLayout from '../templates/SectionLayout'

const AboutSection: React.FC<SectionProps> = ({ id }) => {
  return (
    // px-4 sm:px-6 lg:px-8 py-12
    <SectionLayout id={id} classSection="pt-5 md:pt-20" classDiv="flex-col md:flex-row">
      <div className='flex flex-col gap-4 md:gap-8 max-w-lg items-center md:items-start'>
          <Subtitle subtitle='Sobre mí' />
          <div className='flex flex-col gap-4'>
              <Text text='Soy Bachiller en Ingeniería de Software de la Universidad Nacional Mayor de San Marcos, me considero una persona organizada, responsable y apasionada por el desarrollo de aplicaciones.'/>
              <Text text='Me entusiasma aprender y crecer profesionalmente contribuyendo al desarrollo de soluciones tecnológicas.'/>
          </div>
      </div>
      <div className='flex m-auto w-fit gap-8'>
          <Image
              src={foto} 
              alt="foto de perfil" 
              className="size-40 md:size-60 min-w-40"
          />
      </div>
    </SectionLayout>
  )
}

export default AboutSection
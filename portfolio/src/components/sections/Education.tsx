"use client";
import { SectionProps } from '@/types/props'
import React from 'react'
import SectionLayout from '../templates/SectionLayout'
import Subtitle from '../atoms/Subtitle'
import foto from "../../../public/education.svg"
import Image from 'next/image'
import Text from '../atoms/Text'
 
const Education: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionLayout id={id} classSection="pt-10 md:pt-20 background" classDiv="flex-col gap-2 md:gap-8">
      <div className='flex justify-center'>
          <Subtitle subtitle='Educación'/>
      </div>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex justify-center flex-1'>
            <Image
                src={foto} 
                alt="foto de perfil" 
                className="size-50 md:size-80 min-w-50 md:min-w-80"
            />
        </div>
        <div className='flex flex-col gap-4 md:gap-8 max-w-lg flex-1'>
            <article>
                <h2 className='text titleH3 font-medium'>Bachiller en Ingeniería de Software</h2>
                <Text text='Universidad Nacional Mayor de San Marcos'/>
                <Text text='Octubre 2020 - Julio 2025'/>
            </article>
            <article>
                <h2 className='text titleH3 font-medium'>Desarrollador de aplicaciones web</h2>
                <Text text='SENATI'/>
                <Text text='Julio 2017 - Diciembre 2018'/>
            </article>
        </div>
        
      </div>
    </SectionLayout>
  )
}

export default Education
import React from 'react'
import foto from "../../../public/aboutme.svg"
import Text from '../atoms/Text'
import Image from 'next/image'

interface AboutProps {
  id: string
}

const AboutSection: React.FC<AboutProps> = ({ id }) => {
  return (
    <section className="space-y-6 mt-24" id={id}>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4 md:gap-8 max-w-lg'>
                <h2 className='text titleH3'>Sobre mí</h2>
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
        </div>
    </section>
  )
}

export default AboutSection
import React from 'react'
import foto from "../../../public/cv-foto.webp"
import Text from '../atoms/Text'
import Image from 'next/image'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaWhatsapp } from "react-icons/fa";

interface HeroProps {
  id: string
}

const HeroSection: React.FC<HeroProps> = ({ id }) => {
  return (
    <section className="space-y-6" id={id}>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-8 md:gap-16 w-fit m-auto items-center'>
                <div>
                    <Image
                        src={foto} 
                        alt="foto de perfil" 
                        className="rounded-full shadow-lg size-20 md:size-32 min-w-20"
                    />
                </div>
                <div className='max-w-md'>
                    <h1 className='text titleH1'>Favio Saico</h1>
                    <h3 className='text titleH3'>Bachiller en Ingeniería de Software</h3>
                    <Text text='Especializado en el desarrollo de aplicaciones web backend y frontend.'/>
                </div>
            </div>
        <div className='flex m-auto w-fit gap-8'>
            <div className='flex gap-1 items-center'>
                <MdOutlineMailOutline size={24} className='icon' />
                <Text text='faviogenarosaico@gmail.com'/>
            </div>
            <div className='flex gap-1 items-center'>
                <FaWhatsapp size={24} className='icon'/>
                <Text text='+51 944380075'/>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default HeroSection
import React from 'react'
import foto from "../../../public/cv-foto.webp"
import Text from '../atoms/Text'
import Image from 'next/image'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import SectionLayout from '../templates/SectionLayout'
import { GiGraduateCap } from 'react-icons/gi'

interface HeroProps {
  id: string
}

const HeroSection: React.FC<HeroProps> = ({ id }) => {
  return (
    <SectionLayout id={id} classSection="pt-40 pb-12" classDiv="">
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row items-center gap-4 md:gap-16 w-fit m-auto md:items-center'>
                <div>
                    <Image
                        src={foto} 
                        alt="foto de perfil" 
                        className="rounded-full shadow-lg size-20 md:size-32 min-w-20"
                    />
                </div>
                <div className='max-w-md'>
                    <h1 className='text titleH1'>Favio Saico</h1>
                    <h2 className='text titleH2 font-medium'>Bachiller en Ingeniería de Software</h2>
                    <Text text='Especializado en el desarrollo de aplicaciones web backend y frontend.'/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row m-auto w-fit gap-4 md:gap-8'>
                <div className='flex gap-1 items-center'>
                    <MdOutlineMailOutline size={24} className='icon' />
                    <Text text='faviogenarosaico@gmail.com'/>
                </div>
                <div className='flex gap-1 items-center'>
                    <a href="https://wa.me/51944380075" className="flex gap-1 items-center">
                        <FaWhatsapp size={24} className='icon'/>
                        <Text text='+51 944380075'/>
                    </a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row m-auto w-full md:w-fit gap-2 md:gap-4'>
                <a className="flex items-center justify-center gap-2 sm:mt-0 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 border border-gray-300 rounded-full px-4 py-1" 
                    target="_blank"
                    href="https://www.linkedin.com/in/favio-saico/">
                    {/* <LinkedinIcon/> */}
                    <FaLinkedin size={24} className='icon'/>
                    <Text text='LinkedIn'/>
                </a>
                <a className="flex items-center justify-center gap-2 sm:mt-0 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 border border-gray-300 rounded-full px-4 py-1" 
                    target="_blank"
                    href="https://github.com/FavioGenaro">
                    <FaGithub size={24} className='icon'/>
                    <Text text='GitHub'/>
                </a>
                <a className="flex items-center justify-center gap-2 sm:mt-0 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 border border-gray-300 rounded-full px-4 py-1" 
                    target="_blank"
                    href="https://drive.google.com/file/d/199C8WFF1tEIVKEV_A3ukfSHNiPbgJ85V/view?usp=sharing">
                    <GiGraduateCap size={24} className='icon'/>
                    <Text text='CV'/>
                </a>
                {/* <div className='flex gap-1 items-center'>
                    <MdOutlineMailOutline size={24} className='icon' />
                    <Text text='faviogenarosaico@gmail.com'/>
                </div>
                <div className='flex gap-1 items-center'>
                    <a href="https://wa.me/51944380075" className="flex gap-1">
                        <FaWhatsapp size={24} className='icon'/>
                        <Text text='+51 944380075'/>
                    </a>
                </div> */}
            </div>
        </div>
        
    </SectionLayout>
  )
}

export default HeroSection
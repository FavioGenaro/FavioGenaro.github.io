import React from 'react'
import TechnologiesItem from '../atoms/TechnologiesItem';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import { CardProps } from '@/types/Section';


const CardProject: React.FC<CardProps> = ({ title, technologies, description, linkRepo, linkDemo, imageSrc }) => {
  return (
    <article className="grid sm:grid-cols-2 gap-8 dark:text-white mb-8 w-full sm:w-[90%] mx-auto md:w-full">
        {/* imagen */}
        <div className="h-full rounded-2xl overflow-hidden flex border border-gray-500 dark:border-gray-600 max-w-[21rem] max-h-[15rem] mx-auto sm:max-w-none sm:max-h-none sm:mx-none">
            <Image src={imageSrc} alt="" className="w-full h-60 rounded-2xl" />
        </div>
        {/* name */}
        <div className='flex flex-col justify-between'>
            <div>
                <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
                    {title}
                </h3>
                
                {/* tecnologias */}
                <div className='mt-2 flex gap-2 flow-wrap'>
                    {
                        technologies.map((e, i)=>(
                            <TechnologiesItem key={i} name={e}/>
                        ))
                    }
                </div>
                <p className='mt-4'>
                    {description}
                </p>
            </div>
            
            {/* Enlaces */}
            <div className="flex gap-4 text-white mt-2">
                <a href={linkRepo} 
                    className="p-2 bg-gray-800 border border-gray-600 rounded-xl flex gap-2 items-center"
                    target="_blank"
                >
                    <FaGithub />
                    <p>Code</p>
                </a>
                {
                    linkDemo && (
                        <a href={linkDemo}
                            className="p-2 bg-gray-800 border border-gray-600 rounded-xl flex gap-2 items-center"
                            target="_blank"
                        >
                            <GrDeploy />
                            Preview
                        </a>
                    )
                }
                
            </div>
        </div>
    </article>
  )
}

export default CardProject
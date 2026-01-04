import React from 'react'
import Text from '../atoms/Text'
import { JobProps } from '@/types/props';

interface ExperienceProps {
  expItem: JobProps;
}

const ExperienceItem: React.FC<ExperienceProps> = ({ expItem }) => {
  return (
    <div
        className="relative mx-12 pb-4 before:absolute before:left-[-35px] before:block before:h-[74%] flex items-end before:border-l-2 before:border-black/50 dark:before:border-white/80 before:content-['']"
    >
        <div className="relative pb-4 dark:text-white">
            <div className="sticky top-0">
                <span className='line-time absolute -left-[42px] top-[8px] rounded-full w-4 h-4 bg-white'></span>
                {/* Contenido */}
                <h3 className="titleH3 font-bold text-blue-900 dark:text-blue-400">{expItem.jobName}</h3>
                <h4 className="titleH4 font-semibold text-gray-600 dark:text-white">{expItem.companyName}</h4>
                <time className="p-0 m-0 text-xs md:text-sm text-gray-600/80 dark:text-white/80">{expItem.startDate} - {expItem.endDate}</time>
                <Text text={expItem.description}/>
            </div>
        </div>
    </div>
  )
}

export default ExperienceItem
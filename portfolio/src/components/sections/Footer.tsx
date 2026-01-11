"use client";
import React from 'react'
import SectionLayout from '../templates/SectionLayout'
import { SectionProps } from '@/types/props'
import Text from '../atoms/Text'

const Footer: React.FC<SectionProps> = ({ id }) => {

    const year = new Date().getFullYear();

    return (
        <SectionLayout id={id} classSection="pt-2 pb-2 md:pt-4 md:pb-4 background-secondary" classDiv="flex-col gap-2 md:gap-8">
            <Text
                text={`© ${year} Favio Saico. Todos los derechos reservados.`}
                className="
                text-sm
                text-slate-500
                dark:text-slate-400
                text-center
                "
            />
        </SectionLayout>
    )
}

export default Footer
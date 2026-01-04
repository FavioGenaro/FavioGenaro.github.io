import { JobProps, SectionProps } from '@/types/props'
import React from 'react'
import SectionLayout from '../templates/SectionLayout'
import Subtitle from '../atoms/Subtitle'
import ExperienceItem from '../molecules/ExperienceItem';

const experienceList: JobProps[] = [
    {
        jobName: "IT Consultant - Assistant I",
        companyName: "Management Solutions",
        startDate: "Octubre 2025",
        endDate:"Actualidad",
        description: " Manejo del lenguaje Scala con Apache Spark y Databricks para el desarrollo de reportes automatizados."
    },
    {
        jobName: "Practicante Pre-profesional de desarrollo Frontend",
        companyName: "Coolbox",
        startDate: "Marzo 2025",
        endDate:"Agosto 2025",
        description: "Desarrollo nuevas funcionalidades a través de componentes en React con TypeScript para el ecommerce de Coolbox, desarrollo de landings temáticas, corrección de bugs, control de versiones con Git y Bitbucket usando GitFlow y manejo del entorno VTEX IO, incluyendo el consumo de APIs REST y GraphQL, despliegues a producción, administración de workspaces, CMS y Master Data."
    },
    {
        jobName: "Practicante Pre-profesional del Área de TI comercial",
        companyName: "Luz del Sur",
        startDate: "Abril 2024",
        endDate:"Diciembre 2024",
        description: "Mantenimiento de aplicaciones web Frontend, Backend, tareas programadas y de escritorio en .NET con C# y Visual Basic, pases a entornos de prueba y producción, manejo de consultas sobre base de datos SQL Informix y análisis de requerimientos funcionales."
    }
];

const Experience: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionLayout id={id} classSection="mt-10 md:mt-20 background-secondary pt-10 pb-10 md:pt-20 md:pb-12" classDiv="flex-col">
      <div className='flex justify-center'>
          <Subtitle subtitle='Experiencia laboral'/>
      </div>
      <div className='flex flex-col m-auto w-fit max-w-175 mt-4 md:mt-8'>
        {
                experienceList.map((expItem, i) => (
                    <ExperienceItem expItem={expItem} key={i} />
                ))
            }
      </div>
    </SectionLayout>
  )
}

export default Experience
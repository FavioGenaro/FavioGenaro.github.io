import { CardProps } from "@/types/Section";

const dataProjects: CardProps[] = [
        {
            id: 1,
            imageSrc: "",
            title: "Task List App",
            description: `Proyecto con diseño web responsive, persistencia de datos con almacenamiento en localStorage, cambio en el diseño de tareas y modo oscuro.`,
            linkRepo: "https://github.com/FavioGenaro/task-app-context-reducer",
            linkDemo: "https://task-app-simple.netlify.app/",
            technologies: ["JavaScript", "React.js","Tailwind CSS"]
        },
        {
            id: 2,
            imageSrc: "",
            title: "Lista de Paises",
            description: `Desarrollo de una prueba tecnica mediante consultas a una API GraphQL.`,
            linkRepo: "https://github.com/FavioGenaro/prueba-tecnica",
            linkDemo: "https://countrysearch-prueba.netlify.app/",
            technologies: ["React.js","Tailwind CSS","Axios","GraphQL"]
        },
        {
            id: 5,
            imageSrc: "",
            title:"API REST y API GraphQL",
            description:`Desarrollo de una API REST y API GraphQL de un ecommerce, con evaluación de rendimiento con JMeter en diferentes niveles de conectividad inalámbrica.`,
            linkRepo:"https://github.com/FavioGenaro/apis-tesis",
            // linkDemo: null,
            technologies:["TypeScript","NestJS","GraphQL","REST", "JMeter"]
        },
        {
            id: 3,
            imageSrc: "",
            title: "API Ecommerce",
            description: `Proyecto del curso de Gestión del Mantenimiento del Software. Desarrollado
                        y desplegando usando Docker, Jenkins, SonarQube, New relic y Google Cloud.`,
            linkRepo: "https://github.com/FavioGenaro/project-apis-ecommerce",
            // linkDemo: null,
            technologies: ["JavaScript","TypeScript","Node","Java","REST"]
        },
        {
            id: 4,
            imageSrc: "",
            title: "Task track",
            description: `Sistema web de organización de tareas que cuenta con visualizaciones en forma de calendario y kanban.`,
            linkRepo: "https://github.com/FavioGenaro/task-track",
            // linkDemo: null,
            technologies: ["TypeScript","Angular","C#",".NET","REST"]
        },
    ];

import React from 'react'
import CardProject from "../molecules/CardProject";

// interface ProjectGrid {
  
// }
// <ProjectGrid>

const ProjectGrid: React.FC = () => {
  return (
    <>
        {
            dataProjects.map((item) => (
                <CardProject
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imageSrc={item.imageSrc} 
                    description={item.description} 
                    linkRepo={item.linkRepo} 
                    linkDemo={item.linkDemo}
                    technologies={item.technologies}
                />
            ))
        }
    </>
  )
}

export default ProjectGrid
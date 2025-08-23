import CardProjects from "./CardProjects"
import image1 from '../assets/images/taskListApp2.webp'
import image2 from "../assets/images/listaPaises.webp";
import image3 from "../assets/images/apiEcommerce.webp";
import image4 from "../assets/images/tasktrack.webp";
import image5 from "../assets/images/apiEcommerce-tesis.webp";

const Projects = () => {

    const dataProjects = [
        {
            id: 1,
            image: image1,
            title: "Task List App",
            description: `Proyecto con diseño web responsive, persistencia de datos con almacenamiento en localStorage, cambio en el diseño de tareas y modo oscuro.`,
            repo: "https://github.com/FavioGenaro/task-app-context-reducer",
            havePreview: true,
            preview: "https://task-app-simple.netlify.app/",
            technologies: ["JavaScript", "React.js","Tailwind CSS"]
        },
        {
            id: 2,
            image: image2,
            title: "Lista de Paises",
            description: `Desarrollo de una prueba tecnica mediante consultas a una API GraphQL.`,
            repo: "https://github.com/FavioGenaro/prueba-tecnica",
            havePreview: true,
            preview: "https://countrysearch-prueba.netlify.app/",
            technologies: ["React.js","Tailwind CSS","Axios","GraphQL"]
        },
        {
            id: 5,
            image: image5,
            title:"API REST y API GraphQL",
            description:`Desarrollo de una API REST y API GraphQL de un ecommerce, con evaluación de rendimiento con JMeter en diferentes niveles de conectividad inalámbrica.`,
            repo:"https://github.com/FavioGenaro/apis-tesis",
            havePreview: false,
            preview:"#",
            technologies:["TypeScript","NestJS","GraphQL","REST", "JMeter"]
        },
        {
            id: 3,
            image: image3,
            title: "API Ecommerce",
            description: `Proyecto del curso de Gestión del Mantenimiento del Software. Desarrollado
                        y desplegando usando Docker, Jenkins, SonarQube, New relic y Google Cloud.`,
            repo: "https://github.com/FavioGenaro/project-apis-ecommerce",
            havePreview: false,
            preview: "#",
            technologies: ["JavaScript","TypeScript","Node","Java","REST"]
        },
        {
            id: 4,
            image: image4,
            title: "Task track",
            description: `Sistema web de organización de tareas que cuenta con visualizaciones en forma de calendario y kanban.`,
            repo: "https://github.com/FavioGenaro/task-track",
            havePreview: false,
            preview: "#",
            technologies: ["TypeScript","Angular","C#",".NET","REST"]
        },
    ];

    return (
        <section id="Projects" className="m-auto w-autow-full mx-auto py-4 md:py-4 w-full lg:max-w-3xl md:max-w-2xl px-3 sm:px-0">
            <h1 className="text-center font-bold text-3xl my-8 dark:text-white">Proyectos Personales</h1>
            {
                dataProjects.map((item)=>(
                    <CardProjects 
                        key={item.id}
                        title={item.title}
                        image={item.image} 
                        description={item.description} 
                        repo={item.repo} 
                        havePreview={item.havePreview}
                        preview={item.preview} 
                        technologies={item.technologies}
                    />
                ))
            }
        </section>
    )
}

export default Projects
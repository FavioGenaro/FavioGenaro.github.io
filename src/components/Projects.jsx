import CardProjects from "./CardProjects"
import image1 from '../assets/images/taskListApp.webp'
import image2 from "../assets/images/listaPaises.webp";
import image3 from "../assets/images/apiEcommerce.webp";
import image4 from "../assets/images/tasktrack.webp";

const Projects = () => {

    const dataProjects = [
        {
            id:1,
            image:image1,
            title:"Task List App",
            description:`Proyecto con diseño web responsive, persistencia en el almacenamiento local con localStorage, cambio en el diseño de tareas, modo oscuro`,
            repo:"https://github.com/FavioGenaro/task-app-context-reducer",
            havePreview: true,
            preview:"https://task-app-simple.netlify.app/",
            technologies:["React","Tailwind CSS"]
        },
        {
            id:2,
            image:image2,
            title:"Lista de Paises",
            description:`Desarrollo de una prueba tecnica usando una API de GraphQL.`,
            repo:"https://github.com/FavioGenaro/prueba-tecnica",
            havePreview: true,
            preview:"https://countrysearch-prueba.netlify.app/",
            technologies:["React","Tailwind CSS","Axios","GraphQL"]
        },
        {
            id:3,
            image:image3,
            title:"API Ecommerce",
            description:`Proyecto del curso de Gestión del Mantenimiento del Software. Desarrollado
                        y desplegando usando Docker, Jenkins, SonarQube, New relic y Google Cloud.`,
            repo:"https://github.com/FavioGenaro/project-apis-ecommerce",
            havePreview: false,
            preview:"#",
            technologies:["JavaScript","TypeScript","Node","Java","REST"]
        },
        {
            id:4,
            image:image4,
            title:"Task track",
            description:`Sistema web de organización de tareas que cuenta con visualizaciones en forma de calendario y kanban.`,
            repo:"https://github.com/FavioGenaro/task-track",
            havePreview: false,
            preview:"#",
            technologies:["TypeScript","Angular","C#",".NET","REST"]
        }
    ];

    return (
        <section id="Projects" className="m-auto w-autow-full mx-auto py-4 md:py-4 w-full lg:max-w-3xl md:max-w-2xl">
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
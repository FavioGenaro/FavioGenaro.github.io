import CardProjects from "./CardProjects"
import image1 from '../assets/images/taskListApp.webp'
import image2 from "../assets/images/listaPaises.webp";

const Projects = () => {

    const dataProjects = [
        {
            id:1,
            image:image1,
            title:"Task List App",
            description:`Mis modificaciones:
                        - Diseño web responsive
                        - Persistencia en el almacenamiento local
                        - Cambio en el diseño de tareas,
                        - Modo oscuro`,
            repo:"https://github.com/FavioGenaro/task-app-context-reducer",
            preview:"https://task-app-simple.netlify.app/",
            technologies:["React","Tailwind CSS"]
        },
        {
            id:2,
            image:image2,
            title:"Lista de Paises",
            description:`Desarrollo de una prueba tecnica usando una API de GraphQL`,
            repo:"https://github.com/FavioGenaro/prueba-tecnica",
            preview:"https://countrysearch-prueba.netlify.app/",
            technologies:["React","Tailwind CSS","Axios","GraphQL"]
        }
    ];
    console.log(image1)

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
                        preview={item.preview} 
                        technologies={item.technologies}
                    />
                ))
            }
        </section>
    )
}

export default Projects
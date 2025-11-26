const experienceList = [
    {
        jobName: "IT Consultant - Assistant I",
        companyName: "Management Solutions",
        startDate: "Octubre 2025",
        endDate:"Actualidad",
        description: ""
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

const Experience = () => {

    return (
        <section id="Experience" className="m-auto w-autow-full mx-auto container py-4 md:py-4 w-full lg:max-w-3xl md:max-w-2xl px-3 sm:px-0">
            <h1 className="text-center font-bold text-3xl my-8 dark:text-white">Experiencia Laboral</h1>

            {
                experienceList.map(expItem => (
                    <div
                        className="relative mx-12 pb-4 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/50 dark:before:border-white/80 before:content-['']"
                    >
                        <div className="relative pb-4 dark:text-white">
                            <div className="sticky top-0">
                                {/* punto */}
                                <span className="text-gray-600 dark:text-white -left-[43px] -top-[25px] absolute rounded-full text-6xl">
                                    &bull;
                                </span>
                                {/* Contenido */}
                                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400">{expItem.jobName}</h3>
                                <h4 className="font-semibold text-xl text-gray-600 dark:text-white">{expItem.companyName}</h4>
                                <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">{expItem.startDate} - {expItem.endDate}</time>
                                <p className="text-base">{expItem.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            

            
        </section>
    )
}

export default Experience


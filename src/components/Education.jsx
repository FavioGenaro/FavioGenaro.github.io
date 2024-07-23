const Education = () => {

    const listEducation = [
        {
            id:1,
            academyDiscipline: "Ingeniería de Software",
            studyCenter:"Universidad Nacional Mayor de San Marcos",
            startDate: "Octubre 2020",
            endDate:"Actualidad",
            description: "Algunas asignaturas: Algoritmia, Estructura de datos, Base de datos, Arquitectura de software, Calidad de software, Gestión de proyectos de software, etc."
        },{
            id:2,
            academyDiscipline: "Desarrollador de aplicaciones web",
            studyCenter:"SENATI",
            startDate: "Julio 2017",
            endDate:"Diciembre 2018",
            description: `Asignaturas: Informática básica, Software aplicativo, Arquitectura de
                        computadoras y Fundamentos de programación. Tecnologías web, Base de
                        datos, Lenguajes de programación y Fundamentos de programación web`
        }
    ];


    return (
        <section id="Education" className=" m-auto w-autow-full mx-auto py-4 md:py-4 w-full lg:max-w-3xl md:max-w-2xl">
            <h1 className="text-center font-bold text-3xl my-8 dark:text-white">Educación</h1>
            {
                listEducation.map( (item)=> (
                    <div className="relative pb-4 dark:text-white" key={item.id}>
                        <div className="sticky top-0">
                            {/* Contenido */}
                            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400">
                                {item.academyDiscipline}
                            </h3>
                            <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
                                {item.studyCenter}
                            </h4>
                            <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                                {item.startDate} - {item.endDate}
                            </time>
                            {/* <p className="text-lg">
                                {item.description}
                            </p> */}
                        </div>
                    </div>
                ))
            }
            
        </section>
    )
}

export default Education
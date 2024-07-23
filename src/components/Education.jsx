const Education = () => {

    return (
        <section id="Education" className="m-auto w-autow-full mx-auto py-4 md:py-4 w-full lg:max-w-3xl md:max-w-2xl">
            <h1 className="text-center font-bold text-3xl my-8 dark:text-white">Educación</h1>

            <div className="relative pb-4 dark:text-white">
                <div className="sticky top-0">
                    {/* Contenido */}
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400">Estudiante de Ingeniería de Software</h3>
                    <h4 className="font-semibold text-xl text-gray-600 dark:text-white">Universidad Nacional Mayor de San Marcos
                    </h4>
                    <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">Octubre 2020 - Actualidad</time>
                    <p className="text-lg">
                        Algunas asignaturas: Algoritmia, Estructura de datos, Base de datos, Arquitectura
                        de software, Calidad de software, Gestión de proyectos de software, etc.
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default Education
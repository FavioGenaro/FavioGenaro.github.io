const Experience = () => {

    return (
        <section id="Experience" className="m-auto w-autow-full mx-auto container py-4 md:py-4 w-full lg:max-w-3xl md:max-w-2xl">
            <h1 className="text-center font-bold text-3xl my-8 dark:text-white">Experiencia Laboral</h1>
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
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400">Practicante Pre-profesional del Área de TI comercial</h3>
                        <h4 className="font-semibold text-xl text-gray-600 dark:text-white">Luz del Sur</h4>
                        <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">Abril 2024 - Actualidad</time>
                        <p className="text-base">Mantenimiento de aplicaciones web y de escritorio .NET, modificación de datos usando SQL en base de datos Informix y análisis de requerimientos.</p>
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
}

export default Experience


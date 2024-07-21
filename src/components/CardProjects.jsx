import github from './../assets/github.svg'

const CardProjects = () => {

    return (
        <div>
            <article className="grid grid-cols-2 gap-4 dark:text-white h-">
                {/* imagen */}
                <div className="h-full">
                    <img src="https://www.pngall.com/wp-content/uploads/7/Gallery-PNG-Image-File.png" alt="" className="w-full h-60" />
                </div>
                {/* Descripción */}
                <div className='flex flex-col justify-between'>
                    <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
                        Task List App
                    </h3>
                    
                    {/* tecnologias */}
                    <div className='flex gap-2'>
                        <span>
                            React
                        </span>
                        <span>
                            Tailwind CSS
                        </span>
                    </div>
                    <p>Descripción
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quasi tempora iste quas. Itaque ex, repellendus, voluptas accusamus dignissimos eaque sequi nulla dolor velit ipsum vero rerum unde quis enim!
                    </p>
                    {/* Enlaces */}
                    <div className="flex gap-4 text-white">
                        <a href="https://github.com/FavioGenaro/task-app-context-reducer" 
                            className="p-2 bg-gray-800 border border-gray-600 rounded-xl flex gap-2">
                            <img src={github} alt="" />
                            <p>Code</p>
                        </a>
                        <a href="https://task-app-simple.netlify.app/"
                            className="p-2 bg-gray-800 border border-gray-600 rounded-xl flex gap-2">
                            <img src={github} alt="" />
                            Preview
                        </a>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default CardProjects
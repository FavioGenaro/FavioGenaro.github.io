import GithubIcon from '../assets/icons/GithubIcon'
import PreviewIcon from '../assets/icons/PreviewIcon'
import image1 from '../assets/images/taskListApp.webp'

const CardProjects = () => {

    // https://www.pngall.com/wp-content/uploads/7/Gallery-PNG-Image-File.png

    return (
        <div>
            <article className="grid sm:grid-cols-2 gap-8 dark:text-white">
                {/* imagen */}
                <div className="h-full rounded-3xl overflow-hidden">
                    <img src={image1} alt="" className="w-full h-60" />
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
                    <div className="flex gap-4 text-white mt-2">
                        <a href="https://github.com/FavioGenaro/task-app-context-reducer" 
                            className="p-2 bg-gray-800 border border-gray-600 rounded-xl flex gap-2">
                            <GithubIcon haveModeDark={false}/>
                            <p>Code</p>
                        </a>
                        <a href="https://task-app-simple.netlify.app/"
                            className="p-2 bg-gray-800 border border-gray-600 rounded-xl flex gap-2">
                            <PreviewIcon/>
                            Preview
                        </a>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default CardProjects
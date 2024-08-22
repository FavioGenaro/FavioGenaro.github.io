import GithubIcon from '../assets/icons/GithubIcon'
import PreviewIcon from '../assets/icons/PreviewIcon'
import TechnologiesItem from './TechnologiesItem'

const CardProjects = ({ image="https://www.pngall.com/wp-content/uploads/7/Gallery-PNG-Image-File.png",
                        title="Proyecto",
                        description="Descripcion",
                        repo="https://github.com/FavioGenaro?tab=repositories",
                        preview="https://faviogenaro.github.io/",
                        havePreview=false,
                        technologies=["React", "Tailwind CSS"]}) => {

    // https://www.pngall.com/wp-content/uploads/7/Gallery-PNG-Image-File.png

    return (
            <article className="grid sm:grid-cols-2 gap-8 dark:text-white mb-8 w-full sm:w-[90%] mx-auto md:w-full">
                {/* imagen */}
                <div className="h-full rounded-3xl overflow-hidden flex">
                    <img src={image} alt="" className="w-full h-60" />
                </div>
                {/* name */}
                <div className='flex flex-col justify-between'>
                    <div>
                        <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
                            {title}
                        </h3>
                        
                        {/* tecnologias */}
                        <div className='mt-2 flex gap-2'>
                            {
                                technologies.map((e)=>(
                                    <TechnologiesItem name={e}/>
                                ))
                            }
                        </div>
                        <p className='mt-4'>
                            {description}
                        </p>
                    </div>
                    
                    {/* Enlaces */}
                    <div className="flex gap-4 text-white mt-2">
                        <a href={repo} 
                            className="p-2 bg-gray-800 border border-gray-600 rounded-xl flex gap-2"
                            target="_blank"
                        >
                            <GithubIcon haveModeDark={false}/>
                            <p>Code</p>
                        </a>
                        {
                            havePreview && (
                                <a href={preview}
                                    className="p-2 bg-gray-800 border border-gray-600 rounded-xl flex gap-2"
                                    target="_blank"
                                >
                                    <PreviewIcon/>
                                    Preview
                                </a>
                            )
                        }
                        
                    </div>
                </div>
            </article>
    )
}

export default CardProjects
import foto from "../assets/cv-foto.webp"
import CvIcon from "../assets/icons/CvIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import MailIcon from "../assets/icons/MailIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";

const Profile = () => {

    return (
        <section id="Profile" className="m-auto w-autow-full mx-auto container profile-layout w-full lg:max-w-3xl md:max-w-2xl px-3 sm:px-0">
            <div className="image-state flex items-center justify-center sm:justify-normal flex-col sm:flex-row gap-4">
                <div className="image">
                    <img src={foto} alt="foto de perfil" className="rounded-full shadow-lg size-32" />
                </div>
                <div className="state px-3 py-1 text-sm text-green-900 bg-green-100 border-2 border-lime-400 rounded-full cursor-pointer mb-4 sm:mb-0">
                    <a href="https://www.linkedin.com/in/favio-saico">Desarrollador de software</a>
                </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
                Favio Saico
            </h1>
            <p className="mt-6 text-xl text-gray-800 dark:text-white">
                Bachiller en <strong>Ingeniería de Software</strong>. Especializado en el desarrollo de aplicaciones web frontend y backend.
            </p>
            <div className="contact py-4 sm:flex sm:gap-4 dark:text-white my-auto text-center">
                <a className="flex items-center justify-center gap-2 mt-2 sm:mt-0 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 border border-gray-300 rounded-full px-4 py-1" 
                    target="_blank"
                    href="https://www.linkedin.com/in/favio-saico/">
                    <LinkedinIcon/>
                    <p>LinkedIn</p>
                </a>
                <a className="flex items-center justify-center gap-2 mt-2 sm:mt-0 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 border border-gray-300 rounded-full px-4 py-1" 
                    target="_blank"
                    href="https://github.com/FavioGenaro">
                    <GithubIcon haveModeDark={true}/>
                    <p>GitHub</p>
                </a>
                <a className="flex items-center justify-center gap-2 mt-2 sm:mt-0 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 border border-gray-300 rounded-full px-4 py-1" 
                    target="_blank"
                    href="https://drive.google.com/file/d/199C8WFF1tEIVKEV_A3ukfSHNiPbgJ85V/view?usp=sharing">
                    <CvIcon/>
                    <p>CV</p>
                </a>
            </div>
            <div className="contact py-4 sm:flex sm:gap-4 dark:text-white my-auto text-center">
                <p><b>Contáctame:</b></p>
                <p className="flex items-center justify-center gap-2 mt-2 sm:mt-0">
                    <a href="mailto:faviogenarosaico@gmail.com" className="flex gap-1">
                        <MailIcon/>
                        <p>faviogenarosaico@gmail.com</p>
                    </a>
                </p>
                <p className="flex items-center justify-center gap-2 mt-2 sm:mt-0">
                    <a href="https://wa.me/51944380075" className="flex gap-1">
                        <PhoneIcon/>
                        <p>+51 944380075</p>
                    </a>
                </p>
            </div>

        </section>
    )
}

export default Profile;
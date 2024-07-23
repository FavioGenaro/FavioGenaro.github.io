
import { useEffect, useState } from 'react';
import menu from './../assets/menu.svg';
import close from './../assets/close.svg';
import moonIcon from '../assets/moon.svg'
import lightIcon from '../assets/light.svg'

const Header = () => {

    const initialState = () => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches || document.querySelector('#root').classList.contains('dark')){
            return "dark";
        }
        return "light";   
    }

    const [activado, setActivado] = useState(false);
    const [theme,setTheme] = useState(initialState)

    function clickMenu(e){
        setActivado(!activado);
    }

    function handleChangeTheme (){
        setTheme((theme === "light") ? "dark":"light")
    }

    useEffect(()=>{
        if(theme === "dark"){
            document.querySelector('#root').classList.add('dark')
        }else{
            document.querySelector('#root').classList.remove('dark')
        }
    }, [theme])

    // console.log(open)
    return (
        <div className="header-nav container fixed mx-auto dark:text-red-900 z-30">
            <div className='relative w-full flex sm:items-center sm:justify-center'>
                <div className="button">
                    <button className="sm:hidden p-2 mr-auto cursor-pointer" onClick={clickMenu}>
                        <img src={activado ? close : menu} alt="menu" className='w-12'/>
                    </button>
                </div>
                <nav className={`header ${activado ? 'header-open':'header-close'} transition-all duration-500 ease-in sm:opacity-100 sm:flex sm:flex-row sm:static sm:justify-center gap-0 sm:gap-4 font-medium`}>
                    <a href="#Profile" className="menu-item border-t" onClick={()=> setActivado(false)}>Inicio</a>
                    <a href="#AboutMe" className="menu-item" onClick={()=> setActivado(false)}>Sobre mí</a>
                    <a href="#Experience" className="menu-item" onClick={()=> setActivado(false)}>Experiencia</a>
                    <a href="#Education" className="menu-item" onClick={()=> setActivado(false)}>Educación</a>
                    <a href="#Projects" className="menu-item" onClick={()=> setActivado(false)}>Proyectos</a>
                    {/* <a href="#Contact" className="menu-item" onClick={()=> setActivado(false)}>Contacto</a> */}
                </nav>
                <div className="btn-theme dark:bg-slate-950 absolute right-0 p-2 rounded-full">
                    <button onClick={handleChangeTheme} className="border-2 dark:border-cyan-950 flex items-center gap-2 justify-center w-15 p-2 rounded-full">
                        <img src={(theme === 'dark') ? moonIcon : lightIcon} alt="" className="w-5 inline"/>
                        {/* {(theme === 'dark')?<moonIcon/>:<lightIcon/>} */}
                        {/* <span className='inline'>{(theme === 'dark') ? "Dark mode" : "Light mode"}</span> */}
                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default Header
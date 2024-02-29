import { useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-white"></div>
      
      <div className='w-full flex justify-center'>
        <Header/>
        <Profile/>
        {/* <Hero/>
        <Hero/> */}
        {/* <p className='text-white'>Hola</p> */}
      </div>
    </>
  )
}

export default App

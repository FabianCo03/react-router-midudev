import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function HomePage() {
  return (
    <>
    <h1>Estás en Home</h1>
    <p>Página de ejemplo para react router</p>
    <a href="/about">Sobre mí</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hola! me llamo Fabián y estoy creando mi primer React Router</p>
      <div>
        <img src="https://pbs.twimg.com/profile_images/1424599144627380226/Ty7fEdbn_400x400.jpg" alt="Foto perfil Twitter FabianCo03" />
      </div>
      <a href="/">Ir al Home</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <>
      <main>
        {currentPath === '/' && <HomePage />}
        {currentPath === '/about' && <AboutPage />}
      </main>
    </>
  )
}

export default App

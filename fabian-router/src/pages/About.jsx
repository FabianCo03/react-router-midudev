import { navigate } from '../Link'
import '../styles/About.css'

export default function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hola! me llamo Fabián y estoy creando mi primer React Router</p>
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1424599144627380226/Ty7fEdbn_400x400.jpg"
            alt="Foto perfil Twitter FabianCo03"
          />
        </div>
        <button onClick={() => navigate("/")} href="/">
          Ir al Home
        </button>
        <section className='buttons-social-network'>
          <a href="https://www.linkedin.com/in/fabi%C3%A1n-camilo-orjuela-moncada-0742241b5/" className='fa fa-linkedin'></a>
          <a href="https://github.com/FabianCo03" className='fa fa-github'></a>
          <a href="https://twitter.com/FabianCo03" className='fa fa-twitter'></a>
          <a href="https://www.instagram.com/fabianco03/" className='fa fa-instagram'></a>
        </section>
      </>
    );
  }
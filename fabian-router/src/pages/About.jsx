import { Link } from '../Link'
import '../styles/About.css'

export default function AboutPage() {
    return (
      <>
        <h1>Me</h1>
        <p>Hola! me llamo Fabián y estoy creando mi primer React Router</p>
        <p>🤪</p>

        <Link to='/'>Ir a Home</Link>
        <section className='buttons-social-network'>
          <a href="https://www.linkedin.com/in/fabi%C3%A1n-camilo-orjuela-moncada-0742241b5/" className='fa fa-linkedin' target='_blank'></a>
          <a href="https://github.com/FabianCo03" className='fa fa-github' target='_blank'></a>
          <a href="https://twitter.com/FabianCo03" className='fa fa-twitter' target='_blank'></a>
          <a href="https://www.instagram.com/fabianco03/" className='fa fa-instagram' target='_blank'></a>
        </section>
      </>
    );
  }
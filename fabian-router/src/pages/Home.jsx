import { Link } from '../Link'
import '../styles/Home.css'

export default function HomePage() {
    return (
    <>
        <h1>Estás en Home</h1>
        <p>Página de ejemplo para react router</p>
        <Link to='/about'>Sobre mí</Link>
      </>
    );
  }
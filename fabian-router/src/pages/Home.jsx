import { navigate } from '../Link'
import '../styles/Home.css'

export default function HomePage() {
    return (
    <>
        <h1>Estás en Home</h1>
        <p>Página de ejemplo para react router</p>
        <button onClick={() => navigate("/about")} href="/about">
          Sobre mí
        </button>
      </>
    );
  }
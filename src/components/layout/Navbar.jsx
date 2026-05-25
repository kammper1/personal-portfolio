import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={`${styles.navbar} glass`}>
      <nav>
        <ul className={styles.nav_list}>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#stack">Stack</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#experience">Experiencia</a>
          </li>
          <li>
            <a href="#education">Educación</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

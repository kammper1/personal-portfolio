import styles from "./Hero.module.css";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.badge} glass`}>
        <span className={styles.dot}></span>
        ¡Disponible para nuevos proyectos!
      </div>
      <h1 className={styles.name}>
        Kevin <span className="title_bg">Marquez</span>
      </h1>
      <h2 className={styles.subtitle}>
        Desarrollador Backend | Sistemas y automatizaciones que facilitan el
        trabajo.
      </h2>
      <p className={styles.about}>
        Construyo herramientas, APIs y sistemas pensados para automatizar
        procesos, ahorrar tiempo y hacer el trabajo más eficiente.
      </p>
      <SocialLinks />
    </section>
  );
}

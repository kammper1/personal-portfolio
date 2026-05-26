import styles from "./Stack.module.css";
import Technologies from "@/components/ui/Technologies";

export default function Stack() {
  return (
    <section className={styles.stack}>
      <p className="section_tag">S T A C K</p>
      <h2 className="section_title">
        <span className="title_bg">Tecnologías</span> con las que trabajo
      </h2>
      <p className="section_subtitle">
        Tecnologías que utilizo para desarrollar herramientas útiles, sistemas
        robustos y automatizaciones.
      </p>
      <Technologies />
    </section>
  );
}

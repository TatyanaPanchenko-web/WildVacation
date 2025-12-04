import style from "./features.module.scss";

export default function Features() {
  return (
    <section className={style.features}>
      <div className={style.container}>
        <h2 className={style["section-title"]}>Почему именно мы</h2>
        <div className={style["features-wrapper"]}>
          <div className={style.feature}>
            <img src="./icons/visa.svg" alt="visa" />
            <p>Визовая поддержка клиентов</p>
          </div>
          <div className={style.feature}>
            <img src="./icons/world.svg" alt="world" />
            <p>Направления по всему миру</p>
          </div>
          <div className={style.feature}>
            <img src="./icons/hunter.svg" alt="hunter" />
            <p>Сопровождение опытными гидами</p>
          </div>
          <div className={style.feature}>
            <img src="./icons/bbq.svg" alt="bbq" />
            <p>Полное обеспечение снаряжением</p>
          </div>
        </div>
      </div>
    </section>
  );
}

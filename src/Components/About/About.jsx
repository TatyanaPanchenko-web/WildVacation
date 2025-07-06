import style from "./about.module.scss";

export default function About() {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style["about-items"]}>
          <div className={style["about-item"]}>
            <div className={style.number}>9</div>
            <p>Лет работы</p>
          </div>
          <div className={style["about-item"]}>
            <div className={style.number}>1 500</div>
            <p>Довольных клиентов</p>
          </div>
          <div className={style["about-item"]}>
            <div className={style.number}>112</div>
            <p>Захватываюших туров</p>
          </div>
          <div className={style["about-item"]}>
            <div className={style.number}>3</div>
            <p>Офиса в Беларуси</p>
          </div>
        </div>
      </div>
    </div>
  );
}

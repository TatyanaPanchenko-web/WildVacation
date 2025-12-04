import SearchForm from "../SearchForm/SearchForm";
import style from "./content.module.scss";

export default function Content() {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style["content-wrapper"]}>
          <div className={style["content-text"]}>
            <h1 className={style.title}>Исследуйте мир вместе с нами</h1>
            <p className={style.subtitle}>
              Брось себе вызов. Отправься в путешествие в дикие уголки природы
            </p>
          </div>
          <div className={style["block-form"]}>
            <form className={style.form}>
              <p className={style["form-name"]}>Быстрый поиск тура</p>
              <SearchForm />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

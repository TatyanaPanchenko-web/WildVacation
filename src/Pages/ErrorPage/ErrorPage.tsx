import style from "./errorPage.module.scss";

export default function ErrorPage() {
  return (
    <div className={style["not-found"]}>
      <div className={style.container}>
        <div className={style["not-found-wrapper"]}>
          К сожалению, такой страницы не существует.
        </div>
      </div>
    </div>
  );
}

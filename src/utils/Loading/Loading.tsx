import style from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={style["loading-wrapper"]}>
      <div className={style["loading-inner"]}>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
      </div>
    </div>
  );
}

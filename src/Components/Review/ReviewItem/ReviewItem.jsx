import style from "./reviewItem.module.scss";

export default function ReviewItem({ img, text, name, position }) {
  return (
    <div className={`${style["review-wrapper"]} ${style[position]}`}>
      <img src={img} alt="review" />
      <div className={style["review-text"]}>{text}</div>
      <div className={style.name}>{name}</div>
    </div>
  );
}

import style from "./reviewItem.module.scss";

type ReviewItemPropsType = {
  img: string;
  text: string;
  name: string;
  position: string;
};
export default function ReviewItem({
  img,
  text,
  name,
  position,
}: ReviewItemPropsType) {
  return (
    <div className={`${style["review-wrapper"]} ${style[position]}`}>
      <img src={img} alt="review" />
      <div className={style.name}>{name}</div>
      <div className={style["review-text"]}>{text}</div>
    </div>
  );
}

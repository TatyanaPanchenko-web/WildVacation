import { NavLink } from "react-router-dom";
import style from "./blogItemLadge.module.scss";

type BlogItemLadgeProps = {
  id: string;
  title: string;
  date: string;
  img: string;
};
export default function BlogItemLadge({
  id,
  title,
  date,
  img,
}: BlogItemLadgeProps) {
  return (
    <NavLink to={`/blogpost/${id}`} className={style["blog-large"]}>
      <img src={img} alt={title} />
      <div className={style.about}>
        <p>{title}</p>
        <span>{date}</span>
      </div>
    </NavLink>
  );
}

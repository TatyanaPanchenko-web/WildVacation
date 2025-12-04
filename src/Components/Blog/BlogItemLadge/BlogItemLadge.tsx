import { NavLink } from "react-router-dom";
import { BlogElementType } from "../../../redux/slices/blogItems/types";
import style from "./blogItemLadge.module.scss";

export default function BlogItemLadge({
  id,
  title,
  date,
  img,
}: BlogElementType) {
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

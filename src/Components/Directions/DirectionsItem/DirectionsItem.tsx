import { NavLink } from "react-router-dom";
import { DirectionsElementType } from "../../../redux/slices/directionsSlice";
import style from "./directionsItem.module.scss";

export default function DirectionsItem({
  id,
  title,
  description,
  price,
  date,
  img,
  duration,
}: DirectionsElementType) {
  return (
    <NavLink to={`/tour/${id}`} className={style.direction}>
      <div className={style["direction-img"]}>
        <img src={img} alt={title} />
        <div className={style["direction-meta"]}>
          <p className={style.price}>
            <span>от</span> {price}
          </p>
          <p className={style.date}>
            {date}, {duration}
          </p>
        </div>
      </div>
      <div className={style["direction-inner"]}>
        <h3>{title}</h3>
        <p className={style.text}>{description}</p>
        <div className={style.link}>Подробнее</div>
      </div>
    </NavLink>
  );
}

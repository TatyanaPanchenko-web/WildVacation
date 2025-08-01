import { NavLink } from "react-router-dom";
import style from "./blogItem.module.scss";
import { BlogElementType } from "../../../redux/slices/blogItemsSlice";

export default function BlogItem({
  id,
  title,
  description,
  likes,
  date,
  img,
}: BlogElementType) {
  return (
    <NavLink to={`/blogpost/${id}`} className={style["blog-item"]}>
      <div className={style["blog-img"]}>
        <img src={img} alt={title} />
      </div>
      <div className={style["blog-name"]}>{title}</div>
      <div className={style["blog-description"]}>{description}</div>
      <div className={style["blog-bottom"]}>
        <span className={style["blog-date"]}>{date}</span>
        <div className={style["blog-likes"]}>
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5155 5.5332C5.3445 5.16927 5.25 4.75387 5.25 4.29405C5.25 3.83423 5.3445 3.37256 5.5155 2.9394C5.68613 2.50586 5.93325 2.10047 6.23887 1.75282C6.54412 1.40555 6.90788 1.11493 7.31137 0.912042C7.71525 0.708048 8.15925 0.591797 8.625 0.591797C9.09075 0.591797 9.53475 0.685094 9.93863 0.853546C10.3425 1.02237 10.7059 1.26635 11.0111 1.56771C11.316 1.86908 11.5639 2.22819 11.7345 2.62693C11.9059 3.02529 12 3.46401 12 3.92383C12 4.38365 11.9055 4.82237 11.7345 5.22073C11.5639 5.61946 11.3168 5.97858 11.0111 6.27994C10.7063 6.58131 6.40387 10.4191 6 10.5879C5.59613 10.4191 1.29375 6.58131 0.9885 6.27994C0.68325 5.97858 0.436125 5.61946 0.265125 5.22073C0.0945 4.82237 0 4.38365 0 3.92383C0 3.46401 0.0945 3.02529 0.265125 2.62693C0.436125 2.22819 0.682875 1.86908 0.9885 1.56771C1.29375 1.26635 1.6575 1.02237 2.06138 0.853546C2.46487 0.685094 2.90887 0.591797 3.375 0.591797C3.84113 0.591797 4.28513 0.708048 4.68863 0.911302C5.0925 1.11493 5.45587 1.40518 5.7615 1.75245C6.06675 2.1001 6.31387 2.50549 6.48487 2.93903C6.6555 3.37256 6.75 3.83423 6.75 4.29405C6.75 4.75387 6.6555 5.16927 6.48487 5.5332C6.31387 5.89713 6.0675 6.20997 5.7615 6.46543"
              fill="currentColor"
            />
          </svg>
          <span>{likes}</span>
        </div>
      </div>
    </NavLink>
  );
}

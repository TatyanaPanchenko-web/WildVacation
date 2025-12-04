import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import {
  fetchAddBlogItems,
  selectBlogItems,
} from "../../redux/slices/blogItems/blogItemsSlice";
import style from "./blogPost.module.scss";

export default function BlogPost() {
  const [checkLike, setCheckLike] = useState(false);
  const { blogItems } = useSelector(selectBlogItems);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!blogItems || blogItems.length == 0) {
      dispatch(fetchAddBlogItems());
    }
  }, []);

  const { id } = useParams();

  const item = Array.isArray(blogItems)
    ? blogItems.find((obj) => obj.id === id)
    : undefined;

  if (!item) {
    return;
  }
  const { title, date, img, details, likes } = item;

  const handleClickLike = () => {
    if (checkLike) {
      setCheckLike(false);
      // setCountLike(countLike - 1);
    } else {
      setCheckLike(true);
      // setCountLike(countLike + 1);
    }
  };

  return (
    <div className={style.blog}>
      <div className={style.container}>
        <div className={style["blog-wrapper"]}>
          <h1 className={style["blog-title"]}>{title}</h1>

          <div className={style["blog-img"]}>
            <img src={`../../${img}`} />
          </div>
          <div className={style["blog-info"]}>
            <div className={style["blog-date"]}>{date}</div>
          </div>
          <div
            className={style["blog-details"]}
            dangerouslySetInnerHTML={{ __html: details }}
          ></div>
        </div>
      </div>
    </div>
  );
}

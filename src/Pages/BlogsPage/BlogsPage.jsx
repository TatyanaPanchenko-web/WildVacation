import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBlogItems,
  fetchAddBlogItems,
} from "../../redux/slices/blogItems/blogItemsSlice";
import BlogItem from "../../Components/Blog/BlogItem/BlogItem";
import Skeleton from "../../Components/Skeleton/Skeleton";
import style from "./blogPages.module.scss";

export default function BlogsPage() {
  const { blogItems, statusBlogItems } = useSelector(selectBlogItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAddBlogItems());
  }, []);
  return (
    <div className={style.blogs}>
      <div className={style.container}>
        <h1 className={style["blogs-title"]}>Статьи</h1>
        <div className={style["blogs-wrapper"]}>
          {statusBlogItems === "loading" && (
            <div className={style.skeleton}>
              {[...new Array(3)].map((_, index) => (
                <Skeleton key={index} />
              ))}
            </div>
          )}
          {statusBlogItems === "error" && (
            <div className={style.error}>Ошибка получения данных</div>
          )}
          {statusBlogItems === "success" &&
            blogItems.map((item) => {
              return <BlogItem key={item.title} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
}

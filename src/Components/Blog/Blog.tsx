import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import {
  fetchAddBlogItems,
  selectBlogItems,
  setDisplayMoreBlogItems,
} from "../../redux/slices/blogItems/blogItemsSlice";
import BlogItem from "./BlogItem/BlogItem";
import BlogItemLadge from "./BlogItemLadge/BlogItemLadge";
import Skeleton from "../Skeleton/Skeleton";
import style from "./blog.module.scss";

export default function Blog() {
  const { blogItems, limitBlogItems, statusBlogItems } =
    useSelector(selectBlogItems);
   const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAddBlogItems(limitBlogItems));
  }, [limitBlogItems, dispatch]);

  const handleLoadMore = () => {
    dispatch(setDisplayMoreBlogItems());
  };
  return (
    <section className={style.blog}>
      <div className={style.container}>
        <h2 className={style["section-title"]}>Наш блог</h2>
        <div className={style["blog-wrapper"]}>
          {statusBlogItems === "loading" &&
            [...new Array(3)].map((_, index) => <Skeleton key={index} />)}
          {(statusBlogItems === "error" || blogItems === "Not found") && (
            <div className={style.error}>Ошибка получения данных</div>
          )}
          {(statusBlogItems === "success" || blogItems !== "Not found") &&
            typeof blogItems === "object" &&
            blogItems.map((item, index) => {
              if (index % 3 === 0) {
                return <BlogItemLadge key={item.title} {...item} />;
              } else {
                return <BlogItem key={item.title} {...item} />;
              }
            })}
        </div>
        {limitBlogItems < 6 && blogItems !== "Not found" && (
          <button onClick={() => handleLoadMore()} className={style.btn}>
            Смотреть еще
          </button>
        )}
      </div>
    </section>
  );
}

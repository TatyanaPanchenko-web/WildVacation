import { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem/ReviewItem";
import arrReviews from "../../data/reviews.json";
import style from "./review.module.scss";

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let slider = setInterval(() => setCurrentIndex((prev) => prev + 1), 200000);
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);
  return (
    <section className={style.review}>
      <div className={style.container}>
        <h2 className={style["section-title"]}>Отзывы наших клиентов</h2>
        <div className={style["review-items"]}>
          {arrReviews.map((item, index) => {
            let position = "nextSlide";
            if (index === currentIndex) {
              position = "activeSlide";
            }
            if (
              index === currentIndex - 1 ||
              (currentIndex === 0 && index === arrReviews.length - 1)
            ) {
              position = "previousSlide";
            }
            if (currentIndex < 0) {
              setCurrentIndex(arrReviews.length - 1);
            }
            if (currentIndex > arrReviews.length - 1) {
              setCurrentIndex(0);
            }

            return <ReviewItem position={position} key={index} {...item} />;
          })}

          <button
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            className={`${style.arrow} ${style["arrow-left"]}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293" />
            </svg>
            <span className={"text-hidden"}>Previous review </span>
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            className={`${style.arrow} ${style["arrow-right"]}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
            </svg>
            <span className={"text-hidden"}>Next review </span>
          </button>
        </div>
      </div>
    </section>
  );
}

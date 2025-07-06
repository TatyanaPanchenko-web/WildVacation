import { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem/ReviewItem";
import style from "./review.module.scss";

export default function Review() {
  const arrReviews = [
    {
      img: "./main/review1.jpg",
      text: "Спасибо, что даете почувствовать себя сводобными! Ходили дважды, и каждый раз заряжались энергией на год вперед. Отдельное спасибо гиду Михаилу!",
      name: "Максим",
    },
    {
      img: "./main/review2.jpg",
      text: "Всё было организовано на высшем уровне: от выбора направления до оформления документов. Менеджеры были очень внимательными и профессиональными, помогли подобрать тур, идеально соответствующий моим пожеланиям и бюджету.",
      name: "Олег",
    },
    {
      img: "./main/review3.jpg",
      text: "Я в восторге, таких эмоций не испытывала никогда. Легкость, слиянеие с природой, умиротворение, свобода... Каждому надо исытать такие эмоции хоть раз в жизни. Спасибо, ребята, за вашу работу!",
      name: "Анна",
    },
    {
      img: "./main/review4.jpg",
      text: "Наш поход прошёл просто отлично! Особенно понравилось, что компания учитывала уровень подготовки участников и подбирала маршруты соответственно",
      name: "Максим",
    },

    {
      img: "./main/review5.jpg",
      text: "Виды — просто потрясающие: заснеженные вершины, зеленые долины и кристально чистые озера. Особенно запомнились ночевки в уютных кемпингах под звездами и моменты, когда мы достигали вершины после долгого подъема.",
      name: "Дмитрий",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let slider = setInterval(() => setCurrentIndex((prev) => prev + 1), 3000);
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

          <div
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
          </div>

          <div
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
          </div>
        </div>
      </div>
    </section>
  );
}

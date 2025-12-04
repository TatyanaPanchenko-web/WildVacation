import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import {
  fetchAddDirections,
  selectDirections,
  setDisplayMoreDirections,
} from "../../redux/slices/directions/directionsSlice";
import DirectionsItem from "./DirectionsItem/DirectionsItem";
import Skeleton from "../Skeleton/Skeleton";
import style from "./directions.module.scss";

export default function Directions() {
  const { directions, limitDirections, statusDirections } =
    useSelector(selectDirections);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAddDirections({ limitDirections }));
  }, [limitDirections, dispatch]);

  const handleLoadMore = () => {
    dispatch(setDisplayMoreDirections());
  };
  return (
    <section className={style.directions}>
      <div className={style.container}>
        <h2 className={style["section-title"]}>Актуальные направления</h2>
        <div className={style["directions-wrapper"]}>
          {statusDirections === "loading" &&
            [...new Array(3)].map((_, index) => <Skeleton key={index} />)}
          {(statusDirections === "error" || directions === "Not found") && (
            <div className={style.error}>Ошибка получения данных</div>
          )}
          {(statusDirections === "success" || directions !== "Not found") &&
            typeof directions === "object" &&
            directions.map((item) => {
              return <DirectionsItem key={item.id} {...item} />;
            })}
        </div>
        {limitDirections < 9 && directions !== "Not found" && (
          <button onClick={() => handleLoadMore()} className={style.btn}>
            Смотреть еще
          </button>
        )}
      </div>
    </section>
  );
}

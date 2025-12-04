import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import {
  fetchAddDirections,
  selectDirections,
  selectSearchValues,
} from "../../redux/slices/directions/directionsSlice";
import DirectionsItem from "../../Components/Directions/DirectionsItem/DirectionsItem";
import SearchForm from "../../Components/SearchForm/SearchForm";
import Skeleton from "../../Components/Skeleton/Skeleton";
import style from "./toursPage.module.scss";

export default function ToursPage() {
  const { directions, statusDirections } = useSelector(selectDirections);
  const { searchWhere, searchDuration, searchType } =
    useSelector(selectSearchValues);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!searchWhere && !searchDuration && !searchType) {
      dispatch(fetchAddDirections({}));
    }
  }, []);

  return (
    <div className={style.tours}>
      <div className={style.container}>
        <form className={style.form}>
          <SearchForm />
        </form>
        <div className={style["directions-wrapper"]}>
          {statusDirections === "loading" &&
            [...new Array(3)].map((_, index) => <Skeleton key={index} />)}
          {statusDirections === "error" && <div>Ошибка получения данных</div>}
          {directions === "Not found" && (
            <div>Туры с заданными параметрами не найдены</div>
          )}
          {statusDirections === "success" &&
            directions !== "Not found" &&
            Array.isArray(directions) &&
            directions.map((item) => {
              return <DirectionsItem key={item.title} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
}

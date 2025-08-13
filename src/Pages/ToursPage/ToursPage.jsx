import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const dispatch = useDispatch();
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
            directions.map((item) => {
              return <DirectionsItem key={item.title} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
}

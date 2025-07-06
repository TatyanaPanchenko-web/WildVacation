import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddDirections,
  selectDirections,
} from "../../redux/slices/directions/directionsSlice";
import DirectionsItem from "../../Components/Directions/DirectionsItem/DirectionsItem";
import SearchForm from "../../Components/SearchForm/SearchForm";
import Skeleton from "../../Components/Skeleton/Skeleton";
import style from "./toursPage.module.scss";

export default function ToursPage() {
  const { directions, statusDirections } = useSelector(selectDirections);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAddDirections({}));
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
          {statusDirections === "success" &&
            directions.map((item) => {
              return <DirectionsItem key={item.title} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
}

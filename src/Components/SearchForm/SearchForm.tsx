import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import {
  fetchAddDirections,
  setSearchValueWhere,
  setSearchValueDuration,
  setSearchValueType,
  clearSearchValue,
  selectSearchValues,
} from "../../redux/slices/directions/directionsSlice";
import style from "./searchForm.module.scss";

export default function SearchForm() {
  const { searchWhere, searchDuration, searchType } =
    useSelector(selectSearchValues);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      fetchAddDirections({
        searchWhere,
        searchDuration,
        searchType,
      })
    );
    // dispatch(clearSearchValue());
    navigate("/tours");
  };
  // useEffect(() => {
  //   handleSubmitForm();
  // }, []);

  return (
    <>
      <input
        onChange={(e) => {
          dispatch(setSearchValueWhere(e.target.value));
        }}
        className={style["input-where"]}
        type="text"
        placeholder="Куда"
        value={searchWhere}
      />
      <div className={style["input-duration-block"]}>
        <input
          onChange={(e) => {
            dispatch(setSearchValueDuration(e.target.value));
          }}
          className={style["input-duration"]}
          type="number"
          placeholder="Продолжительность"
          value={searchDuration}
        />
      </div>
      <select
        onChange={(e) => {
          dispatch(setSearchValueType(e.target.value));
        }}
        className={style["select-type"]}
        value={searchType}
      >
        <option value="type" hidden>
          Тип тура
        </option>
        <option value="поход">Поход</option>
        <option value="треккинг">Треккинг</option>
        <option value="кемпинг">Кемпинг</option>
        <option value="каякинг">Каякинг</option>
      </select>
      <input
        onClick={(e) => {
          handleSubmitForm(e);
        }}
        type="submit"
        value="Найти"
      />
    </>
  );
}

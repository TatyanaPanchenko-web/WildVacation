import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import {
  fetchAddDirections,
  selectDirections,
} from "../../redux/slices/directions/directionsSlice";
import ModalOrder from "../../Components/ModalOrder/ModalOrder";
import style from "./tour.module.scss";

export default function Tour() {
  const [openModalOrder, setOpenModalOrder] = useState(false);
  const { directions } = useSelector(selectDirections);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!directions || directions.length == 0) {
      dispatch(fetchAddDirections({}));
    }
  }, []);
  const { id } = useParams();
  const item = directions.find((obj) => obj.id == id);
  if (!item) {
    return;
  }
  const { title, description, price, date, img, details, duration, type } =
    item;

  const handleModal = () => {
    setOpenModalOrder(true);
  };
  return (
    <>
      <ModalOrder
        openModalOrder={openModalOrder}
        setOpenModalOrder={setOpenModalOrder}
      />
      <div className={style.tour}>
        <div className={style.container}>
          <div className={style["tour-wrapper"]}>
            <h1 className={style["tour-title"]}>{title}</h1>
            <div className={style["tour-block"]}>
              <div className={style["tour-img"]}>
                <img src={`../../${img}`} />
                <div className={style.type}>
                  <div>{type}</div>
                </div>
              </div>
              <div className={style["tour-about"]}>
                <div className={style["tour-about-inner"]}>
                  <div className={style["tour-info"]}>
                    <div className={style["tour-date"]}>
                      {date}, {duration}
                    </div>
                    <div className={style["tour-price"]}>
                      <span>от </span>
                      {price}
                    </div>
                  </div>
                  <div className={style["tour-description"]}>
                    {description}.
                  </div>
                </div>
                <button onClick={handleModal}>Забронировать тур</button>
              </div>
            </div>

            <div
              className={style["tour-details"]}
              dangerouslySetInnerHTML={{ __html: details }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

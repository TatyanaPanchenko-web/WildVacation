import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "../../utils/schema";
import normalizePhone from "../../utils/normalizePhone";
import { useAppDispatch } from "../../redux/store";
import { setDataOrders } from "../../redux/slices/forms/formsSlice";
import style from "./modalOrder.module.scss";

type ModalOrderProps = {
  openModalOrder: boolean;
  setOpenModalOrder: React.Dispatch<React.SetStateAction<boolean>>;
};
type FormValue = {
  name: string;
  count: number;
  phone: string;
};

export default function ModalOrder({
  openModalOrder,
  setOpenModalOrder,
}: ModalOrderProps) {
  const [submitForm, setSubmitForm] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValue>({
    mode: "onSubmit",
    resolver: yupResolver(orderSchema),
  });

  const dispatch = useAppDispatch();

  const submit: SubmitHandler<FormValue> = (data) => {
    dispatch(setDataOrders(data));
    setSubmitForm(true);
    reset();
  };

  const handleCloseIcon = () => {
    setOpenModalOrder(false);
    setSubmitForm(false);
  };

  return (
    <div className={`${style.modal} ${openModalOrder ? `${style.show}` : ""}`}>
      <form className={style.form} onSubmit={handleSubmit(submit)}>
        <div onClick={handleCloseIcon} className={style.close}></div>
        {!submitForm ? (
          <div className={style["form-wrapper"]}>
            <p className={style["form-title"]}>
              Укажите данные для бронирования тура
            </p>
            <input
              type="text"
              placeholder="Имя, фамилия"
              {...register("name", {
                required: true,
              })}
              aria-invalid={errors.name ? true : false}
            />
            {errors?.name?.message && (
              <span className={style.error}>{errors?.name?.message}</span>
            )}

            <input
              type="number"
              placeholder="Количество участников"
              {...register("count")}
              aria-invalid={errors.count ? true : false}
            />
            {errors?.count?.message && (
              <span className={style.error}>{errors?.count?.message}</span>
            )}
            <input
              type="tel"
              placeholder="+375 __ ___ __ __"
              {...register("phone")}
              aria-invalid={errors.phone ? true : false}
              onChange={(e) => {
                e.target.value = normalizePhone(e.target.value);
              }}
            />
            {errors?.phone?.message && (
              <span className={style.error}>{errors?.phone?.message}</span>
            )}

            <input type="submit" value="Забронировать тур" />
          </div>
        ) : (
          <div className={style["form-success"]}>
            Спасибо! Тур успешно забронирован. С Вами свяжется наш менеджер для
            подтверждения.
          </div>
        )}
      </form>
    </div>
  );
}

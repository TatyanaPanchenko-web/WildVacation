import { useState, useEffect } from "react";
import * as yup from "yup";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import style from "./modalOrder.module.scss";

type ModalOrderProps = {
  openModalOrder: boolean;
  setOpenModalOrder: React.Dispatch<React.SetStateAction<boolean>>;
};
type FormValue = {
  name: string;
  count: number;
  phone: number;
};

export default function ModalOrder({
  openModalOrder,
  setOpenModalOrder,
}: ModalOrderProps) {
  const [submitForm, setSubmitForm] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormValue>({
    // resolver:,
    // defaultValues: {
    //   count: 1,
    // },
  });
  const schema = yup.object().shape({
    name:yup.string().required("Поле обязательно для заполнения").min(3, "Имя должно иметь минимум 3 символа ")
  });
  console.log(errors);
  const submit: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };
  const error: SubmitErrorHandler<FormValue> = (data) => {
    console.log(data);
  };
  const checkName = () => {
    if (getValues.name < 4) {
      return "Имя должно быть больше 3 символов";
    }
    return true;
  };
  // useEffect(() => {
  //   const telRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  //   if (telRegex.test(telInput) || telInput === "") {
  //     setErrInput(false);
  //   } else {
  //     setErrInput(true);
  //   }
  // }, [telInput]);

  const handleCloseIcon = () => {
    setOpenModalOrder(false);
    setSubmitForm(false);
  };
  // const handleForm = (e) => {
  //   e.preventDefault();
  //   const telRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  //   if (telRegex.test(telInput)) {
  //     setSubmitForm(true);
  //     setTelInput("");
  //     setErrInput(false);
  //   } else {
  //     setErrInput(true);
  //   }
  // };
  // console.log(openModalOrder);
  return (
    <div className={`${style.modal} ${openModalOrder ? `${style.show}` : ""}`}>
      <form className={style.form} onSubmit={handleSubmit(submit, error)}>
        <div onClick={handleCloseIcon} className={style.close}></div>
        {!submitForm ? (
          <div className={style["form-wrapper"]}>
            <p className={style["form-title"]}>
              Укажите данные для бронирования тура
            </p>
            <input
              className={style.name}
              type="text"
              placeholder="Имя, фамилия"
              {...register("name", {
                required: true,
                validate: checkName,
              })}
              aria-invalid={errors.name ? true : false}
            />
            {errors.name ? (
              <span className={style.error}>
                Поле обязательно для заполнения
              </span>
            ) : (
              ""
            )}
            <input
              className={style.count}
              type="number"
              placeholder="Количество участников"
              {...register("count")}
            />
            <input
              className={style.phone}
              type="tel"
              placeholder="+375(__)___-__-__"
              required
              {...register("phone")}
              // value={telInput}
              // onChange={(e) => setTelInput(e.target.value)}
            />
            {/* {errInput && <p className={style.error}>Введите номер телефона</p>} */}

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

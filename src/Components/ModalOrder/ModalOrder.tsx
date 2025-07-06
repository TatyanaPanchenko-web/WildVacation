import { useState, useEffect } from "react";
import style from "./modalOrder.module.scss";

type ModalOrderProps = {
  openModalOrder: boolean;
  setOpenModalOrder: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ModalOrder({
  openModalOrder,
  setOpenModalOrder,
}: ModalOrderProps) {
  const [submitForm, setSubmitForm] = useState(false);
  const [telInput, setTelInput] = useState("");
  const [errInput, setErrInput] = useState(false);

  useEffect(() => {
    const telRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (telRegex.test(telInput) || telInput === "") {
      setErrInput(false);
    } else {
      setErrInput(true);
    }
  }, [telInput]);

  const handleCloseIcon = () => {
    console.log(3);
    setOpenModalOrder(false);
    setSubmitForm(false);
  };
  const handleForm = (e) => {
    e.preventDefault();
    const telRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (telRegex.test(telInput)) {
      setSubmitForm(true);
      setTelInput("");
      setErrInput(false);
    } else {
      setErrInput(true);
    }
  };
  console.log(openModalOrder);
  return (
    <div className={`${style.modal} ${openModalOrder ? `${style.show}` : ""}`}>
      <form className={style.form} onSubmit={(e) => handleForm(e)}>
        <div onClick={handleCloseIcon} className={style.close}></div>
        {!submitForm ? (
          <div className={style["form-wrapper"]}>
            <p className={style["form-name"]}>
              Укажите данные для бронирования тура
            </p>
            <input
              className={style["phone"]}
              type="text"
              placeholder="Имя, фамилия"
              required
              // value={}
              onChange={(e) => setTelInput(e.target.value)}
            />
            <input
              className={style["phone"]}
              type="number"
              placeholder="Количество участников"
              required
              // value={telInput}
              onChange={(e) => setTelInput(e.target.value)}
            />
            <input
              className={style.phone}
              type="tel"
              placeholder="+375(__)___-__-__"
              required
              value={telInput}
              onChange={(e) => setTelInput(e.target.value)}
            />
            {errInput && <p className={style.error}>Введите номер телефона</p>}

            <input
              // onClick={(e) => handleSubmitForm(e)}
              type="submit"
              value="Забронировать тур"
            />
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

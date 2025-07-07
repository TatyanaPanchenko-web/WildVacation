import { useState, useEffect } from "react";
import style from "./modalCall.module.scss";

type ModalCallProps = {
  openModalCall: boolean;
  setOpenModalCall: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalCall({
  openModalCall,
  setOpenModalCall,
}: ModalCallProps) {
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
    setOpenModalCall(false);
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

  return (
    <div className={`${style.modal} ${openModalCall ? `${style.show}` : ""}`}>
      <form className={style.form} onSubmit={(e) => handleForm(e)}>
        <div onClick={handleCloseIcon} className={style.close}></div>
        {!submitForm ? (
          <div className={style["form-wrapper"]}>
            <p className={style["form-title"]}>Нужна помощь?</p>
            <p className={style["form-subtitle"]}>
              Закажите обратный звонок и мы обязательно перезвоним через 10
              минут
            </p>
            <input
              className={style["phone"]}
              type="tel"
              placeholder="+375(__)___-__-__"
              required
              value={telInput}
              onChange={(e) => setTelInput(e.target.value)}
            />
            {errInput && <p className={style.error}>Введите номер телефона</p>}

            <textarea
              rows={7}
              className={style["content"]}
              placeholder="Оставьте Ваш вопрос"
            />
            <input
              // onClick={(e) => handleSubmitForm(e)}
              type="submit"
              value="Жду звонка!"
            />
          </div>
        ) : (
          <div className={style["form-success"]}>
            Спасибо! В течение 10 минут наш сотрудник свяжется с Вами для
            консультации.
          </div>
        )}
      </form>
    </div>
  );
}

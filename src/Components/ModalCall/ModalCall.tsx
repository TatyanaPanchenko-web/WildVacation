import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { callSchema } from "../../utils/schema";
import normalizePhone from "../../utils/normalizePhone";
import { useAppDispatch } from "../../redux/store";
import { setDataCalls } from "../../redux/slices/forms/formsSlice";
import style from "./modalCall.module.scss";

type ModalCallProps = {
  openModalCall: boolean;
  setOpenModalCall: React.Dispatch<React.SetStateAction<boolean>>;
};
type FormValue = {
  phone: string;
  question: string;
};
export default function ModalCall({
  openModalCall,
  setOpenModalCall,
}: ModalCallProps) {
  const [submitForm, setSubmitForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValue>({
    mode: "onSubmit",
    resolver: yupResolver(callSchema),
  });

  const dispatch = useAppDispatch();
  const submit: SubmitHandler<FormValue> = (data) => {
    dispatch(setDataCalls(data));
    setSubmitForm(true);
    reset();
  };

  const handleCloseIcon = () => {
    setOpenModalCall(false);
    setSubmitForm(false);
  };

  return (
    <div className={`${style.modal} ${openModalCall ? `${style.show}` : ""}`}>
      <form className={style.form} onSubmit={handleSubmit(submit)}>
        <div onClick={handleCloseIcon} className={style.close}></div>
        {!submitForm ? (
          <div className={style["form-wrapper"]}>
            <p className={style["form-title"]}>Нужна помощь?</p>
            <p className={style["form-subtitle"]}>
              Закажите обратный звонок и мы обязательно перезвоним через 10
              минут
            </p>
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
            <textarea
              rows={7}
              placeholder="Оставьте Ваш вопрос"
              {...register("question")}
              aria-invalid={errors.question ? true : false}
            />
            {errors?.question?.message && (
              <span className={style.error}>{errors?.question?.message}</span>
            )}
            {<input type="submit" value="Жду звонка!" />}
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

import * as yup from "yup";

export const orderSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Поле обязательно для заполнения")
    .min(3, "Минимум 3 символа"),
  count: yup
    .number()
    .max(20, "Максимум 20 участников")
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable(),
  phone: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^\+[0-9]{3}\s[0-9]{2}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/,
      "Некорректный формат"
    ),
});

export const callSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^\+[0-9]{3}\s[0-9]{2}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/,
      "Некорректный формат"
    ),
  question: yup
    .string()
    .trim()
    .required("Поле обязательно для заполнения")
    .min(10, "Минимум 10 символов"),
});

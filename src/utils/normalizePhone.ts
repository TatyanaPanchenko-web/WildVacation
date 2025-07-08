import parsePhoneNumberFromString from "libphonenumber-js";

const normalizePhone = (numberPhone: string) => {
  const numberPhoneValide = parsePhoneNumberFromString(numberPhone);
  if (!numberPhoneValide) {
    return numberPhone;
  }
  return numberPhoneValide.formatInternational();
};
export default normalizePhone;

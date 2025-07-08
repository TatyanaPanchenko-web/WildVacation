export interface FormSliceType {
  orders: FormsOrderElementType[];
  calls: FormsCalllementType[];
}

export type FormsOrderElementType = {
  name: string;
  count: number;
  phone: string;
};
export type FormsCalllementType = {
  phone: string;
  question: string;
};

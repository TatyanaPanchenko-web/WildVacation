export interface blogItemsSliceState {
  blogItems: BlogElementType[];
  limitBlogItems: number;
  statusBlogItems: "loading" | "success" | "error";
}
export type BlogElementType = {
  id: string;
  img: string;
  title: string;
  date: string;
  description: string;
  likes: Number;
  details: string;
};

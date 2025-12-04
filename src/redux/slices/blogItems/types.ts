export interface BlogItemsSliceType {
  blogItems: BlogElementType[] | string;
  limitBlogItems: number;
  statusBlogItems: "loading" | "success" | "error";
}
export type BlogElementType = {
  id: string;
  img: string;
  title: string;
  date: string;
  description: string;
  likes: number;
  details: string;
};

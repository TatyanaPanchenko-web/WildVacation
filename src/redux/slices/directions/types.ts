export interface DirectionsSliceType {
  directions: DirectionsElementType[];
  limitDirections: number;
  search: Record<string, string>;
  statusDirections: "loading" | "success" | "error";
}

export type DirectionsElementType = {
  id: string;
  title: string;
  directions: string[];
  description: string;
  price: string;
  date: string;
  img: string;
  type: string;
  duration: string;
  details: string;
};
export type Params = {
  limitDirections?: number;
  searchWhere?: string;
  searchDuration?: string;
  searchType?: string;
};

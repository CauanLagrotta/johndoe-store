import { data } from "../data";

export const getAllCategories = () => {
  return data.categories;
};

export const categoryById = (id: number) => {
  return data.categories.find((item) => item.id === id);
};

import axios from "axios";
import { GetItemType } from "__types__/services/services.types";


export const getAllCategoriesService = async () =>
  await axios.get("/api/categories");

export const getThisCategoryService = async ({ categoryId }:GetItemType) =>
  await axios.get(`/api/category/${categoryId}`);

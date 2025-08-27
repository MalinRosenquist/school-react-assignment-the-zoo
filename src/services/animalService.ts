import type { Animal } from "../models/Animal";
import { get } from "./serviceBase";

const url = "https://animals.azurewebsites.net/api/animals/";

export const getAllAnimals = async () => {
  const data = await get<Animal[]>(url);
  return data;
};

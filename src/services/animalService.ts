import type { Animal } from "../models/Animal";
import { get } from "./serviceBase";

const url = "https://animals.azurewebsites.net/api/animals/";

export const getAllAnimals = async () => {
  const data = await get<Animal[]>(url);
  return data;
};

export const getAnimalById = async (id: string) => {
  const data = await get<Animal>(`${url}` + `${id}`);
  return data;
};

import { createContext, type Dispatch } from "react";
import type { Animal } from "../models/Animal";
import type { AnimalsAction } from "../reducers/AnimalReducer";

// Definition of type in context
type AnimalContextType = {
  animals: Animal[];
  dispatch: Dispatch<AnimalsAction>;
};

// Creates the context with a default value
export const AnimalContext = createContext<AnimalContextType>({
  animals: [],
  dispatch: () => {},
});

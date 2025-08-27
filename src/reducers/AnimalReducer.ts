import type { Animal } from "../models/Animal";

// Defines all possible action types name
export enum AnimalsActionTypes {
  SET_ANIMALS,
  FED_ANIMAL,
}

// Defines the action type
export type AnimalsAction = {
  type: AnimalsActionTypes;
  payload: string;
};

// Reducer function to handle changes to the animals state
export const AnimalReducer = (animals: Animal[], action: AnimalsAction) => {
  switch (action.type) {
    case AnimalsActionTypes.SET_ANIMALS:
      // Parse the JSON payload and replace the current animals state
      return action.payload;

    case AnimalsActionTypes.FED_ANIMAL: {
      // Update the animal with the matching ID to mark it as fed
      const updatedAnimal = animals.map((a) => {
        if (a.id === Number(action.payload)) {
          return { ...a, isFed: true, lastFed: new Date().toISOString() };
        }
        // Leave other animals unchanged
        return a;
      });

      // Save changes made to animal in localstorage
      localStorage.setItem("animals", JSON.stringify(updatedAnimal));

      return updatedAnimal;
    }

    default:
      // If the action type is unrecognized, return the current state unchanged
      return animals;
  }
};

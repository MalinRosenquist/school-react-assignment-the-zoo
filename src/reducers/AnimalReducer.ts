import type { Animal } from "../models/Animal";

// Defines all possible action types name
export enum AnimalsActionTypes {
  SET_ANIMALS,
  FED_ANIMAL,
  RESET_FED_STATUS,
}

// Defines the action type
export type AnimalsAction =
  | { type: AnimalsActionTypes.SET_ANIMALS; payload: Animal[] }
  | { type: AnimalsActionTypes.FED_ANIMAL; payload: string }
  | { type: AnimalsActionTypes.RESET_FED_STATUS };

// Reducer function to handle changes to the animals state
export const AnimalReducer = (animals: Animal[], action: AnimalsAction) => {
  switch (action.type) {
    case AnimalsActionTypes.SET_ANIMALS:
      // Replace the entire state with the new animals array from payload
      return action.payload;

    case AnimalsActionTypes.FED_ANIMAL: {
      // Update the animal with the matching ID to mark it as fed and update lastFed timestamp
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

    // If its been more than four hours since last fed, set isFed to false
    case AnimalsActionTypes.RESET_FED_STATUS: {
      const now = Date.now();
      const fourHours = 4 * 60 * 60 * 1000;

      const resetFed = animals.map((animal) => {
        const lastFedTime = new Date(animal.lastFed).getTime();
        if (animal.isFed && now - lastFedTime > fourHours) {
          return { ...animal, isFed: false };
        }
        return animal;
      });

      localStorage.setItem("animals", JSON.stringify(resetFed));
      return resetFed;
    }

    default:
      // If the action type is unrecognized, return the current state unchanged
      return animals;
  }
};

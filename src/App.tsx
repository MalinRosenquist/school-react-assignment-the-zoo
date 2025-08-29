import { RouterProvider } from "react-router";
import "./App.scss";
import { router } from "./Router";
import { AnimalContext } from "./contexts/AnimalContext";
import { useEffect, useReducer } from "react";
import { AnimalReducer, AnimalsActionTypes } from "./reducers/AnimalReducer";
import { getAllAnimals } from "./services/animalService";

function App() {
  // Set state of animals list with reducer
  const [animals, dispatch] = useReducer(AnimalReducer, []);

  // On initial load, check if animal data exists in localStorage
  // - If it exists, load from localStorage and reset feeding status if needed
  // - If not, fetch data from API, store it in localStorage, and reset feeding status
  useEffect(() => {
    const savedAnimals = localStorage.getItem("animals");

    if (savedAnimals) {
      const animalsFromStorage = JSON.parse(savedAnimals);
      dispatch({ type: AnimalsActionTypes.SET_ANIMALS, payload: animalsFromStorage });
      dispatch({ type: AnimalsActionTypes.RESET_FED_STATUS });
    } else {
      const getData = async () => {
        const animals = await getAllAnimals();
        localStorage.setItem("animals", JSON.stringify(animals));
        dispatch({ type: AnimalsActionTypes.SET_ANIMALS, payload: animals });
        dispatch({ type: AnimalsActionTypes.RESET_FED_STATUS });
      };
      getData();
    }
  }, []);

  console.log(animals);

  return (
    <>
      <AnimalContext.Provider value={{ animals, dispatch }}>
        <RouterProvider router={router}></RouterProvider>
      </AnimalContext.Provider>
    </>
  );
}

export default App;

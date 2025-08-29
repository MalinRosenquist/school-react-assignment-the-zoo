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

  // Fetching animals from API or LocalStorage
  // If local storage is empty, data will be fetched from an API
  useEffect(() => {
    const savedAnimals = localStorage.getItem("animals");

    if (savedAnimals) {
      const animalsFromStorage = JSON.parse(savedAnimals);
      dispatch({ type: AnimalsActionTypes.SET_ANIMALS, payload: animalsFromStorage });
      console.log("Fetching from localstorage");
    } else {
      const getData = async () => {
        const animals = await getAllAnimals();
        localStorage.setItem("animals", JSON.stringify(animals));
        dispatch({ type: AnimalsActionTypes.SET_ANIMALS, payload: animals });
        console.log("Fetching from API");
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

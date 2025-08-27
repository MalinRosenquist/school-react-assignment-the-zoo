import { RouterProvider } from "react-router";
import "./App.scss";
import { router } from "./Router";
import { AnimalContext } from "./contexts/AnimalContext";

function App() {
  return (
    <>
      <AnimalContext.Provider value={{ animals, dispatch }}>
        <RouterProvider router={router}></RouterProvider>
      </AnimalContext.Provider>
    </>
  );
}

export default App;

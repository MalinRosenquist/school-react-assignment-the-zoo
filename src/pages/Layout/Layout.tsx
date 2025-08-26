import "./Layout.scss";
import { Outlet } from "react-router";
import { Header } from "../../components/header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

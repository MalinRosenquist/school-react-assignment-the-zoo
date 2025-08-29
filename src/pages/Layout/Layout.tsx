import "./Layout.scss";
import { Outlet } from "react-router";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

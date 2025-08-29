import "./Layout.scss";
import { Outlet } from "react-router";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

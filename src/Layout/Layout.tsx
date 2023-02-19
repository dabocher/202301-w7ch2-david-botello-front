import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../Page/HomePage/HomePage";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main aria-label="Manage your robots">
        <HomePage />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

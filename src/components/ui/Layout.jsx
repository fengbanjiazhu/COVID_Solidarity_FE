import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ props }) {
  return (
    <>
      <Header {...props} />
      <main className="px-10 block md:flex min-h-[90vh] w-full md:w-[100vw] relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

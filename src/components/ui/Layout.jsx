import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ props }) {
  return (
    <div className="p-4">
      <Header {...props} />
      <main className="px-8 block md:flex min-h-[90vh] w-full md:w-[100vw] relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

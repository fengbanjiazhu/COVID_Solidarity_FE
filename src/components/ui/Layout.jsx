import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ props }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Header {...props} />
      <main className="px-10 block md:flex min-h-[90vh] w-full md:w-[100vw] relative">
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;

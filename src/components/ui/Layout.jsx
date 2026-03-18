import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ props }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Header {...props} />
      <main className="px-10 block md:flex min-h-[90vh] w-full md:w-[100vw] relative">
        <Outlet />
      </main>
      <Toaster position="top-center" />
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;

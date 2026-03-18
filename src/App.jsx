import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Venues from "./pages/Venues";
// import VenueDetail from "./pages/VenueDetail";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";

import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  const { loggedIn } = useContext(AppContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/venues" element={<Venues />} />
            {/* <Route path="/venues/:venueId" element={<VenueDetail />} /> */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />

            {!loggedIn && <Route path="/admin" element={<AdminLogin />} />}

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster position="top-center" gutter={12} containerStyle={{ margin: "1rem" }} />
    </>
  );
}

export default App;

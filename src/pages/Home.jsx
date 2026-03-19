import React from "react";
import { VenueSearch } from "../components/Venues/VenueSearch";
function Home() {
  return (
    <div className="w-full p-2">
      <h1 className="text-4xl mb-8">Home</h1>
      <VenueSearch />
    </div>
  );
}

export default Home;

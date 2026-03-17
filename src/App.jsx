import Navbar from './Components/Navbar'
import PropertyPage from './Components/PropertyPage'
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: 0,
    maxPrice: 10000000,
    search: ""
  });

  return (
    <>
      <Navbar setFilters={setFilters} />
      <PropertyPage filters={filters} />
    </>
  )
}

export default App

import Navbar from './Components/Navbar'
import PropertyPage from './Components/PropertyPage'
import About from './Components/About'
import { useState } from "react";
import Feedback from './Components/Feedback';
import Contact from './Components/Contact';

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
      <About />
      <Feedback />
      <Contact/>
    </>
  )
}

export default App

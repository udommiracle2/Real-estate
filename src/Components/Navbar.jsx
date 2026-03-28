import wallImg from '../Real-Estate-Images/video.mp4'
import logo from '../Real-Estate-Images/logo.png'
import { useState } from "react";
import { useEffect } from "react";


const Navbar = ({setFilters}) => {
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);
    const [minBedroom, setMinBedroom] = useState(0);
    const [maxBedroom, setMaxBedroom] = useState(10);
    const [minBathrooms, setMinBathrooms] = useState(0);
    const [maxBathrooms, setMaxBathrooms] = useState(10);
    const [setTitle] = useState("");


    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchValue = formData.get("search");
        setFilters({ location, type, category, minPrice, maxPrice, minBedroom, maxBedroom, minBathrooms, maxBathrooms, search: searchValue, title: searchValue });
    };



    const [openMenu, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!openMenu);
    };

    const handleMinChange = (e) => {
        const value = Number(e.target.value);
        if (value < maxPrice) {
            setMinPrice(value);
        }
    };

    const handleMaxChange = (e) => {
        const value = Number(e.target.value);
        if (value > minPrice) {
            setMaxPrice(value);
        }
    };


    const handleMinBedroom = (e) => {
        const value = Number(e.target.value);
        if (value < maxBedroom) {
            setMinBedroom(value);
        }
    };

    const handleMaxBedroom = (e) => {
        const value = Number(e.target.value);
        if (value > minBedroom) {
            setMaxBedroom(value);
        }
    };


    const handleMinBathrooms = (e) => {
        const value = Number(e.target.value);
        if (value < maxBathrooms) {
            setMinBathrooms(value);
        }
    };

    const handleMaxBathrooms = (e) => {
        const value = Number(e.target.value);
        if (value > minBathrooms) {
            setMaxBathrooms(value);
        }
    };


    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [openMenu]);

    return (
        <div>
            <section className="hero relative min-h-screen bg-cover">

                <video autoPlay muted loop className="absolute w-full h-full object-cover">
                    <source src={wallImg} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/35 flex flex-col justify-center items-center"></div>

                <header className="section relative text-(--btnColor) flex justify-between">
                    <div className="logo flex">
                        <img src={logo} className='h-10 rounded-[50%]' alt="" />
                        <h4 className='ml-1'>RealEstatePro</h4>
                    </div>

                    <nav className='hidden lg:flex justify-center items-center'>
                        <ul className="font-medium flex gap-6">
                            <li><a href="#">Home</a></li>
                            <li><a href="#property">Buy/Rent Properties</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#feedback">Feedback</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </nav>

                    <div onClick={toggleMenu} className="lg:hidden text-2xl cursor-pointer relative z-50">
                        <i className={`fa-solid ${openMenu ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </div>

                    <nav
                        className={`${openMenu ? 'flex' : 'hidden'} 
                            bg-black/95 fixed inset-0 w-full h-screen z-40 flex-col justify-center items-center lg:hidden`}
                    >
                        <ul className="openMenu flex flex-col font-medium p-6 gap-8 text-center text-white text-3xl">
                            <li onClick={toggleMenu}><a href="#">Home</a></li>
                            <li onClick={toggleMenu}><a href="#property">Buy/Rent Properties</a></li>
                            <li onClick={toggleMenu}><a href="#about">About Us</a></li>
                            <li onClick={toggleMenu}><a href="#feedback">Feedback</a></li>
                            <li onClick={toggleMenu}><a href="#contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </header>

                <div className="banner section relative text-center flex flex-col m-auto lg:w-[70%] relative z-10 text-(--btnColor)">
                    <div className="banner-desc">
                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">Discover your homes built on trust and elegance.</h2>
                        <p className='text-left mt-2 lg:text-center'>you are choosing more than a property.
                            You are choosing quality, trust, and excellence.
                            Let us help you find a place you truly belong.
                            A place that reflects your lifestyle and aspirations.
                            Your journey to a better home starts with us</p>
                    </div>
                </div>
                
                <div className="filter section relative text-(--btnColor) lg:gap-6">

                    <form className="block flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 flex-wrap items-start lg:items-center gap-4 justify-center" onSubmit={handleSearch}>

                        <div>
                            <label>Location</label><br />
                            <input
                                type="text"
                                placeholder="Enter your city"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="text-black mt-1 rounded-lg py-1 px-2 bg-white/20 backdrop-blur-md border border-white/30"
                            />
                        </div>

                        <div className='mt-2 lg:mt-0 md:mt-0'>
                            <label>Property Type</label><br />
                            <select
                                onChange={(e) => setType(e.target.value)}
                                className="px-2 py-1 mt-1 mr-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg">
                                <option value="">All</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                                <option>Plot</option>
                                <option>Office</option>
                                <option>Shop</option>
                            </select>
                            <select className='px-2 py-1 mt-2 mr-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg'
                                onChange={(e) => setCategory(e.target.value)}>
                                <option value="">All</option>
                                <option value="rent">Rent</option>
                                <option value="sale">Sale</option>
                            </select>
                        </div>

                        
                        <div className="slider flex flex-col justify-center items-start">
                            <label className="text-left">Price Range</label>

                            <div className="input flex">
                                <input

                                    type="range"
                                    min="0"
                                    max="10000000"
                                    value={minPrice}
                                    onChange={handleMinChange}
                                    className="cursor-pointer accent-gray-300"
                                />

                                <input
                                    type="range"
                                    min="0"
                                    max="10000000"
                                    value={maxPrice}
                                    onChange={handleMaxChange}
                                    className="cursor-pointer accent-gray-300"
                                />

                            </div>
                            <p className="text-center border mt-1 rounded-lg px-2">
                                ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}
                            </p>
                        </div>


                        <div className="slider flex flex-col justify-center items-start">
                            <label className="text-left">Bedroom</label>

                            <div className="input flex">
                                <input

                                    type="range"
                                    min="0"
                                    max="10"
                                    value={minBedroom}
                                    onChange={handleMinBedroom}
                                    className="cursor-pointer accent-gray-300"
                                />

                                <input
                                    type="range"
                                    min="0"
                                    max="10"
                                    value={maxBedroom}
                                    onChange={handleMaxBedroom}
                                    className="cursor-pointer accent-gray-300"
                                />

                            </div>
                            <p className="text-center border mt-1 rounded-lg px-2">
                                {minBedroom.toLocaleString()} - {maxBedroom.toLocaleString()}
                            </p>
                        </div>



                        <div className="slider flex flex-col justify-center items-start">
                            <label className="text-left">Bathroom</label>

                            <div className="input flex">
                                <input

                                    type="range"
                                    min="0"
                                    max="10"
                                    value={minBathrooms}
                                    onChange={handleMinBathrooms}
                                    className="accent-gray-300 cursor-pointer"
                                />

                                <input
                                    type="range"
                                    min="0"
                                    max="10"
                                    value={maxBathrooms}
                                    onChange={handleMaxBathrooms}
                                    className="accent-gray-300 cursor-pointer"
                                />

                            </div>
                            <p className="text-center border mt-1 rounded-lg px-2">
                                {minBathrooms.toLocaleString()} - {maxBathrooms.toLocaleString()}
                            </p>
                        </div>
                        

                        <div className="search py-3">
                            <input type="search" name="search" id="searchInput" value={search}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSearch(value);
                                    setTitle(value);
                                    
                                }}
                                placeholder='Search' className='searchInput mr-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg' />


                        </div>

                        <button
                            type="submit"
                            className="px-6 py-3 bg-[var(--btnBackground)] text-white rounded-lg hover:opacity-90 transition"
                        >
                            Search
                        </button>
                    </form>

            
                
                </div>
                
            </section>

            <div
                className="navigationTop"
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' });
                    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
                    document.body.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                <i className="fa-solid fa-arrow-up"></i>
            </div>
        </div>
    );
}

export default Navbar;
import wallImg from '../Real-Estate-Images/video.mp4'
import { useState } from "react";

const Navbar = () => {
    const [openMenu, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!openMenu);
    };

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);

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

    return (
        <div>
            <section className="hero relative min-h-screen bg-cover">

                <video muted loop className="absolute w-full h-full object-cover">
                    <source src={wallImg} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/35 flex flex-col justify-center items-center"></div>

                <header className="section relative z-10 text-(--btnColor) flex justify-between">
                    <div className="logo">
                        <h4>RealEstatePro</h4>
                    </div>

                    <nav className='hidden lg:flex justify-center items-center'>
                        <ul className="font-medium flex gap-6">
                            <li>Home</li>
                            <li><a href="#property">Buy/Rent Properties</a></li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>

                    <div onClick={toggleMenu} className="lg:hidden text-2xl cursor-pointer relative z-50">
                        <i className={`fa-solid ${openMenu ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </div>

                    <nav
                        className={`${openMenu ? 'flex' : 'hidden'} 
                            lg:hidden absolute bg-black/95 fixed inset-0 w-full h-screen z-40 flex-col justify-center items-center`}
                    >
                        <ul className="flex flex-col font-medium p-6 gap-8 text-center text-white text-3xl">
                            <li onClick={toggleMenu}>Home</li>
                            <li onClick={toggleMenu}>Buy/Rent Properties</li>
                            <li onClick={toggleMenu}>About Us</li>
                            <li onClick={toggleMenu}>Services</li>
                            <li onClick={toggleMenu}>Contact Us</li>
                        </ul>
                    </nav>
                </header>

                <div className="banner section relative text-center flex flex-col m-auto lg:w-[70%] relative z-10 text-(--btnColor)">
                    <div className="banner-desc">
                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">Discover your homes built on trust and elegance.</h2>
                        <p className='text-left lg:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit non nulla ullam.</p>
                    </div>
                </div>
                
                <div className="filter section relative text-(--btnColor) flex flex-col lg:flex-row justify-center items-center gap-6">

                    <form className="flex flex-col lg:flex-row items-start lg:items-center gap-4">

                        <div>
                            <label>Location</label><br />
                            <input
                                type="text"
                                placeholder="Enter your city"
                                id="location"
                                className="text-black mt-1 rounded-lg py-1 px-2 bg-white/20 backdrop-blur-md border border-white/30"
                            />
                        </div>

                        <div>
                            <label>Property Type</label><br />
                            <select className="px-2 py-1 mt-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg">
                                <option>-- Options --</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                                <option>Plot</option>
                                <option>Office</option>
                                <option>Shop</option>
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
                                    className="accent-(--fontColor) cursor-pointer"
                                />

                                <input
                                    type="range"
                                    min="0"
                                    max="10000000"
                                    value={maxPrice}
                                    onChange={handleMaxChange}
                                    className="accent-(--fontColor) cursor-pointer"
                                />

                            </div>
                            <p className="text-center border mt-1 rounded-lg px-2">
                                ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}
                            </p>
                        </div>

                    </form>

                    <div className="search py-3">
                        <input type="search" name="" id="searchInput" placeholder='Search' className='searchInput mr-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg' />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-[var(--btnBackground)] text-white rounded-lg hover:opacity-90 transition"
                        >
                            Search
                        </button>

                    </div>
                
                </div>
                
            </section>
        </div>
    );
}

export default Navbar;
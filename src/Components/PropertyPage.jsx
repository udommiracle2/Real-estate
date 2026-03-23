import { useState } from "react";
import data from "../data.json";

const PropertyPage = ({ filters }) => {

    const [gridBtn, listBtn] = useState("grid");

    const properties = data.properties;

    const [currentPage, setCurrentPage] = useState(1);

    const [selectedProperty, setSelectedProperty] = useState(null);

    const [formBtn, setFormBtn] = useState(null);

    const [currentImage, setCurrentImg] = useState(0);

    const propertiesPerPage = 6;


    const filteredProperties = properties.filter((property) => {

        const matchLocation = property.location.city
            .toLowerCase()
            .includes((filters.location || "").toLowerCase());

        const matchType = filters.type ? property.type === filters.type : true;

        const matchPrice =
            property.price >= (filters.minPrice ?? 0) &&
            property.price <= (filters.maxPrice ?? 10000000);

        const matchBedroom =
            property.specifications.bedrooms >= (filters.minBedroom ?? 0) &&
            property.specifications.bedrooms <= (filters.maxBedroom ?? 10);

        const matchBathrooms =
            property.specifications.bathrooms >= (filters.minBathrooms ?? 0) &&
            property.specifications.bathrooms <= (filters.maxBathrooms ?? 10);

        const matchSearch = property.title
            .toLowerCase()
            .includes((filters.search || "").toLowerCase());

        return matchLocation && matchType && matchPrice && matchBedroom && matchBathrooms && matchSearch;
    });

    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    const lastIndex = currentPage * propertiesPerPage;
    const firstIndex = lastIndex - propertiesPerPage;

    const currentProperties = filteredProperties.slice(firstIndex, lastIndex);



    return (
        <div className="section" id="property">
            <div className="flex justify-between items-center">
                <h2 className="mb-6">
                    Buy/Rent Properties
                </h2>

                <div className="view flex gap-3 text-xs">
                    <i onClick={() => listBtn("grid")} class="fa-solid fa-grip mr-1.5"></i>
                    <i onClick={() => listBtn("list")} class="fa-solid fa-list"></i>
                </div>
            </div>



            <div className={`${gridBtn === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-6"}`}>

                {currentProperties.map((property) => (

                    <div
                        key={property.id}
                        onClick={() => {
                            setSelectedProperty(property);
                            setCurrentImg(0);
                        }}
                        className="bg-white rounded shadow-sm overflow-hidden hover:shadow-md cursor-pointer transition"
                    >
                        <img src={property.thumbnail} alt={property.title} loading="lazy" className="w-full h-56 object-cover" />

                        <div className="p-4">

                            <div className="flex justify-between">
                                <h4 className="font-semibold">
                                    {property.title}
                                </h4>

                                <p className="font-semibold text-green-600">
                                    ${property.price.toLocaleString()}
                                </p>
                            </div>

                            <p className="text-gray-500 text-sm propertyLocation">
                                {property.location.area}, {property.location.city}, {property.location.address}
                            </p>

                            <p className="category font-medium text-[18px]">
                                Category: {property.category}
                            </p>

                            <div className="flex gap-3 mt-3 text-sm">

                                <span className="border px-2 py-1 rounded">
                                    <span className="font-semibold">Bedroom: </span> {property.specifications.bedrooms}
                                </span>

                                <span className="border px-2 py-1 rounded">
                                    <span className="font-semibold">Bathroom: </span> {property.specifications.bathrooms}
                                </span>

                                <span className="border px-2 py-1 rounded">
                                    <span className="font-semibold">Area: </span> {property.specifications.area} sqft
                                </span>

                            </div>

                        </div>

                    </div>


                ))}

            </div>



            <div className="flex justify-center gap-4 mt-10">

                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-1 py-1 rounded ${currentPage === index + 1 ? "bg-(--fontColor) text-(--btnColor)" : "bg-gray-200"}`}>
                        {index + 1}
                    </button>
                ))}

            </div>



            {selectedProperty && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                    <div className="bg-white rounded-lg w-[90%] max-w-xl p-6 relative overflow-y-auto lg:max-w-3xl h-[96%]">

                        <button onClick={() => { setSelectedProperty(null); setFormBtn(null); }} className="cancel absolute top-3 right-4 text-xl"><i class="fa-solid fa-xmark"></i></button>

                        <img
                            src={selectedProperty.images[currentImage]}
                            alt={selectedProperty.title}
                            className="w-full h-60 object-cover rounded"
                        />

                        <div className="carousel grid grid-cols-6 gap-2 mt-4">
                            {selectedProperty.images.map((img, index) => (

                                <img
                                    key={index} src={img} alt="" onClick={() => setCurrentImg(index)} className={`h-16 w-full object-cover rounded cursor-pointer border ${currentImage === index ? "border-black" : "border-transparent"}`} />

                            ))}
                        </div>

                        <h4 className="title text-xs font-semibold mt-4 mb-2">
                            {selectedProperty.title}
                        </h4>


                        <p className="type text-gray-500 mb-2 font-semibold">Type: {selectedProperty.type}</p>

                        <p className="fullDesc mb-2">
                            {selectedProperty.fullDescription}
                        </p>

                        <p className="address text-gray-500">
                            <span className="text-[20px] font-semibold text-(--fontColor)">Address: </span>{selectedProperty.location.area}, {selectedProperty.location.city}, {selectedProperty.location.address} <br />
                            <iframe src=""
                                width="400"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='w-full rounded-lg'
                                frameborder="0"></iframe>
                            <span className="text-(--fontColor) font-semibold">Lat:</span> {selectedProperty.location.coordinates.lat} <span className="text-(--fontColor) font-semibold">Long: </span>{selectedProperty.location.coordinates.lat}
                        </p>

                        <p className="text-green-600 font-semibold mt-2">
                            ${selectedProperty.price.toLocaleString()}
                        </p>


                        <p className="agent">
                            {selectedProperty.agent.name} <br />
                            {selectedProperty.agent.phone} <br />
                        </p>

                        <p className="propertySpec">
                            <span className="font-semibold">{selectedProperty.specifications.furnishing}</span> <br />
                            <span className="font-semibold">Amenities: </span>{selectedProperty.specifications.amenities}
                        </p>

                        <div className="flex gap-4 mt-4">

                            <span className="border px-2 py-1 rounded">
                                <span className="font-semibold">Bedroom: </span> {selectedProperty.specifications.bedrooms}
                            </span>

                            <span className="border px-2 py-1 rounded">
                                <span className="font-semibold">Bathroom: </span> {selectedProperty.specifications.bathrooms}
                            </span>

                            <span className="border px-2 py-1 rounded">
                                <span className="font-semibold">Area: </span> {selectedProperty.specifications.area} sqft
                            </span>

                        </div>

                        <button onClick={() => setFormBtn(true)} className="mt-2.5">Schedule a Visit</button>
                    </div>

                </div>
            )}

            {formBtn && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                    <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative">

                        {/* Close button */}
                        <button onClick={() => setFormBtn(false)} className="cancel absolute top-2 right-3 text-xl"><i class="fa-solid fa-xmark"></i></button>

                        <h4 className="text-lg font-semibold mb-4">
                            Schedule a Visit
                        </h4>

                        <form className="flex flex-col gap-3">
                            <input type="text" placeholder="Full Name" className="border p-2 rounded" />

                            <input type="email" placeholder="Email" className="border p-2 rounded" />

                            <input type="date" className="border p-2 rounded" name="" id="" />

                            <input type="time" className="border p-2 rounded" placeholder="Time" />

                            <textarea placeholder="Message" className="border p-2 rounded"></textarea>

                            <button className="bg-green-600 text-white py-2 rounded">Submit</button>
                        </form>

                    </div>
                </div>
            )}
        </div>
    );


};

export default PropertyPage;
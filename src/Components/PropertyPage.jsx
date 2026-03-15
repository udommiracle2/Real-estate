// import data from "../data.json";



// const DiscoverProperties = () => {

//     const properties = data.properties;

//     return (
//         <section className="section px-6 py-16">

//             <h3 className="text-3xl font-semibold mb-8">
//                 Buy/Rent Properties
//             </h3>


//             <div className="grid md:grid-cols-3 gap-8">

//                 {properties.slice(0, 12).map((property) => (

//                     <div
//                         key={property.id}
//                         className="bg-white rounded shadow-sm overflow-hidden hover:shadow-md transition"
//                     >
//                         <img src={property.thumbnail} alt={property.title} className="w-full h-56 object-cover"/>

//                         <div className="p-4">

//                             <div className="flex justify-between">
//                                 <h4 className="font-semibold">
//                                     {property.title}
//                                 </h4>

//                                 <p className="font-semibold text-green-600">
//                                     ${property.price.toLocaleString()}
//                                 </p>
//                             </div>

//                             <p className="text-gray-500 text-sm propertyLocation">
//                                 {property.location.area}, {property.location.city}, {property.location.address}
//                             </p>

//                             <p className="category font-medium text-[18px]">
//                                 Category: {property.category}
//                             </p>

//                             <div className="flex gap-3 mt-3 text-sm">

//                                 <span className="border px-2 py-1 rounded">
//                                     🛏 {property.specifications.bedrooms}
//                                 </span>

//                                 <span className="border px-2 py-1 rounded">
//                                     🛁 {property.specifications.bathrooms}
//                                 </span>

//                                 <span className="border px-2 py-1 rounded">
//                                     📐 {property.specifications.area} sqft
//                                 </span>

//                             </div>

//                         </div>

//                     </div>

//                 ))}

//             </div>

//         </section>
//     );
// };

// export default DiscoverProperties;








import { useState } from "react";
import data from "../data.json";

const PropertyPage = () => {
    const [gridBtn, listBtn] = useState("grid");

    const properties = data.properties;

    const [currentPage, setCurrentPage] = useState(1);

    const propertiesPerPage = 6;

    const lastIndex = currentPage * propertiesPerPage;
    const firstIndex = lastIndex - propertiesPerPage;

    const currentProperties = properties.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(properties.length / propertiesPerPage);

    return (
        <div className="section" id="property">
            <div className="flex justify-between items-center">
                <h3 className="mb-6">
                    Buy/Rent Properties
                </h3>

                <div className="view flex gap-3 text-xs">
                    <i onClick={() => listBtn("grid")} class="fa-solid fa-grip mr-1.5"></i>
                    <i onClick={() => listBtn("list")} class="fa-solid fa-list"></i>
                </div>
            </div>


            {/* Property Cards */}
            <div className={`${gridBtn === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-6" }`}>

                {currentProperties.map((property) => (

                    <div
                        key={property.id}
                        className="bg-white rounded shadow-sm overflow-hidden hover:shadow-md transition"
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
                                    🛏 {property.specifications.bedrooms}
                                </span>

                                <span className="border px-2 py-1 rounded">
                                    🛁 {property.specifications.bathrooms}
                                </span>

                                <span className="border px-2 py-1 rounded">
                                    📐 {property.specifications.area} sqft
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

        </div>
    );
};

export default PropertyPage;
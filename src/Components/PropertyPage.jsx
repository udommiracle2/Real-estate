import data from "../data.json";



const DiscoverProperties = () => {

    const properties = data.properties;

    return (
        <section className="section px-6 py-16">

            <h3 className="text-3xl font-semibold mb-8">
                Buy/Rent Properties
            </h3>


            <div className="grid md:grid-cols-3 gap-8">

                {properties.slice(0, 12).map((property) => (

                    <div
                        key={property.id}
                        className="bg-white rounded shadow-sm overflow-hidden hover:shadow-md transition"
                    >
                        <img src={property.thumbnail} alt={property.title} className="w-full h-56 object-cover"/>

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

        </section>
    );
};

export default DiscoverProperties;
'use client'
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {
    const { products } = useAppContext();
    const [tooltipId, setTooltipId] = useState(null);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
                <div className="flex flex-col items-end pt-12">
                    <p className="text-2xl font-medium">All products</p>
                    <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => setTooltipId(index)}
                            onMouseLeave={() => setTooltipId(null)}
                        >
                            <ProductCard product={product} />
                            {tooltipId === index && (
                                <div className="absolute top-2 left-2 z-20 bg-black bg-opacity-80 text-white text-xs rounded px-3 py-2 max-w-xs shadow-lg pointer-events-none">
                                    {product.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;

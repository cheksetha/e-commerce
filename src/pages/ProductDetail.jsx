import { useState } from 'react';
import { Link } from 'react-router';


function ProductDetail() {

    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);

    };

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-8 bg-white min-h-screen">

                {/* Breadcrumb Navigation */}
                <nav className="flex items-center text-sm text-gray-600 mb-8 font-medium">
                    <Link to="/" className="hover:text-black">Home</Link>
                    <span className="mx-2">&gt;</span>
                    <Link to="/product" className="hover:text-black">Product</Link>
                    <span className="mx-2">&gt;</span>
                    <span className="text-gray-900">The Red Lipstick is a classic and bold choice</span>
                </nav>

                {/* Main Product Container */}
                <div className="flex flex-col md:flex-row gap-10">

                    {/* Left Column: Product Image */}
                    <div className="flex-1 flex items-center justify-center p-8 border border-gray-100 rounded-lg shadow-sm">
                        <img
                            // Using placeholder image based on the reference design
                            src="https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
                            alt="Fjallraven Backpack"
                            className="w-full max-w-sm h-auto object-contain drop-shadow-md"
                        />
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex-1 flex flex-col justify-start pt-4">

                        <h3 className="uppercase font-bold text-gray-500 text-sm tracking-wider mb-2">
                           Lipstick
                        </h3>

                        <h1 className="text-3xl text-gray-900 mb-4 font-normal leading-snug">
                            The Red Lipstick is a classic and bold choice for adding a pop of color to your lips.
                        </h1>

                        <p className="text-2xl font-bold text-gray-900 mb-8">
                            109.95$
                        </p>

                        {/* Action Row: Quantity & Add to Cart */}
                        <div className="flex items-center gap-6 mb-8">

                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                    onClick={handleDecrease}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 font-medium border-l border-r border-gray-300">
                                    {quantity}
                                </span>
                                <button
                                    onClick={handleIncrease}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                                >
                                    +
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="bg-[#475166] hover:bg-[#343b4b] text-white px-8 py-2.5 rounded-md transition-colors font-medium shadow-sm">
                                Add to cart
                            </button>
                        </div>

                        {/* Divider */}
                        <hr className="border-gray-200 mb-6" />

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15
                            inches) in the padded sleeve, your everyday
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetail
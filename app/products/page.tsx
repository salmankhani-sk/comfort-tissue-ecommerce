import Header from "../_components/Header"
import Footer from "../_components/footer"
import Image from "next/image"
import { Button } from "@headlessui/react"
export default function Products(){
    return(
        <div>
            <Header/>
            <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Market Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Product 1 */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all">
                        <div className="grid grid-cols-1 gap-4">
                            <Image src="/img5-removebg-preview.png" width={500} height={500} alt="Product Image" className="rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-600"></h3>
                            <h2 className="text-2xl font-bold text-gray-800">Perfect Tissue Deluxe</h2>
                        </div>
                        <p className="text-gray-600 mt-4">
                            Experience the softness and durability with our Perfect Tissue Deluxe. Designed for maximum comfort and convenience.
                        </p>
                        <div className="grid grid-cols-2 gap-6 items-center py-6">
                        <h1 className="text-2xl font-bold text-gray-900">$5.99</h1>
                            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all">
                        <div className="grid grid-cols-1 gap-4">
                            <Image src="/img8.png" width={500} height={500} alt="Product Image" className="rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-600"></h3>
                            <h2 className="text-2xl font-bold text-gray-800">Luxury Soft Touch</h2>
                        </div>
                        <p className="text-gray-600 mt-4">
                            Indulge in the ultimate luxury with our soft touch tissues. Gentle on the skin, perfect for everyday use.
                        </p>
                        <div className="grid grid-cols-2 gap-6 items-center py-6">
                        <h1 className="text-2xl font-bold text-gray-900">$12.99</h1>
                            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all">
                        <div className="grid grid-cols-1 gap-4">
                            <Image src="/img11.avif" width={300} height={300} alt="Product Image" className="rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-600"></h3>
                            <h2 className="text-2xl font-bold text-gray-800">Ultra Comfort Tissue</h2>
                        </div>
                        <p className="text-gray-600 mt-4">
                            Our Ultra Comfort Tissue offers unmatched softness and strength, making it a must-have for your daily needs.
                        </p>
                        <div className="grid grid-cols-2 gap-6 items-center py-6">
                        <h1 className="text-2xl font-bold text-gray-900">$3.12</h1>
                            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all">
                        <div className="grid grid-cols-1 gap-4">
                            <Image src="/img14.jpeg" width={500} height={500} alt="Product Image" className="rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-600"></h3>
                            <h2 className="text-2xl font-bold text-gray-800">Perfect Tissue Deluxe</h2>
                        </div>
                        <p className="text-gray-600 mt-4">
                            Experience the softness and durability with our Perfect Tissue Deluxe. Designed for maximum comfort and convenience.
                        </p>
                        <div className="grid grid-cols-2 gap-6 items-center py-6">
                        <h1 className="text-2xl font-bold text-gray-900">$5.99</h1>
                            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all">
                        <div className="grid grid-cols-1 gap-4">
                            <Image src="/img13.webp" width={500} height={500} alt="Product Image" className="rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-600"></h3>
                            <h2 className="text-2xl font-bold text-gray-800">Luxury Soft Touch</h2>
                        </div>
                        <p className="text-gray-600 mt-4">
                            Indulge in the ultimate luxury with our soft touch tissues. Gentle on the skin, perfect for everyday use.
                        </p>
                        <div className="grid grid-cols-2 gap-6 items-center py-6">
                        <h1 className="text-2xl font-bold text-gray-900">$12.99</h1>
                            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all">
                        <div className="grid grid-cols-1 gap-4">
                            <Image src="/img12.webp" width={300} height={300} alt="Product Image" className="rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-600"></h3>
                            <h2 className="text-2xl font-bold text-gray-800">Ultra Comfort Tissue</h2>
                        </div>
                        <p className="text-gray-600 mt-4">
                            Our Ultra Comfort Tissue offers unmatched softness and strength, making it a must-have for your daily needs.
                        </p>
                        <div className="grid grid-cols-2 gap-6 items-center py-6">
                        <h1 className="text-2xl font-bold text-gray-900">$3.12</h1>
                            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all">
                        <div className="grid grid-cols-1 gap-4">
                            <Image src="/img9.jpeg" width={500} height={500} alt="Product Image" className="rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-600"></h3>
                            <h2 className="text-2xl font-bold text-gray-800">Perfect Tissue Deluxe</h2>
                        </div>
                        <p className="text-gray-600 mt-4">
                            Experience the softness and durability with our Perfect Tissue Deluxe. Designed for maximum comfort and convenience.
                        </p>
                        <div className="grid grid-cols-2 gap-6 items-center py-6">
                        <h1 className="text-2xl font-bold text-gray-900">$5.99</h1>
                            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all">
                        <div className="grid grid-cols-1 gap-4">
                            <Image src="/img4.jpeg" width={500} height={500} alt="Product Image" className="rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-600"></h3>
                            <h2 className="text-2xl font-bold text-gray-800">Luxury Soft Touch</h2>
                        </div>
                        <p className="text-gray-600 mt-4">
                            Indulge in the ultimate luxury with our soft touch tissues. Gentle on the skin, perfect for everyday use.
                        </p>
                        <div className="grid grid-cols-2 gap-6 items-center py-6">
                        <h1 className="text-2xl font-bold text-gray-900">$12.99</h1>
                            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all">
                        <div className="grid grid-cols-1 gap-4">
                            <Image src="/img1-removebg-preview.png" width={300} height={300} alt="Product Image" className="rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-600"></h3>
                            <h2 className="text-2xl font-bold text-gray-800">Ultra Comfort Tissue</h2>
                        </div>
                        <p className="text-gray-600 mt-4">
                            Our Ultra Comfort Tissue offers unmatched softness and strength, making it a must-have for your daily needs.
                        </p>
                        <div className="grid grid-cols-2 gap-6 items-center py-6">
                        <h1 className="text-2xl font-bold text-gray-900">$3.12</h1>
                            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    )
}
import { Button } from "@headlessui/react";
import Image from "next/image";

export default function Explore() {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto p-8 ">
    <div data-aos="zoom-out-right">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Explore Our Premium Collection
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Discover our range of premium tissues designed for every moment. From ultra-soft facial tissues to strong and durable paper towels, find the perfect match for your needs. Dive in to explore high-quality products crafted for your comfort and convenience.
      </p></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-6 text-center flex flex-col items-center hover:scale-105 transition-all">
          <Image src="/img12.webp" alt="Ultra-Soft Facial Tissues" width={200} height={200} className="object-contain" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Ultra-Soft Facial Tissues</h2>
          <p className="text-gray-600 mt-2">
            Experience unmatched softness with our ultra-soft facial tissues, perfect for sensitive skin and everyday use.
          </p>
          <Button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Order Now
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl  p-6 text-center flex flex-col items-center hover:scale-105 transition-all">
          <Image src="/img1-removebg-preview.png" alt="Durable Paper Towels" width={200} height={200} className="object-contain" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Durable Paper Towels</h2>
          <p className="text-gray-600 mt-2">
            Strong and absorbent, our durable paper towels are perfect for tackling spills and keeping your kitchen clean.
          </p>
          <Button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Order Now
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-6 text-center flex flex-col items-center hover:scale-105 transition-all">
          <Image src="/img14.jpeg" alt="Eco-Friendly Tissues" width={200} height={200} className="object-contain" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Eco-Friendly Tissues</h2>
          <p className="text-gray-600 mt-2">
            Choose sustainability with our eco-friendly tissues, made from recycled materials without compromising quality.
          </p>
          <Button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Order Now
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}

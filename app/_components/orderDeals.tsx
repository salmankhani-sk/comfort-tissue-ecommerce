import Image from "next/image";

export default function Deals() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-end">
            <Image src="/img15.avif" alt="Exclusive Deals" height={400} width={400} className="rounded-2xl shadow-lg"/>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Exclusive Deals Just for You</h1>
            <p className="text-lg text-gray-700">
              Discover our premium selection of tissue papers at unbeatable prices. Take advantage of our limited-time discounts and enjoy the perfect blend of quality and affordability.
            </p>
            <a
              href="/deals"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold hover:shadow-2xl hover:bg-blue-700 transition-colors duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

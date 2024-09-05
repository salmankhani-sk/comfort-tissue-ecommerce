import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            We would love to hear from you! Please reach out to us using the form below or through our contact information.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Contact Information */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Contact Information</h3>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-blue-500 w-6 h-6 mr-3" />
              <p className="text-gray-700">+92 3175566089</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-500 w-6 h-6 mr-3" />
              <p className="text-gray-700">salmank.developer@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 w-6 h-6 mr-3" />
              <p className="text-gray-700">123 Tissue Ave, Islamabad, Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

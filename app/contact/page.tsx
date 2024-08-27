import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch with Me!</h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Information */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex-1 transition-colors duration-300">
            <div className="mb-6">
              <FaMapMarkerAlt className="text-orange-500 inline-block mr-2" />
              <span className="font-semibold">Our Office:</span>
              <p className="ml-8">Abuja, Nigeria</p>
            </div>

            <div className="mb-6">
              <FaPhoneAlt className="text-orange-500 inline-block mr-2" />
              <span className="font-semibold">Contact Number:</span>
              <p className="ml-8">+2349041262600</p>
            </div>

            <div>
              <FaEnvelope className="text-orange-500 inline-block mr-2" />
              <span className="font-semibold">Email Us:</span>
              <p className="ml-8">ismailgrapix@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex-1 transition-colors duration-300">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ismail Muhammad"
                  className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="ismail.muhammad@bazeuniversity.edu.ng"
                  className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Write Your message"
                  className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 h-32 transition-colors duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-orange-500 hover:bg-slate-600 text-white rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
              >
                <span>Send Me Message</span>
                <FaEnvelope />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

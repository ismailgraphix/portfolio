import { FaRegCalendarAlt } from 'react-icons/fa';

export default function WorkAndEducation() {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        {/* Experience Section */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 p-2 rounded-md">
                <FaRegCalendarAlt className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">2021 - Present</p>
                <h3 className="text-lg font-semibold">Web Designer</h3>
                <p className="text-sm text-gray-500">Themeforest Market</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 p-2 rounded-md">
                <FaRegCalendarAlt className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">2021 - 2023</p>
                <h3 className="text-lg font-semibold">Marketing Expert GRP</h3>
                <p className="text-sm text-gray-500">Envato Theme Developer</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 p-2 rounded-md">
                <FaRegCalendarAlt className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">2021 - 2022</p>
                <h3 className="text-lg font-semibold">Web Designer</h3>
                <p className="text-sm text-gray-500">Web Developer & Business Partner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 p-2 rounded-md">
                <FaRegCalendarAlt className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">2013 - 2015</p>
                <h3 className="text-lg font-semibold">Bachelor Degree of Information Technology</h3>
                <p className="text-sm text-gray-500">State University Bangladesh</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 p-2 rounded-md">
                <FaRegCalendarAlt className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">2021 - 2024</p>
                <h3 className="text-lg font-semibold">Higher Secondary Education</h3>
                <p className="text-sm text-gray-500">Premium College United VC</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 p-2 rounded-md">
                <FaRegCalendarAlt className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">2020 - 2021</p>
                <h3 className="text-lg font-semibold">UI/UX Design</h3>
                <p className="text-sm text-gray-500">Webster College</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

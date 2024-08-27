import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import Image from 'next/image';
import profile from "../assets/418725678_6989818117751381_1300095682973859761_n.jpg";
import clientlogo from "../assets/client-logo-two-2.png";
import Projects from '@/components/ui/project-work';

export default function Profile() {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 lg:p-12 transition-colors duration-300">
        
        {/* Left Section - Profile Card */}
        <div className="lg:w-1/3 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-6 lg:mb-0 lg:mr-6 flex flex-col justify-between">
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full bg-orange-600 flex items-center justify-center overflow-hidden mb-4">
            <Image
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-15">Ismail Muhammad Adam</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">I am a Junior developer.</p>
          </div>
          <div className="flex space-x-4 justify-center">
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-orange-500"><FaDribbble /></a>
          </div>
        </div>

        {/* Right Section - Main Info and Companies */}
        <div className="lg:w-2/3 flex flex-col justify-between">
          {/* Main Info Section */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-6 h-full flex flex-col justify-between">
            <div>
              <p className="text-orange-500 dark:text-orange-400 mb-2">Hello There!</p>
              <h3  className="text-3xl mb-4 space-x-5">
                I&apos;m Ismail, a passionate and innovative Junior Developer with a
                 strong foundation in crafting seamless, user-focused digital experiences. 
              </h3>
              <p className="flex items-center mb-4">
                <span className="bg-green-500 w-3 h-3 rounded-full mr-2"></span>
                Available for Freelancing
              </p>
            </div>
            <div> 
              <button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white py-2 px-6 rounded-full flex items-center space-x-2 transition duration-300 ease-in-out">
                <span>Download CV</span>
                <span>↓</span>
              </button>
            </div>
          </div>

          {/* Company Logos Section */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
      <h3 className="text-xl mb-4">Companies I&apos;ve Worked With</h3>
      <div className="marquee-container overflow-hidden whitespace-nowrap">
        <div className="marquee flex items-center space-x-12 animate-marquee">
          <Image src={clientlogo} alt="Google" className="w-28" />
          <Image src={clientlogo} alt="Slack" className="w-28" />
          <Image src={clientlogo} alt="Amazon" className="w-28" />
          <Image src={clientlogo} alt="Walmart" className="w-28" />
          {/* Add more logos if needed */}
        </div>
      </div>
    </div>
        </div>
      </div>
      <Projects/>
    </>
  );
}

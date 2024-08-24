import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="bg-gray-800 p-6 rounded-lg flex-1 flex justify-center items-center h-full">
          <Image
            src="/path-to-your-image.jpg" 
            alt="Ismail"
            width={500} 
            height={500} 
            className="rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="bg-gray-800 p-6 rounded-lg flex-1 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-4xl font-bold mb-4">I’m Ismail, a junior developer.</h2>
            <p className="mb-4">
              I am a San Francisco-based product designer with a focus on web design, illustration, and visual development. I have a diverse range of experience having worked across various fields and industries.
            </p>
            <p className="mb-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
          </div>
          <div>
            <button className="bg-orange-500 hover:bg-slate-600 text-white py-3 px-9 rounded-md">
              Get in touch<FaEnvelope />
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

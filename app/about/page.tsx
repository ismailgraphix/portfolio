import Image from 'next/image';
import profile from '../../assets/418725678_6989818117751381_1300095682973859761_n.jpg';
import { FaEnvelope } from 'react-icons/fa';
import WorkAndEducation from '@/components/work-education';

export default function AboutMe() {
  return (
    <>
      <section className="py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-stretch gap-8">
          {/* Image Section */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex-1 h-full flex items-center justify-center">
            <Image
              src={profile}
              alt="Ismail"
              width={360} 
              height={350} 
              className="rounded-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex-1 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl mb-4">I&apos;m Ismail, a junior developer.</h2>
              <h3 className="mb-4 space-x-5">
                I&apos;m Ismail, a passionate and innovative Junior Developer with a
                strong foundation in crafting seamless, user-focused digital experiences. With a deep commitment to learning 
                and a relentless drive for excellence, I bring a fresh perspective to software development.
                <p>My journey is marked by hands-on experience in building dynamic web applications, solving complex problems, and delivering high-quality, maintainable code. I am constantly exploring new technologies and methodologies to enhance my skills and deliver solutions that not only meet but exceed user expectations.</p>
              </h3>
            </div>
            <div>
              <button className="bg-orange-500 hover:bg-slate-600 text-white py-3 px-9 rounded-md flex items-center gap-2">
                Get in touch<FaEnvelope />
              </button>
            </div>
          </div>
        </div>
        <WorkAndEducation />
      </section>
    </>
  );
}

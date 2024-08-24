"use client";

import Link from "next/link";



export default function Footer() {
  return (
    <footer className="p-4 flex flex-col items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Main content */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center w-full lg:w-2/3">
        <h2 className="text-xl lg:text-3xl font-semibold mb-4">
          Are You Ready to kickstart your project with a touch of magic?
        </h2>
        <p className="mb-6">
          Reach out and let&apos;s make it happen. ✨ I&apos;m also available for full-time or part-time opportunities to push the boundaries of design and deliver exceptional work.
        </p>
        <Link href={'/contact'}>   
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full">
          Let&apos;s Talk
        </button>
        </Link>
      </div>

      {/* Footer bottom */}
      <div className="mt-8 flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
        <span className="text-sm">&copy; 2024, <span className="text-orange-500">Ismail</span>. All Rights Reserved.</span>
        <span className="text-sm">Crafted with <span className="text-red-500">❤️</span> ismail grapix</span>
       
      </div>
    </footer>
  );
}

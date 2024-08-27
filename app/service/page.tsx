import { useState, useEffect } from 'react';

export default function ServicesSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <p className="text-2xl font-light text-center text-gray-900 dark:text-white">
          Services
        </p>
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
          Quality Services
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="text-gray-900 dark:text-white">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">
              Frontend Web development
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
              Ismail gives you the blocks & kits you need to create a true website within minutes.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="text-gray-900 dark:text-white">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M3 12h18m-9 5h9"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">
              Fullstack Web development
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
              Ismail gives you the blocks & kits you need to create a true website within minutes.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="text-gray-900 dark:text-white">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4 4m0 0l-4-4m4 4H3m6 0l4-4M3 20l4-4M3 4h8l7 7v6M7 8V4h4"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">
              Application Design
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
              Ismail gives you the blocks & kits you need to create a true website within minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

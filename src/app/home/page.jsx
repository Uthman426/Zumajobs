import React from "react";
export const metadata = {
           title: "Home",
      };


 const Homepage = () => {

  return (
    <div className="p-8 space-y-8">
      <div className="w-2/3 h-10 bg-red-500 text-white flex items-center justify-center">
        welcome home
      </div>

      <div className="relative bg-white rounded-lg shadow-md p-6 overflow-auto">
        {/* Top-right triangle */}
        <div className="absolute top-0 right-0   border-t-[120px] border-t-blue-700 border-l-[120px] border-l-transparent"></div>

        {/* Bottom-left triangle */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[60px] border-b-teal-700 border-r-[60px] border-r-transparent"></div>

        {/* Card content */}
        <h3 className="text-lg font-semibold">Junior Software Trainee</h3>
        <p className="text-gray-600">Berlin</p>

        <div className="mt-4">
          <button className="border border-teal-700 text-teal-700 px-4 py-2 rounded">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import React, { useState } from "react";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div style={{height: '80vh'}}
        className={`top-[12vh] left-0  w-[55vw] rounded-b-md bg-blue-600  p-10 pl-20 text-white fixed  z-40 ease-in-out duration-300 ${
          showSidebar ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          <nav>
            <ul>
              <li className="py-4">Link 1</li>
              <li className="py-4">Link 2</li>
              <li className="py-4">Link 3</li>
              <li className="py-4">Link 4</li>
            </ul>
          </nav>
        </h3>
      </div>
    </>
  );
}

export default Sidebar;

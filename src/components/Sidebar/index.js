import React, { useState } from "react";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* {showSidebar ? (
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
      )} */}

      <div className=" bg-pink-200 p-5 border-r overflow-y-scroll h-screen">
        <h3 className="cursor-pointer hover:text-red-900">I am a sidebar</h3>
        <h3 className="cursor-pointer hover:text-red-900">I am a sidebar</h3>
        <h3 className="cursor-pointer hover:text-red-900">I am a sidebar</h3>
        <h3 className="cursor-pointer hover:text-red-900">I am a sidebar</h3>
        <h3 className="cursor-pointer hover:text-red-900">I am a sidebar</h3>
      </div>
    </>
  );
}

export default Sidebar;

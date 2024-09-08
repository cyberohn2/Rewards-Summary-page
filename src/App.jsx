import React, { useState } from "react";
import CashoutOption from "./Components/CashoutOption";
import History from "./Components/History";
import Overview from "./Components/Overview";
import Sidebar from "./Components/Sidebar"; // Import Sidebar component

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="font-jakarta flex">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`transition-all duration-300 w-full p-6 `}>
        <h1 className="text-[rgb(8,112,167)] text-[28px] sm:text-[32px] lg:text-[48px] font-bold">Rewards</h1>
        <Overview />
        <CashoutOption />
        <History />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";


const Overview = () => {
    const [totalCashback, setTotalCashback] = useState(0);
    const [currentBalance, setCurrentBalance] = useState(0);
  
    useEffect(() => {
      const total = 30000; // Replace with actual data
      const balance = 10000; // Replace with actual data
  
      const interval = setInterval(() => {
        setTotalCashback((prev) => (prev < total ? prev + 300 : total));
        setCurrentBalance((prev) => (prev < balance ? prev + 100 : balance));
      }, 10);
  
      return () => clearInterval(interval);
    }, []);
  
    const formatAmount = (amount) => {
      return amount.toLocaleString("en-US", {
        minimumIntegerDigits: 3,
        useGrouping: true,
      });
    };
  
    return (
      <div className="mt-8">
        <h2 className="text-[rgb(14,30,39)] text-lg sm:text-xl font-bold mb-2">Overview</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 w-full">
          {/* Total Cashback */}
          <div className="flex-1 bg-white p-3 rounded-xl shadow-md border border-[rgb(196,221,234)] w-full">
            <p>Total Cashback</p>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">₦ {formatAmount(totalCashback)}</p>
            <p className="text-right">View History &gt;&gt;&gt;</p>
          </div>
  
          {/* Current Balance */}
          <div className="flex-1 bg-[rgb(196,221,234)] p-3 rounded-xl shadow-md border border-[rgb(196,221,234)] w-full">
            <p>Current Balance</p>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">₦ {formatAmount(currentBalance)}</p>
            <p className="text-right">Cash out &gt;&gt;&gt;</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Overview;
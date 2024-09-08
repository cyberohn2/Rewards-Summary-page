import React, { useEffect, useState } from "react";

const Overview = () => {
  const [totalCashback, setTotalCashback] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);

  useEffect(() => {
    // Fetch balances from the JSON file
    const fetchBalances = async () => {
      try {
        const response = await fetch('/data/balance.json'); 
        const data = await response.json();
        
        const total = data.totalCashback;
        const balance = data.currentBalance;

        // Simulate incremental loading
        const interval = setInterval(() => {
          setTotalCashback((prev) => (prev < total ? prev + 300 : total));
          setCurrentBalance((prev) => (prev < balance ? prev + 100 : balance));
        }, 10);

        // Clear interval when component unmounts
        return () => clearInterval(interval);

      } catch (error) {
        console.error("Error fetching balances:", error);
      }
    };

    fetchBalances();
  }, []);

  const formatAmount = (amount) => {
    return amount.toLocaleString("en-US", {
      minimumIntegerDigits: 3,
      useGrouping: true,
    });
  };

  return (
    <div className="my-8">
      <h2 className="text-[rgb(14,30,39)] text-lg sm:text-xl font-bold mb-2">Overview</h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 w-full">
        {/* Total Cashback */}
        <a href="#history" className="flex-1 bg-white p-3 rounded-xl hover:shadow-md hover:bg-gray-100 transition-all duration-200 ease-in-out border border-[rgb(196,221,234)] w-full cursor-pointer">
          <p className="font-semibold text-gray-700">Total Cashback</p>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">₦ {formatAmount(totalCashback)}</p>
          <p className="text-right text-gray-500 text-sm font-semibold">View History &gt;&gt;&gt;</p>
        </a>

        {/* Current Balance */}
        <a href="#cashout" className="flex-1 bg-[rgb(196,221,234)] hover:bg-gray-100 transition-all duration-200 ease-in-out p-3 rounded-xl hover:shadow-md border border-[rgb(196,221,234)] w-full cursor-pointer">
          <p className="font-semibold text-gray-700">Current Balance</p>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">₦ {formatAmount(currentBalance)}</p>
          <p className="text-right text-gray-500 text-sm font-semibold">Cash out &gt;&gt;&gt;</p>
        </a>
      </div>
    </div>
  );
};

export default Overview;

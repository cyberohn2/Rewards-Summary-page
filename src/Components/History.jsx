import { useState, useEffect } from 'react';
import checkIcon from '/check.svg'

const HistoryItem = ({ service, id, amount, date }) => {
  return (
    <div className="bg-white hover:bg-[rgb(232,243,252)] hover:shadow-md transition-all duration-200 ease-in-out border border-[rgb(196,221,234)] p-2 rounded-md flex items-center gap-4 mb-2">
      <div className="p-1 w-[50px] rounded aspect-square flex items-center justify-center bg-[rgb(49,142,192)]"><img src={checkIcon} width={20} /></div>
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="font-bold text-[rgb(14,30,39)]">{service}</p>
          <p className="text-gray-500 text-sm font-semibold">{id}</p>
        </div>
        <div>
          <p className="font-bold text-[rgb(14,30,39)]">+₦{amount}</p>
          <p className="text-gray-500 text-sm font-semibold">{date}</p>
        </div>
      </div>
    </div>
  );
};

const History = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the API
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/data/history.json');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div id='history'>
      <h1 className="text-[rgb(14,30,39)] text-lg sm:text-xl font-bold mb-2">History</h1>
      <div className="h-[40vh] overflow-y-scroll">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <HistoryItem
              key={transaction.bookingDetails.bookingId}
              service={transaction.bookingDetails.serviceName}
              id={transaction.bookingDetails.bookingId}
              amount={transaction.amountEarned}
              date={transaction.date}
            />
          ))
        ) : (
          <p className="text-gray-500">No transaction history available.</p>
        )}
      </div>
    </div>
  );
};

export default History;

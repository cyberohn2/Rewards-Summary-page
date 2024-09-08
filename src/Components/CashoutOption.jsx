import React, { useState } from 'react';

const CashoutOption = () => {
  const [showDirectCashoutModal, setShowDirectCashoutModal] = useState(false);
  const [showPromoCodeModal, setShowPromoCodeModal] = useState(false);
  const [promoCode, setPromoCode] = useState("PROMO1234");

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    alert("Promo code copied to clipboard!");
  };

  return (
    <div>
      <h1 className="text-[rgb(14,30,39)] text-lg sm:text-xl font-bold mb-2">Cashout</h1>
      <p className="mb-4">How do you want to cash out?</p>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Direct Cashout Button */}
        <button 
          className="bg-white p-3 rounded-xl shadow-md border border-[rgb(196,221,234)] hover:bg-gray-100 transition-all duration-200 ease-in-out w-full"
          onClick={() => setShowDirectCashoutModal(true)}
        >
          Direct Cashout
        </button>
        
        {/* Promo Codes Button */}
        <button 
          className="bg-[rgb(196,221,234)] p-3 rounded-xl shadow-md border border-[rgb(196,221,234)] hover:bg-gray-100 transition-all duration-200 ease-in-out w-full"
          onClick={() => setShowPromoCodeModal(true)}
        >
          Promo Codes
        </button>
      </div>

      {/* Direct Cashout Modal */}
      {showDirectCashoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Direct Cashout</h2>
            <form className="flex flex-col gap-4">
              <label>
                Amount
                <input type="number" className="block w-full p-2 border border-gray-300 rounded mt-1" />
              </label>
              <label>
                Bank Name
                <input type="text" className="block w-full p-2 border border-gray-300 rounded mt-1" />
              </label>
              <label>
                Account Name
                <input type="text" className="block w-full p-2 border border-gray-300 rounded mt-1" />
              </label>
              <label>
                Account Number
                <input type="text" className="block w-full p-2 border border-gray-300 rounded mt-1" />
              </label>
              <div className="flex justify-end gap-2 mt-4">
                <button 
                  type="button" 
                  className="bg-gray-300 p-2 rounded text-black"
                  onClick={() => setShowDirectCashoutModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-[rgb(8,112,167)] p-2 rounded text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Promo Codes Modal */}
      {showPromoCodeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Promo Codes</h2>
            <form className="flex flex-col gap-4">
              <label>
                Amount
                <input type="number" className="block w-full p-2 border border-gray-300 rounded mt-1" />
              </label>
              <label>
                Promo Code
                <div className="flex items-center">
                  <input 
                    type="text" 
                    value={promoCode} 
                    readOnly 
                    className="block w-full p-2 border border-gray-300 rounded mt-1"
                  />
                  <button 
                    type="button" 
                    className="bg-[rgb(8,112,167)] text-white p-2 rounded ml-2"
                    onClick={handleCopyCode}
                  >
                    Copy
                  </button>
                </div>
              </label>
              <div className="flex justify-end gap-2 mt-4">
                <button 
                  type="button" 
                  className="bg-gray-300 p-2 rounded text-black"
                  onClick={() => setShowPromoCodeModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-[rgb(8,112,167)] p-2 rounded text-white"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CashoutOption;

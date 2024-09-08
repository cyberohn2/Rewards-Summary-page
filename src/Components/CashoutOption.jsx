import { useState, useEffect } from 'react';

const CashoutOption = () => {
  const [showDirectCashoutModal, setShowDirectCashoutModal] = useState(false);
  const [showPromoCodeModal, setShowPromoCodeModal] = useState(false);
  const [promoCode, setPromoCode] = useState("PROMO1234");
  const [currentBalance, setCurrentBalance] = useState(0)
  
  const [formData, setFormData] = useState({
    amount: '',
    bankName: '',
    accountName: '',
    accountNumber: '',
    promoAmount: ''
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch balances from the JSON file
    const fetchBalances = async () => {
      try {
        const response = await fetch('/data/balance.json'); 
        const data = await response.json();
        setCurrentBalance(data.currentBalance)

      } catch (error) {
        console.error("Error fetching balances:", error);
      }
    };

    fetchBalances();
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    alert("Promo code copied to clipboard!");
  };
  const updateCode = (e) =>{
    setPromoCode( prev => prev = e.target.value)
  }

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.amount) {newErrors.amount = 'Amount is required';}
    else if (data.amount > currentBalance) {
        newErrors.amount = `Amount cannot exceed your current balance of ${currentBalance}`;
      }
    if (!data.promoAmount) {newErrors.amount = 'Amount is required';}
    else if (data.promoAmount > currentBalance) {
        newErrors.promoAmount = `Amount cannot exceed your current balance of ${currentBalance}`;
      }
    if (!data.bankName) newErrors.bankName = 'Bank Name is required';
    if (!data.accountName) newErrors.accountName = 'Account Name is required';
    if (!data.accountNumber) newErrors.accountNumber = 'Account Number is required';
    return newErrors;
  };

  const handleSubmitPromoCode = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (formData.promoAmount === '') {
      setErrors(prev => prev = {...validationErrors, promoAmount: "Amount is required"});
    }else if(formData.promoAmount > currentBalance){
        setErrors(prev => prev = {...validationErrors, promoAmount: `Amount cannot exceed your current balance of ${currentBalance}`});
    }
}

  const handleSubmitDirectCashout = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSuccessMessage('Cashout Successful!');
    setErrors({});
    setFormData({ amount: '', bankName: '', accountName: '', accountNumber: '', promoAmount: '' });

    setTimeout(() => {
      setShowDirectCashoutModal(false);
      setSuccessMessage('');
    }, 2000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id='cashout' className='my-8'>
      <h1 className="text-[rgb(14,30,39)] text-lg sm:text-xl font-bold ">Cashout</h1>
      <p className="text-gray-500 mb-4">How do you want to cash out?</p>
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
            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
            <form className="flex flex-col gap-4" onSubmit={handleSubmitDirectCashout}>
              <label>
                Amount
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.amount && <p className="text-red-600 text-sm">{errors.amount}</p>}
              </label>
              <label>
                Bank Name
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.bankName && <p className="text-red-600 text-sm">{errors.bankName}</p>}
              </label>
              <label>
                Account Name
                <input
                  type="text"
                  name="accountName"
                  value={formData.accountName}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.accountName && <p className="text-red-600 text-sm">{errors.accountName}</p>}
              </label>
              <label>
                Account Number
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.accountNumber && <p className="text-red-600 text-sm">{errors.accountNumber}</p>}
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
            <form className="flex flex-col gap-4" onSubmit={handleSubmitPromoCode}>
              <label>
                Amount
                <input
                  type="number"
                  name="promoAmount"
                  value={formData.promoAmount}
                  onChange={handleInputChange}
                  className="block w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.promoAmount && <p className="text-red-600 text-sm">{errors.promoAmount}</p>}
              </label>
              <label>
                Promo Code
                <div className="flex items-center">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={updateCode}
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

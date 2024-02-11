import React, { useState } from 'react';
import Lottie from "lottie-react";
import animation from "../assets/Animation - 1707601586553.json"
const RoundUpSavings = () => {
  const [currentAmount, setCurrentAmount] = useState(0);
  const [savingsAmount, setSavingsAmount] = useState(0);
  const [transactions, setTransactions] = useState([]); // State to hold the history of transactions
  const [currentTransaction, setCurrentTransaction] = useState(null); // State to hold the current transaction

  const handleChange = (event) => {
    const amount = parseFloat(event.target.value);
    setCurrentAmount(amount);
  };

  const calculateSavings = () => {
    const roundedAmount = Math.ceil(currentAmount);
    const savings = roundedAmount - currentAmount;
    setSavingsAmount(savings.toFixed(2));

    // Update the current transaction state
    const newTransaction = {
      amount: savings.toFixed(2),
      date: new Date().toLocaleDateString(),
    };
    setCurrentTransaction(newTransaction);

    // Update the list of transactions
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className=' grid grid-cols-2 my-8'>
    <div className=' bg-blue-50 rounded-2xl mx-32 py-10 px-10 w-[80vh] backdrop-blur-md'>
      <div className="">
        <h1 className="text-3xl font-bold flex  justify-start font-poppins mb-4">Round-Up Savings Calculator</h1>
        <div className="flex items-center mb-4">
          <label htmlFor="amount" className="mr-2 font-poppins">Current Amount:</label>
          <input
            type="number"
            id="amount"
            className="rounded border px-2 py-1 w-32"
            value={currentAmount}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-gradient hover:bg-blue-700 text-black font-bold py-2 px-4 mt-2 rounded font-poppins"
          onClick={calculateSavings}
        >
          Calculate Savings
        </button>
        {savingsAmount !== 0 && (
          <div className="mt-4">
            <p className="mb-2">You could save: <span className="font-bold font-poppins">${savingsAmount}</span></p>
            <p className="text-sm font-poppins">Rounding up to the nearest dollar.</p>
          </div>
        )}
      </div>
      {/* Display the current transaction */}
      {currentTransaction && (
        <div className="border rounded-md mb-4 my-6 w-96 font-poppins">
          <p>Rounded Amount: ${currentTransaction.amount}</p>
          <p>Date: {currentTransaction.date}</p>
        </div>
      )}
      {/* Display the history of transactions */}
      <div className=" font-poppins">
        <h2 className="text-xl font-bold mb-2 mt-8">Transaction History</h2>
        {transactions.map((transaction, index) => (
          <div key={index} className="border rounded-md mb-4 w-96">
            <p>Rounded Amount: ${transaction.amount}</p>
            <p>Date: {transaction.date}</p>
          </div>
        ))}
      </div>
      </div>


      <div className='border-l border-gray-300'>
      <Lottie className=" h-[70vh] mx-10" animationData={animation} />
      </div>
    </div>
  );
};

export default RoundUpSavings;

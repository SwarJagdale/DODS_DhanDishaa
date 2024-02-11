import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AutomatedSavings = () => {
  const [roundUpTransactions, setRoundUpTransactions] = useState([]);
  const [recurringDeposits, setRecurringDeposits] = useState([]);
  const userId = 'your_user_id'; // Replace with actual user ID

  useEffect(() => {
    // Fetch round-up transactions and recurring deposits data from API
    axios.get(`/api/users/${userId}`)
      .then(response => {
        setRoundUpTransactions(response.data.round_up_transactions);
        setRecurringDeposits(response.data.recurring_deposits);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [userId]);

  // Function to render round-up transactions
  const renderRoundUpTransactions = () => {
    return roundUpTransactions.map(transaction => (
      <div key={transaction.original_transaction_id} className="border rounded-md p-4 mb-4">
        <p>Rounded Amount: ${transaction.rounded_amount.toFixed(2)}</p>
        <p>Date: {new Date(transaction.date).toLocaleDateString()}</p>
      </div>
    ));
  };

  // Function to render recurring deposits
  const renderRecurringDeposits = () => {
    return recurringDeposits.map(deposit => (
      <div key={deposit._id} className="border rounded-md p-4 mb-4">
        <p>Amount: ${deposit.amount.toFixed(2)}</p>
        <p>Frequency: {deposit.frequency}</p>
        <p>Start Date: {new Date(deposit.start_date).toLocaleDateString()}</p>
        <p>End Date: {deposit.end_date ? new Date(deposit.end_date).toLocaleDateString() : 'No end date'}</p>
      </div>
    ));
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Round-Up Transactions</h2>
      {roundUpTransactions.length > 0 ? renderRoundUpTransactions() : <p>No round-up transactions found</p>}
      <h2 className="text-xl font-bold mb-4">Recurring Deposits</h2>
      {recurringDeposits.length > 0 ? renderRecurringDeposits() : <p>No recurring deposits found</p>}
    </div>
  );
};

export default AutomatedSavings;

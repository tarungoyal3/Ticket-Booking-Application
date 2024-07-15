import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase'; // Adjust the path to your firebase.js file

const UserTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      if (user) {
        fetchTransactions(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchTransactions = async (userId) => {
    const response = await fetch(`http://localhost:5000/user/${userId}/transactions`);
    const data = await response.json();
    setTransactions(data);
  };

  return (
    <div>
      <h2>Past Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              <p>Receipt: {transaction.receipt}</p>
              <p>Amount: ₹{transaction.amount / 100}</p>
              <p>Status: {transaction.status}</p>
              <p>Payment ID: {transaction.paymentId}</p>
              <p>Created At: {new Date(transaction.createdAt.seconds * 1000).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserTransactions;

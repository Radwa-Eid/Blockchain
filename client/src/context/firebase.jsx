import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import React, { useEffect, useState } from "react";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyD2jpTa4Iq1uESomfc_9FCxM-NmspZkXPs",
  authDomain: "final-49658.firebaseapp.com",
  projectId: "final-49658",
  storageBucket: "final-49658.appspot.com",
  messagingSenderId: "82014267783",
  appId: "1:82014267783:web:9c7cff4efd52211ca38b22",
  databaseURL: "https://final-49658-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const writeTransactionDataForArd = async (sender, receiver, amount, message, timestamp, keyword, index) => {
  try {

    const transactionsRef = database.ref('/');

    const transactionData = {
      ["sender" + index] : sender,
      ["receiver" + index]: receiver,
      ["amount" + index ]: amount,
      ["message" + index]: message,
      ["timestamp" + index]: timestamp,
      ["keyword" + index]: keyword
    };

    await transactionsRef.set(transactionData);
    console.log('Transaction data written to Firebase.');
  } catch (error) {
    console.log('Error writing transaction data to Firebase for arduino:', error);
  }
};
const writeTransactionData = async (sender, receiver, amount, message, timestamp, keyword) => {
  try {

    const transactionsRef = database.ref('transactionHistory');
    const newTransactionRef = transactionsRef.push();

    const transactionData = {
      sender : sender,
      receiver: receiver,
      amount: amount,
      message: message,
      timestamp: timestamp,
      keyword: keyword
    };

    await newTransactionRef.set(transactionData);
    console.log('Transaction data written to Firebase for history.');
  } catch (error) {
    console.log('Error writing transaction data to Firebase:', error);
  }
};
export { writeTransactionData , writeTransactionDataForArd };

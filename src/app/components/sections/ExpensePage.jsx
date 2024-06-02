"use client";
import React, { useState } from "react";
import { uploadZipFile } from "../../lib/actions";
import Link from "next/link";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpensePage = () => {
  const [file, setFile] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [maxBudget, setMaxBudget] = useState(""); // Default max budget
  const [transactions, setTransactions] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleMaxBudgetChange = (e) => {
    setMaxBudget(parseInt(e.target.value) || "");
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setTransactions([]);
    setTotalValue(0);
    setTotalTransactions(0);
    setError("");

    if (!file || !startDate) {
      setError("Please select a file and enter a start date.");
      return;
    }

    try {
      const result = await uploadZipFile(file, formatDate(startDate));
      setTransactions(result.transactions || []);
      setTotalValue(result.totalValue || 0);
      setTotalTransactions(result.totalTransactions || 0);
    } catch (error) {
      setError("Error uploading zip file. Please try again.");
    }
  };

  const handleRemoveTransaction = (index) => {
    const updatedTransactions = [...transactions];
    const removedTransaction = updatedTransactions.splice(index, 1)[0];
    setTransactions(updatedTransactions);
    setTotalValue(totalValue - removedTransaction.value);
    setTotalTransactions(totalTransactions - 1);
  };

  return (
    <div className="h-screen flex flex-col items-center  text-white p-6 mt-12">
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
        <div className="w-full md:w-1/3">
          <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#09C6F9] to-[#045DE9]">
            Upload Transactions
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg w-full"
          >
            <label className="flex flex-col">
              <span className="mb-2">Select Zip File:</span>
              <input
                type="file"
                onChange={handleFileChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r from-[#09C6F9] to-[#045DE9] text-gray-300 hover:file:bg-blue-500"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-2">Start Date:</span>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="dd-MM-yyyy"
                className="px-4 py-2 rounded-lg bg-gray-700 text-white"
                placeholderText="DD-MM-YYYY"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-2">Maximum Budget:</span>
              <input
                type="text"
                value={maxBudget}
                onChange={handleMaxBudgetChange}
                className="px-4 py-2 rounded-lg bg-gray-700 text-white"
                placeholder="Enter maximum budget"
              />
            </label>
            <button
              type="submit"
              className="py-2 px-4 rounded-full bg-gradient-to-br from-[#09C6F9] to-[#045DE9] text-white font-semibold"
            >
              Upload
            </button>
          </form>
          <div className="mt-6">
            <Link
              href={"/"}
              className="text-2xl md:text-xl text-white font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {transactions.length > 0 && (
            <>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    <CircularProgressbar
                      value={totalValue}
                      maxValue={maxBudget || 2500000} // Use the maximum budget value here
                      text={`IDR${totalValue.toLocaleString("id-ID")}`}
                      styles={buildStyles({
                        textColor: "#ffffff",
                        pathColor: "#09C6F9",
                        trailColor: "#045DE9",
                        textSize: "10px",
                      })}
                    />
                    <p className="mt-4 text-center">
                      Total Value: IDR{totalValue.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    <CircularProgressbar
                      value={totalTransactions}
                      maxValue={60} // Adjust this value based on your expected total transactions
                      text={`${totalTransactions}`}
                      styles={buildStyles({
                        textColor: "#ffffff",
                        pathColor: "#09C6F9",
                        trailColor: "#045DE9",
                        textSize: "10px",
                      })}
                    />
                    <p className="mt-4 text-center">
                      Total Transactions: {totalTransactions}
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-96 overflow-y-auto bg-gray-800 p-4 rounded-lg shadow-lg">
                {transactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="mb-4 p-4 bg-gray-700 rounded-lg shadow-lg flex justify-between items-center"
                  >
                    <div>
                      <p className="text-lg font-semibold">
                        {transaction.place}
                      </p>
                      <p className="text-sm text-gray-400">
                        {transaction.date}
                      </p>
                      <p className="text-lg font-bold">
                        IDR{transaction.value.toLocaleString("id-ID")}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveTransaction(index)}
                      className="py-1 px-3 rounded-full bg-red-500 text-white font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
          {error && (
            <div className="mt-4 p-4 bg-red-500 text-white rounded-lg shadow-lg">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpensePage;

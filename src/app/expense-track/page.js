"use client";
import React, { useState, useEffect } from "react";
import { uploadZipFile } from "../lib/actions";
import Link from "next/link";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Page = () => {
  const [file, setFile] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTransactions([]);
    setTotalValue(0);
    setError("");

    if (!file || !startDate) {
      setError("Please select a file and enter a start date.");
      return;
    }

    try {
      const result = await uploadZipFile(file, startDate);
      console.log("Result:", result); // Debugging line
      const lines = result.split("\n");
      const parsedTransactions = [];
      let total = 0;

      lines.forEach((line) => {
        const match = line.match(
          /Transaction \d+: Date: (\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}) Place: (.*?) Value: IDR([\d,.]+)/
        );
        if (match) {
          const [_, date, place, value] = match;
          const numericalValue = parseFloat(
            value.replace(/\./g, "").replace(",", ".")
          );
          parsedTransactions.push({ date, place, value: numericalValue });
          total += numericalValue;
        }
      });

      console.log("Parsed Transactions:", parsedTransactions); // Debugging line
      setTransactions(parsedTransactions);
      setTotalValue(total);
    } catch (error) {
      setError("Error uploading zip file. Please try again.");
    }
  };

  useEffect(() => {
    console.log("Transactions State Updated:", transactions); // Debugging line
    console.log("Total Value State Updated:", totalValue); // Debugging line
  }, [transactions, totalValue]);

  const data = {
    labels: transactions.map((t) => t.place),
    datasets: [
      {
        data: transactions.map((t) => t.value),
        backgroundColor: transactions.map(
          () => `hsl(${Math.random() * 360}, 100%, 75%)`
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#09C6F9] to-[#045DE9]">
        Upload Transactions
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
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
          <span className="mb-2">Start Date (dd-mm-yyyy):</span>
          <input
            type="text"
            value={startDate}
            onChange={handleDateChange}
            className="px-4 py-2 rounded-lg bg-gray-700 text-white"
            placeholder="DD-MM-YYYY"
          />
        </label>
        <button
          type="submit"
          className="py-2 px-4 rounded-full bg-gradient-to-br from-[#09C6F9] to-[#045DE9] text-white font-semibold"
        >
          Upload
        </button>
      </form>
      {transactions.length > 0 && (
        <div className="w-full max-w-2xl mt-6">
          <Pie data={data} options={options} />
          <div className="mt-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
            <p>Total Transactions: {transactions.length}</p>
            <p>Total Value: IDR{totalValue.toLocaleString("id-ID")}</p>
          </div>
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 bg-red-500 text-white rounded-lg shadow-lg">
          {error}
        </div>
      )}
      <div className="mt-6">
        <Link
          href={"/"}
          className="text-2xl md:text-xl text-white font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Page;

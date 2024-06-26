"use client";
import * as React from "react";
import { uploadZipFile } from "../../lib/actions";
import Link from "next/link";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const formatNumberWithCommas = (number) => {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const DatePickerDemo = ({ startDate, setStartDate }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal  ",
            !startDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {startDate ? (
            format(startDate, "dd-MM-yyyy")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-black">
        <Calendar
          mode="single"
          selected={startDate}
          onSelect={setStartDate}
          initialFocus
          className="custom-calendar" // Add this line
        />
      </PopoverContent>
    </Popover>
  );
};

const ExpensePage = () => {
  const [file, setFile] = React.useState(null);
  const [startDate, setStartDate] = React.useState(null);
  const [maxBudget, setMaxBudget] = React.useState(""); // Default max budget
  const [transactions, setTransactions] = React.useState([]);
  const [totalValue, setTotalValue] = React.useState(0);
  const [totalTransactions, setTotalTransactions] = React.useState(0);
  const [error, setError] = React.useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMaxBudgetChange = (e) => {
    const input = e.target.value.replace(/,/g, ""); // Remove existing commas
    const formattedInput = formatNumberWithCommas(input);
    setMaxBudget(formattedInput);
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
    <div className="w-screen flex flex-col items-center text-white py-6 mt-12 pl-12 pr-32">
      <div className="flex-col space-y-9 px-15">
        <h1 className="text-3xl w-3/3 font-semibold">About ExpenseTrack</h1>
        <h1 className="text-xl w-3/3 font-semibold glassmorphic-card2">
          ExpenseTrack is a personal W.I.P project that allows user to
          automatically track their personal expense from a certain txt file
          throughout a certain time range. It utilizes a txt compiler script
          that reads transactions history and automatically visualize those
          transactions
        </h1>
        <div className="flex flex-col md:flex-row space-x-10 w-full max-w-5xl">
          <div className="w-full md:w-1/3">
            <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text text-white">
              Upload Transactions
            </h1>
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-4 glassmorphic-card2"
            >
              <label className="flex flex-col">
                <span className="mb-2">Select Zip File:</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:glassmorphic-button text-gray-300 hover:file:bg-gray-500 hover:file:text-white"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-2">Start Date:</span>
                <DatePickerDemo
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-2">Maximum Budget:</span>
                <input
                  type="text"
                  value={maxBudget}
                  onChange={handleMaxBudgetChange}
                  className="px-4 py-2 rounded-lg text-white glassmorphic-input"
                  placeholder="Enter maximum budget"
                />
              </label>
              <button
                type="submit"
                className="py-2 px-4 glassmorphic-button text-white font-semibold"
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
                    <div className="p-6 glassmorphic-card2">
                      <CircularProgressbar
                        value={totalValue}
                        maxValue={maxBudget || 2500000} // Use the maximum budget value here
                        text={`IDR${totalValue.toLocaleString("id-ID")}`}
                        styles={buildStyles({
                          textColor: "#ffffff",
                          pathColor: "#6bb9e0",
                          trailColor: "#ffffff33",
                          textSize: "10px",
                        })}
                      />
                      <p className="mt-4 text-center">
                        Total Value: IDR{totalValue.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="p-6 glassmorphic-card2">
                      <CircularProgressbar
                        value={totalTransactions}
                        maxValue={60} // Adjust this value based on your expected total transactions
                        text={`${totalTransactions}`}
                        styles={buildStyles({
                          textColor: "#ffffff",
                          pathColor: "#6bb9e0",
                          trailColor: "#ffffff33",
                          textSize: "10px",
                        })}
                      />
                      <p className="mt-4 text-center">
                        Total Transactions: {totalTransactions}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-96 overflow-y-auto glassmorphic-card custom-scrollbar">
                  {transactions.map((transaction, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 glassmorphic-card flex justify-between items-center"
                    >
                      <div>
                        <p className="text-lg font-semibold">
                          {transaction.place}
                        </p>
                        <p className="text-sm text-white">{transaction.date}</p>
                        <p className="text-lg font-bold">
                          IDR{transaction.value.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveTransaction(index)}
                        className="py-1 px-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-full hover:from-red-600 hover:to-red-800"
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
    </div>
  );
};

export default ExpensePage;

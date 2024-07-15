import React from "react";
import ExpensePage from "../components/sections/ExpensePage"; // Import the client component

const Page = () => {
  return (
    <main className="flex min-h-screen max-w-screen overflow-hidden">
      <div className="container mx-auto ">
        <ExpensePage />
      </div>
    </main>
  );
};

export default Page;

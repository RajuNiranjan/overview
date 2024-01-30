import React from "react";
import NavBar from "./components/NavBar";
import CardSection from "./components/CardSection";
import Table from "./components/Table";
import ResponsiveTable from "./ui/ResponsiveTable";

const App = () => {
  return (
    <div className="container m-auto">
      <NavBar />
      <CardSection />
      <Table />
      <ResponsiveTable />
    </div>
  );
};

export default App;

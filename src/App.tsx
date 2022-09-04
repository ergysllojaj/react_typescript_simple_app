import React, { useState } from "react";
import "./App.css";
import { List } from "./components/List";

interface IState {
  people: {
    name: String;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron",
      url: "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
      age: 30,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);

  return (
    <div className="App">
      <List people={people} />
    </div>
  );
}

export default App;

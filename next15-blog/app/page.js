"use client";

import { useState } from "react";
import Card from "@/components/Card";

export default function Home({ searchParams }) {
  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState(["Damian", "Ajani", "Sorin"]);

  const name = "Damian";
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleAdd = () => {
    setNames([...names, "New element!"]);
  };
  const cards =
    isVisible && names.map((name, index) => <Card key={index}>{name}</Card>);

  if (searchParams.error) throw new Error("This is an error on the main Page!");

  return (
    <div className="space-y-4">
      <div>Hello, {name}</div>
      {cards}
      <div className="flex space-x-4">
        <button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

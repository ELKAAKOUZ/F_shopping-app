import React from "react";
import FruitsItem from "./FruitsItem";
import { useSelector } from "react-redux";
const FRUITS_AND_VEGETABLES = [
  {
    id: "1",
    image: "/lemons.jpg",
    name: "Lemons",
    quantity: "1",
  },
  {
    id: "2",
    image: "/Bananas.jpg",
    name: "Bananas",
    quantity: "1",
  },
  {
    id: "3",
    image: "/Gurken.jpg",
    name: "Gurken",
    quantity: "1",
  },
  {
    id: "4",
    image: "/Pomegranate.jpg",
    name: "Pomegrante",
    quantity: "1",
  },
  {
    id: "5",
    image: "/cherries.jpg",
    name: "Cherries",
    quantity: "1",
  },
  {
    id: "6",
    image: "/Avocado.jpg",
    name: "Avocado",
    quantity: "1",
  },
  {
    id: "7",
    image: "/Blackberries.jpg",
    name: "Blackberries",
    quantity: "1",
  },
  {
    id: "8",
    image: "/Tomatoes.png",
    name: "Tomatoes",
    quantity: "1",
  },
];

function FruitsList() {
  const lists = useSelector((state) => state.list.lists);
  console.log(lists);
  return (
    <div className="grid grid-cols-2 overflow-y-scroll no-scrollbar  max-h-[730px]">
      {FRUITS_AND_VEGETABLES.map((f) => (
        <FruitsItem
          key={f.id}
          id={f.id}
          image={f.image}
          name={f.name}
          quantity={f.quantity}
          lists={lists}
        />
      ))}
    </div>
  );
}

export default FruitsList;

import React from "react";
import { useSelector } from "react-redux";
import StationaryItem from "./StationaryItem";
const STATIONARY_DATA = [
  {
    id: "1",
    image: "/Staitionary_Photos/crayola-mini-kids-3.jpg",
    name: "Crayola-mini-3",
    quantity: "1",
  },
  {
    id: "2",
    image: "/Staitionary_Photos/einfarbige haftnotizen.jpg",
    name: " Haftnotizen",
    quantity: "1",
  },
  {
    id: "3",
    image: "/Staitionary_Photos/Heftgerät.png",
    name: "Heftgerät",
    quantity: "1",
  },
  {
    id: "4",
    image: "/Staitionary_Photos/marker-wasserfest-in-4-farben.jpg",
    name: "Marker-4-farben",
    quantity: "1",
  },
  {
    id: "5",
    image: "/Staitionary_Photos/Ordner.jpg",
    name: "Ordner",
    quantity: "1",
  },
  {
    id: "6",
    image: "/Staitionary_Photos/Rucksack.jpg",
    name: "Rucksack",
    quantity: "1",
  },
  {
    id: "7",
    image: "/Staitionary_Photos/Stabilo Fineliner.jpg",
    name: "Stabilo Fineliner",
    quantity: "1",
  },
  {
    id: "8",
    image: "/Staitionary_Photos/trendline korrekturroller.jpg",
    name: "Nivea Creme",
    quantity: "1",
  },
];

function StationaryList() {
  const lists = useSelector((state) => state.list.lists);
  console.log(lists);
  return (
    <div className="grid grid-cols-2 overflow-y-scroll no-scrollbar  max-h-[730px]">
      {STATIONARY_DATA.map((f) => (
        <StationaryItem
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

export default StationaryList;

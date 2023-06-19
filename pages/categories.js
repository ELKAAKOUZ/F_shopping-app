import React from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const CATEGORIES_DATA = [
  {
    id: "1",
    name: "Fruits & Vegetables",
    image: "/Categories_Photos/Fruits.jpg",
    color: "red",
    page: "/fruitsAndvegetables",
  },
  {
    id: "2",
    name: "Cakes & Dairy",
    image: "/Categories_Photos/Cakes and Dairy.jpg",
    color: "yellow",
    page: "/cakesAnddairy",
  },
  {
    id: "3",
    name: "Beverages",
    image: "/Categories_Photos/Beverages.png",
    color: "green",
    page: "/beverges",
  },
  {
    id: "4",
    name: "Stationary",
    image: "/Categories_Photos/schreibwaren.jpg",
    color: "blue",
    page: "/stationary",
  },
  {
    id: "5",
    name: "Drugstory",
    image: "/Categories_Photos/Drugstory.jpg",
    color: "gray",
    page: "/drugstory",
  },
  {
    id: "6",
    name: "Parfums",
    image: "/Categories_Photos/parfüm.jpg",
    color: "pink",
    page: "/parfums",
  },
];
function categories() {
  const router = useRouter();
  return (
    <div>
      <div
        className="relative flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "contain",
          height: "10rem",
        }}>
        <div className="absolute flex items-center justify-center space-x-2 top-1/2  text-black text-2xl font-semibold">
          <ChevronLeftIcon className=" h-7 w-7 cursor-pointer" />
          <p>Categories</p>
        </div>
      </div>
      <div className="flex flex-grow  ">
        <div className="grid grid-cols-2 max-h-[650px] no-scrollbar   overflow-y-scroll">
          {CATEGORIES_DATA.map((cat) => (
            <div
              onClick={() => router.push(cat.page)}
              className="rounded-2xl cursor-pointer p-2 "
              key={cat.id}>
              <img src={cat.image} className="rounded-t-2xl w-full h-[120px]" />
              <div
                style={{ backgroundColor: cat.color }}
                className="p-1  rounded-b-2xl h-12">
                <p className="text-sm pt-2">{cat.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default categories;

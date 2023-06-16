import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
function ShoppingLists() {
  const router = useRouter();
  const [listName, setListName] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("List Name:", listName);
    console.log("Deadline:", deadline);
    setListName("");
    setDeadline("");
  };
  return (
    <>
      <div
        className="relative flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "contain",
          height: "10rem",
        }}>
        <div className="absolute flex items-center justify-center space-x-2 top-1/2  text-black text-2xl font-semibold">
          <ChevronLeftIcon
            onClick={() => router.push("/createYourList")}
            className="h-7 w-7 cursor-pointer"
          />
          <p>My Shopping Lists</p>
        </div>
      </div>
      <div>{/* shopping lists */}</div>
    </>
  );
}

export default ShoppingLists;

import React from "react";
import axios from "axios";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setList, clearList } from "../listSlice";
import { useState } from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
function createYourList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [listName, setListName] = useState("");
  const [deadline, setDeadline] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setList({ listName, deadline }));
    router.push("/shoppingLists");
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
            onClick={() => router.push("/")}
            className="h-7 w-7 cursor-pointer"
          />
          <p>Create New List</p>
        </div>
      </div>

      <div>
        <Image className=" mx-auto" src="/pic2.jpeg" height={200} width={300} />
      </div>
      <form onSubmit={handleSubmit} className="mx-auto w-2/3 text-center">
        <div>
          <input
            type="text"
            className="bg-yellow-300 outline-none rounded-2xl my-2 w-full p-2 text-center"
            placeholder="List name"
            id="listName"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="date"
            id="deadline"
            className="bg-yellow-300 outline-none rounded-2xl p-2 w-full text-center "
            placeholder="List name"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center mt-10 space-x-2 bg-yellow-500 rounded-2xl p-2  mx-auto ">
          <PlusCircleIcon className="h-7 w-7" />
          <p>Save</p>
        </button>
      </form>
    </>
  );
}

export default createYourList;
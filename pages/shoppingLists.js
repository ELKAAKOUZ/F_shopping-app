import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ChevronLeftIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import withAuth from "../components/WithAuth";
import ShopList from "@/components/Shopping/ShopList";

function ShoppingLists() {
  const router = useRouter();
  const lists = useSelector((state) => state.list.lists); // Update to 'state.list.lists'

  return (
    <div className="">
      <div
        className="relative flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "cover",
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
      <div className="flex flex-grow flex-col h-[650px]  justify-between overflow-y-auto no-scrollbar ">
        <div className="overflow-y-scroll h-[500px]">
          <ShopList lists={lists} />{" "}
        </div>
        <div
          onClick={() => router.push("/createYourList")}
          className="bg-yellow-400 flex items-center justify-center h-12 my-2 rounded-xl cursor-pointer">
          <PlusCircleIcon className="w-7 h-7" />
          <p>New List</p>
        </div>
      </div>
    </div>
  );
}

export default withAuth(ShoppingLists);

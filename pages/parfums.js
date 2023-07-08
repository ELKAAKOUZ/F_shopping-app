import React from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import withAuth from "../components/WithAuth";
import FruitsList from "@/components/Fruits&Vegetables/FruitsList";
import CakesandDairyList from "@/components/Cakes&Dairies/CakesandDairyList";
import ParfumsList from "@/components/Parfums/ParfumsList";
function Parfums() {
  const router = useRouter();
  return (
    <div>
      <div
        className="relative flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "cover",
          height: "10rem",
        }}>
        <div className="absolute flex items-center justify-center space-x-2 top-1/2  text-black text-2xl font-semibold">
          <ChevronLeftIcon
            onClick={() => router.push("/categories")}
            className=" h-7 w-7 cursor-pointer"
          />
          <p>Parfums</p>
        </div>
      </div>
      <div>
        <ParfumsList />
      </div>
    </div>
  );
}

export default withAuth(Parfums);

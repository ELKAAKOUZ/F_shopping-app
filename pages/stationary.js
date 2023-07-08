import React from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import withAuth from "../components/WithAuth";
import StationaryList from "@/components/Stationary/StationaryList";
function Stationary() {
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
          <p>Stationary</p>
        </div>
      </div>
      <div>
        <StationaryList />
      </div>
    </div>
  );
}

export default withAuth(Stationary);

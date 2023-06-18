import React from "react";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function accountDetails() {
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
          <p>Account Details</p>
        </div>
      </div>
      <div className="text-center mx-auto mt-12">
        <Image
          className="text-center rounded-full mx-auto"
          src="/pic2.jpeg"
          height={200}
          width={200}
        />
        <p className="text-2xl font-semibold m-5">Foad Alazzam</p>
      </div>
    </div>
  );
}

export default accountDetails;

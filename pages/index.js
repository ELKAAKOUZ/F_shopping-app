import Image from "next/image";

import { ChevronLeftIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
export default function HomePage() {
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
          <ChevronLeftIcon className="h-7 w-7 cursor-pointer" />
          <p>My Shopping Lists</p>
        </div>
      </div>

      <div>
        <Image className=" mx-auto" src="/pic2.jpeg" height={200} width={300} />
      </div>
      <div className="flex items-center justify-center mt-10 space-x-2 bg-yellow-500 rounded-2xl p-2 w-2/3 mx-auto ">
        <PlusCircleIcon className="h-7 w-7" />
        <p>Add a new List</p>
      </div>
    </>
  );
}

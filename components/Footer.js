import React from "react";
import {
  BeakerIcon,
  ChevronLeftIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  PlusCircleIcon,
  PlusIcon,
  Square2StackIcon,
  Squares2X2Icon,
  UserIcon,
} from "@heroicons/react/24/solid";
function Footer(props) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>{props.children}</div>
      {/* <div className="h-36 bg-yellow-300 flex flex-row items-center justify-center space-x-2 rounded-3xl">
        <ChevronLeftIcon className="h-7 w-7 " />
        <p>My Shopping Lists</p>
      </div>
      <div className="bg-yellow-300 cursor-pointer py-2 h-9 w-2/3 mx-auto rounded-2xl flex flex-row items-center justify-center space-x-2">
        <PlusCircleIcon className="h-7 w-7" />
        <p>Add a new List</p>
      </div> */}
      <div className="bg-yellow-300 rounded-b-2xl flex flex-row justify-evenly items-center h-12">
        <HomeIcon className="h-7 w-7 cursor-pointer" />
        <Squares2X2Icon className="h-7 w-7 cursor-pointer" />
        <PlusCircleIcon className="h-7 w-7 cursor-pointer" />

        <ClipboardDocumentListIcon className="h-7 w-7 cursor-pointer" />

        <UserIcon className="h-7 w-7 cursor-pointer" />
      </div>
    </div>
  );
}

export default Footer;

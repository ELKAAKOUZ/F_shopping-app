import React from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  return (
    <div className="h-screen max-w-xs mx-auto flex flex-col justify-between">
      <div>{props.children}</div>

      <div className="bg-yellow-300 rounded-b-2xl flex flex-row justify-evenly items-center h-12">
        <HomeIcon
          onClick={() => router.push("/")}
          className="h-7 w-7 cursor-pointer"
        />
        <Squares2X2Icon
          onClick={() => router.push("/categories")}
          className="h-7 w-7 cursor-pointer"
        />
        <PlusCircleIcon
          onClick={() => router.push("/createYourList")}
          className="h-7 w-7 cursor-pointer"
        />

        <ClipboardDocumentListIcon
          onClick={() => router.push("/shoppingLists")}
          className="h-7 w-7 cursor-pointer"
        />

        <UserIcon
          onClick={() => router.push("/accountDetails")}
          className="h-7 w-7 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Footer;

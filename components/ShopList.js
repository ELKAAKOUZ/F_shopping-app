import React from "react";
import ShopItem from "./ShopItem";
import { useRouter } from "next/router";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

function ShopList({ lists }) {
  const router = useRouter();
  if (!lists || lists.length === 0) {
    return (
      <div className="text-center mt-5">
        <p>No lists available.</p>
        <div
          onClick={() => router.push("/createYourList")}
          className="bg-yellow-400 flex items-center justify-center h-12 my-2  rounded-xl  cursor-pointer">
          <PlusCircleIcon className="w-7 h-7 " />
          <p>Add New List</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-grow  flex-col justify-between ">
      <div className="overflow-y-auto h-[70vh] no-scrollbar">
        {lists.map((l) => (
          <ShopItem key={l.listId} name={l.listName} deadLine={l.deadline} />
        ))}
      </div>
      <div
        onClick={() => router.push("/createYourList")}
        className="bg-yellow-400 flex items-center justify-center h-12 my-2  rounded-xl  cursor-pointer">
        <PlusCircleIcon className="w-7 h-7 " />
        <p>New List</p>
      </div>
    </div>
  );
}

export default ShopList;
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { ChevronLeftIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
// import SelectedProducts from "./SelectedProducts";

// function ShopList() {
//   const router = useRouter();
//   const [listName, setListName] = useState("");
//   const [deadline, setDeadline] = useState("");
//   const [lists, setLists] = useState([]);

//   const handleListSubmit = (e) => {
//     e.preventDefault();
//     const newList = {
//       id: new Date().getTime().toString(),
//       name: listName,
//       deadline: deadline,
//       products: [],
//     };
//     setLists((prevLists) => [...prevLists, newList]);
//     setListName("");
//     setDeadline("");
//   };

//   const handleProductSelect = (listId, product) => {
//     setLists((prevLists) => {
//       const updatedLists = prevLists.map((list) => {
//         if (list.id === listId) {
//           return {
//             ...list,
//             products: [...list.products, product],
//           };
//         }
//         return list;
//       });
//       return updatedLists;
//     });
//   };

//   return (
//     <>
//       <div className="flex items-center mb-4">
//         <ChevronLeftIcon
//           className="h-6 w-6 text-gray-500 cursor-pointer"
//           onClick={() => router.back()}
//         />
//         <h1 className="text-2xl font-semibold ml-2">Shopping Lists</h1>
//       </div>

//       <form onSubmit={handleListSubmit} className="mb-8">
//         {/* Form content */}
//       </form>

//       <div>
//         {lists.map((list) => (
//           <div key={list.id} className="mb-8">
//             {/* List details and selected products */}
//             <SelectedProducts selectedList={list} />
//             {/* Add products section */}
//             <div className="mt-4">
//               <h3 className="text-gray-700 text-lg font-semibold">
//                 Add Products
//               </h3>
//               <div className="grid grid-cols-3 gap-4 mt-2">
//                 {FRUITS_AND_VEGETABLES.map((product) => (
//                   <ProductItem
//                     key={product.id}
//                     id={product.id}
//                     name={product.name}
//                     quantity={product.quantity}
//                     image={product.image}
//                     onSelect={() => handleProductSelect(list.id, product)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
// export default ShopList;

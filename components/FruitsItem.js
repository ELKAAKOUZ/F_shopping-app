import React, { useState } from "react";
import ListSelectionModal from "./ListSelectionModal";
// import { useSelector } from "react-redux";

function FruitsItem({ id, name, quantity, image, lists }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  // const lists = useSelector((state) => state.list.lists);
  const handleAddToList = () => {
    setShowModal(true);
  };

  const handleSelectList = (list) => {
    setSelectedList(list);
    setShowModal(false);
    // Perform the necessary action with the selected list and fruit item, e.g., add the fruit item to the selected list
    console.log("Selected list:", list);
    console.log("Selected fruit item:", { id, name, quantity, image });
  };

  return (
    <div className="m-5 ">
      <img className="h-[90px]" src={image} alt={name} />
      <div className="text-center my-2">
        <p>{name}</p>
        <p>{quantity} pcs</p>
      </div>
      <div
        className="bg-green-700 cursor-pointer rounded-2xl text-center text-white p-1"
        onClick={handleAddToList}>
        ADD
      </div>

      {showModal && (
        <ListSelectionModal
          lists={lists} // Pass the array of available lists as a prop
          onSelectList={handleSelectList}
        />
      )}
    </div>
  );
}

export default FruitsItem;

// import React from "react";

// function FruitsItem({ id, name, quantity, image }) {
//   return (
//     <div className="m-5 ">
//       <img className="h-[90px]" src={image} />
//       <div className="text-center my-2">
//         <p>{name}</p>
//         <p>{quantity} pcs</p>
//       </div>
//       <div className="bg-green-700 cursor-pointer rounded-2xl text-center text-white p-1 ">
//         ADD
//       </div>
//     </div>
//   );
// }

// export default FruitsItem;

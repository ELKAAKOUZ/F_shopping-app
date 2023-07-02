import React, { useState } from "react";
import ListSelectionModal from "../ListSelectionModal";
import { useDispatch } from "react-redux";
import { addItemToList } from "../../listSlice";

function StationaryItem({ id, name, quantity, image, measure, lists }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const dispatch = useDispatch();
  const handleAddToList = () => {
    setShowModal(true);
  };

  const handleSelectList = (list) => {
    setSelectedList(list);
    setShowModal(false);
    // Dispatch action to add item to the selected list
    dispatch(
      addItemToList({
        listId: list.id,
        item: { id, name, quantity, image, measure },
      })
    );
  };

  return (
    <div className="m-5 ">
      <img className="h-[90px]" src={image} alt={name} />
      <div className="text-center my-2">
        <p className="text-sm">{name}</p>
        <p>
          {quantity} <span>{measure}</span>
        </p>
      </div>
      <div
        className="bg-yellow-500 cursor-pointer rounded-2xl text-center text-white p-1"
        onClick={handleAddToList}>
        ADD
      </div>

      {showModal && (
        <ListSelectionModal lists={lists} onSelectList={handleSelectList} />
      )}
    </div>
  );
}

export default StationaryItem;

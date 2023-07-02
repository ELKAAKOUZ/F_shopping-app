import React, { useState } from "react";
import { deleteList, updateList } from "../../listSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { PlusCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import ItemListModal from "../ItemListModal";

function ShopItem({ id, name, deadline, items }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDeadline, setEditedDeadline] = useState(deadline);
  const [starActive, setStarActive] = useState(false);
  const [showItemList, setShowItemList] = useState(false);

  const handleStarClick = () => {
    setStarActive(!starActive);
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteList(id));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    const editedList = {
      id,
      name: editedName,
      deadline: editedDeadline,
      items, // Include the items array in the updated list
    };
    dispatch(updateList(editedList));
    setEditMode(false);
  };

  const handleOpenItemList = () => {
    setShowItemList(true);
  };

  const handleCloseItemList = () => {
    setShowItemList(false);
  };

  return (
    <div className="bg-yellow-300 flex flex-col justify-between my-2 w-5/6 rounded-2xl p-3 h-32  mx-auto">
      <div className="flex items-center justify-between">
        {editMode ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
            <input
              type="date"
              value={editedDeadline}
              onChange={(e) => setEditedDeadline(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </>
        ) : (
          <>
            <p>{editedName}</p>{" "}
            <StarIcon
              onClick={handleStarClick}
              className={`w-7 h-7 cursor-pointer ${
                starActive ? "text-yellow-400" : ""
              }`}
            />
          </>
        )}
      </div>
      <div className="flex items-center justify-between">
        {editMode ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <PencilSquareIcon
              onClick={handleEdit}
              className="w-7 h-7 cursor-pointer"
            />
            <PlusCircleIcon
              onClick={() => router.push("/categories")}
              className="w-7 h-7 mt-2 cursor-pointer"
            />
            <TrashIcon
              onClick={() => handleDelete(id)}
              className="w-7 h-7 cursor-pointer"
            />
          </>
        )}
      </div>
      <div
        className="bg-yellow-500 cursor-pointer rounded-2xl text-center text-white p-1 mt-2"
        onClick={handleOpenItemList}>
        View Items
      </div>
      {showItemList && (
        <ItemListModal
          listId={id}
          listName={name}
          items={items}
          onClose={handleCloseItemList}
        />
      )}
    </div>
  );
}

export default ShopItem;

import React, { useState } from "react";
import { deleteList, updateList } from "../../listSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { PlusCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

function ShopItem({ id, name, deadline }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDeadline, setEditedDeadline] = useState(deadline);
  const [starActive, setStarActive] = useState(false);
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
    };
    dispatch(updateList(editedList));
    setEditMode(false);
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
    </div>
  );
}

export default ShopItem;

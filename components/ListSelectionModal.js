import React from "react";

function ListSelectionModal({ lists, onSelectList }) {
  console.log(lists);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md ">
        <h2 className="text-lg font-semibold mb-2 bg-yellow-300 w-full p-2 ">
          Select a list
        </h2>
        <ul className="space-y-2">
          {lists.map((list) => (
            <li
              key={list.id}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => onSelectList(list)}>
              {list.listName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListSelectionModal;

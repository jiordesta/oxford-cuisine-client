import React from "react";
import { useSelector } from "react-redux";

export default function Menu() {
  const { items } = useSelector((state) => state.menu);

  const Item = ({ name, price, desc, status }) => {
    return (
      <>
        <div className="flex justify-between w-full">
          <h1 className="text-lg font-semibold">{name}</h1>
          <h1 className="underline">{price}</h1>
        </div>
        <div className="bg-color4 py-[1px] my-1" />
        <div className="w-full">
          <p>{desc}</p>
        </div>
        <div className="mt-2 flex flex-row gap-2">
          {status === "available" ? (
            <button className="bg-color4 text-color1 w-full py-1 rounded-lg drop-shadow-lg hover:bg-color3 hover:text-color4">
              not available
            </button>
          ) : (
            <button className="bg-color4 text-color1 w-full py-1 rounded-lg drop-shadow-lg hover:bg-color3 hover:text-color4">
              available
            </button>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="menu">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold uppercase">oxford cuisine menu</h1>
          <div className="bg-color1 py-1 w-full" />
          <ul className="flex flex-col w-full h-full overflow-hidden gap-1">
            {items.map((item) => {
              return (
                <li className="bg-color1 text-color4 my-1 bg-opacity-80 p-2 rounded-lg">
                  <Item {...item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-color1 bg-opacity-80 w-full rounded-lg p-8 flex flex-col gap-2">
            <h1 className="text-color4 font-bold text-2xl uppercase">
              Add Dish
            </h1>
            <input
              type="text"
              placeholder=" --> dish name"
              className="w-full rounded-[6px] py-1 placeholder:text-color4 focus:outline-none bg-color2 text-color4"
            />
            <textarea
              type="text"
              placeholder=" --> dish description"
              rows={10}
              className="w-full rounded-[6px] py-1 placeholder:text-color4 focus:outline-none bg-color2 text-color4"
            />
            <input
              type="number"
              placeholder=" --> dish price"
              className="w-full rounded-[6px] py-1 placeholder:text-color4 focus:outline-none bg-color2 text-color4"
            />
            <button className="py-1 bg-color4 rounded-lg hover:bg-color3 hover:text-color4">
              Add to Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

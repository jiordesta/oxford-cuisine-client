import React from "react";
import { useSelector } from "react-redux";

export default function Orders() {
  const { pending, preparing, serving, delivering } = useSelector(
    (state) => state.order
  );

  const Order = ({ items, customer, status }) => {
    return (
      <>
        <h1 className="font-semibold uppercase">{customer}</h1>
        <div className="bg-color4 py-[1px] w-full" />
        <ul>
          {items.map((item) => {
            return (
              <div key={item.name} className="w-full flex justify-start">
                <h1>{item.name}</h1>
                <h1>{`-${item.quantity}x`}</h1>
              </div>
            );
          })}
        </ul>
        <div className="bg-color4 py-[1px] w-full" />
        <button className="bg-color4 text-color1 w-full rounded-lg mt-1 uppercase hover:bg-color3 hover:text-color4 drop-shadow-sm">
          {status == "pending"
            ? "Prepare"
            : status == "preparing"
            ? "Serve"
            : status == "serving"
            ? "deliver"
            : "delivered"}
        </button>
      </>
    );
  };

  return (
    <div className="orders">
      <div className="w-full">
        <h1 className="text-xl uppercase font-bold">pending</h1>
        <div className="bg-color1 py-1 w-full my-2" />
        <ul className="flex flex-col w-full h-full overflow-hidden gap-1">
          {pending.map((order) => {
            return (
              <li
                key={order._id}
                className="bg-color1 text-color4 bg-opacity-75 rounded-lg p-1"
              >
                <Order {...order} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full">
        <h1 className="text-xl uppercase font-bold">preparing</h1>
        <div className="bg-color1 py-1 w-full my-2" />
        <ul className="flex flex-col w-full h-full gap-1">
          {preparing.map((order) => {
            return (
              <li
                key={order._id}
                className="bg-color1 text-color4 bg-opacity-75 rounded-lg p-1"
              >
                <Order {...order} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full">
        <h1 className="text-xl uppercase font-bold">serving</h1>
        <div className="bg-color1 py-1 w-full my-2" />
        <ul className="flex flex-col w-full h-full gap-1">
          {serving.map((order) => {
            return (
              <li
                key={order._id}
                className="bg-color1 text-color4 bg-opacity-75 rounded-lg p-1"
              >
                <Order {...order} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full">
        <h1 className="text-xl uppercase font-bold">delivering</h1>
        <div className="bg-color1 py-1 w-full my-2" />
        <ul className="flex flex-col w-full h-full gap-1">
          {delivering.map((order) => {
            return (
              <li
                key={order._id}
                className="bg-color1 text-color4 bg-opacity-75 rounded-lg p-1"
              >
                <Order {...order} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

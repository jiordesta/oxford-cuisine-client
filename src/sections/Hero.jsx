import React from "react";
import Orders from "../components/Orders";
import Menu from "../components/Menu";
import Riders from "../components/Riders";
import Sales from "../components/Sales";
import Account from "../components/Account";

export default function Hero() {
  return (
    <section className="bg-black bg-opacity-50 w-full h-full mb-2 p-4 text-color1">
      <Orders />
      <Menu />
      <Riders />
      <Sales />
      <Account />
    </section>
  );
}

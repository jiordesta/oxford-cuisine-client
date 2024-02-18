import React, { useEffect, useState } from "react";

export default function Header() {
  const [current, setcurrent] = useState(".orders");
  const [prev, setprev] = useState();

  useEffect(() => {
    if (prev) {
      document.querySelector(prev).classList.remove("active");
    }
    document.querySelector(current).classList.add("active");
  }, [current]);

  const handleChangeDrawer = (drawer) => {
    setprev(current);
    setcurrent(drawer);
  };

  return (
    <section className="p-4 bg-black bg-opacity-50 w-full my-2">
      <ul className="flex items-center gap-4 py-8">
        <li
          className="header-link"
          onClick={() => handleChangeDrawer(".orders")}
        >
          orders
        </li>
        <li className="header-link" onClick={() => handleChangeDrawer(".menu")}>
          menu
        </li>
        <li
          className="header-link"
          onClick={() => handleChangeDrawer(".riders")}
        >
          riders
        </li>
        <li
          className="header-link"
          onClick={() => handleChangeDrawer(".sales")}
        >
          sales
        </li>
        <li
          className="header-link"
          onClick={() => handleChangeDrawer(".account")}
        >
          account
        </li>
      </ul>
    </section>
  );
}

import React, { useEffect } from "react";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../sections/Signin";
import { fetch_user } from "../redux/reducers/auth_slice";

export default function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_user());
  }, []);

  return (
    <>
      {user ? (
        <div className="flex-col px-64 bg">
          <Header />
          <Hero />
        </div>
      ) : (
        <div className="flex-col px-64 bg">
          <Signin />
        </div>
      )}
    </>
  );
}

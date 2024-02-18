import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetch_user, login, register } from "../redux/reducers/auth_slice";
import { error, success } from "../redux/reducers/notif_slice";

export default function Signin() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    return (
      <div className="flex flex-col w-[30%] text-color1">
        <div className="bg-color3 rounded-t-lg bg-opacity-75 w-full">
          <h1 className="text-3xl  p-4 text-center uppercase">Signin</h1>
        </div>
        <div className="bg-white w-full h-full bg-opacity-25 backdrop-blur-sm p-8 rounded-b-lg">
          <div className="flex flex-col h-full justify-center items-center gap-2">
            <input
              type="text"
              placeholder="username"
              className="w-full py-1 bg-color3 bg-opacity-50 rounded-md placeholder:text-color1 text-center focus:outline-none"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="w-full py-1 bg-color3 bg-opacity-50 rounded-md placeholder:text-color1 text-center focus:outline-none"
              onChange={(e) => setpassword(e.target.value)}
            />
            <div className="flex items-center">
              <input type="checkbox" />
              <h1>Remember me</h1>
            </div>
            <button
              className="text-2xl bg-color3 w-full rounded-lg py-1 drop-shadow-lg hover:bg-color4"
              onClick={() => {
                dispatch(login({ username, password })).then((res) => {
                  if (res.error) {
                    dispatch(error(res.error.message));
                  } else {
                    dispatch(success("Logged in"));
                    dispatch(fetch_user());
                  }
                });
              }}
            >
              Login
            </button>
            <a
              type="button"
              className="underline cursor-pointer"
              onClick={() => setShow(false)}
            >
              i don't have an account
            </a>
          </div>
        </div>
      </div>
    );
  };

  const Register = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [image, setimage] = useState(null);
    return (
      <div className="flex flex-col w-[30%] text-color1">
        <div className="bg-color3 rounded-t-lg bg-opacity-75 w-full">
          <h1 className="text-3xl  p-4 text-center uppercase">Signin</h1>
        </div>
        <div className="bg-white w-full h-full bg-opacity-25 backdrop-blur-sm p-8 rounded-b-lg">
          <div className="flex flex-col h-full justify-center items-center gap-2">
            <input
              type="text"
              placeholder="first name"
              className="w-full py-1 bg-color3 bg-opacity-50 rounded-md placeholder:text-color1 text-center focus:outline-none"
              onChange={(e) => setfname(e.target.value)}
            />
            <input
              type="text"
              placeholder="last name"
              className="w-full py-1 bg-color3 bg-opacity-50 rounded-md placeholder:text-color1 text-center focus:outline-none"
              onChange={(e) => setlname(e.target.value)}
            />
            <input
              type="text"
              placeholder="username"
              className="w-full py-1 bg-color3 bg-opacity-50 rounded-md placeholder:text-color1 text-center focus:outline-none"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="w-full py-1 bg-color3 bg-opacity-50 rounded-md placeholder:text-color1 text-center focus:outline-none"
              onChange={(e) => setpassword(e.target.value)}
            />
            <input type="file" onChange={(e) => setimage(e.target.files[0])} />
            <button
              className="text-2xl bg-color3 w-full rounded-lg py-1 drop-shadow-lg hover:bg-color4"
              onClick={() =>
                dispatch(
                  register({ fname, lname, username, password, image })
                ).then((res) => {
                  if (res.error) {
                    dispatch(error(res.error.message));
                  } else {
                    dispatch(success("Registered"));
                  }
                })
              }
            >
              Register
            </button>
            <a
              type="button"
              className="underline cursor-pointer"
              onClick={() => setShow(true)}
            >
              already have an account
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full h-full flex justify-center items-center">
      {show ? <Login /> : <Register />}
    </section>
  );
}

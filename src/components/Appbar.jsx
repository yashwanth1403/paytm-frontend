import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { baseurl } from "../../url";
export default function Appbar({ title }) {
  const [name, setname] = useState("");
  useEffect(() => {
    axios
      .post(`${baseurl}api/v1/user/userdetails`, {
        token: localStorage.getItem("token"),
      })
      .then((response) => {
        setname(response.data.name);
      });
  }, []);
  return (
    <>
      <div className=" shadow-lg flex items-center justify-between h-12 ">
        <div className="h-full flex flex-col justify-center ml-9 sm:text-xl font-normal text-md">
          {title}
        </div>
        <div className="flex gap-3 items-center mr-9">
          <span className="sm: text-md  text-sm">Hello {name}</span>
          <div className="rounded-full h-10 w-10 bg-slate-400 flex flex-col justify-center items-center">
            {name[0]}
          </div>
        </div>
      </div>
    </>
  );
}

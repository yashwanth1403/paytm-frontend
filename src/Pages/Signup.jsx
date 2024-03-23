import Bottomwarnig from "../components/Bottomwarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputbox from "../components/InputBox";
import { SubHeading } from "../components/Subheading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../url";
export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-slate-300 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-85 text-center p-2 h-max px-4">
            <Heading label={"Sign Up"} />
            <SubHeading label={"Enter your infromation to create an account"} />
            <Inputbox
              label={"First Name"}
              placeholder={"Yash"}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            ></Inputbox>
            <Inputbox
              label={"Last Name"}
              placeholder={"Reddy"}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            ></Inputbox>
            <Inputbox
              label={"Email"}
              placeholder={"example@gmail.com"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></Inputbox>
            <Inputbox
              label={"Password"}
              placeholder={"Password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></Inputbox>
            <Button
              label={"Signup"}
              onClick={async () => {
                const response = await axios.post(
                  baseurl + "api/v1/user/signup",
                  {
                    username,
                    password,
                    firstname,
                    lastname,
                  }
                );

                localStorage.setItem("token", response.data.token);
                if (response.data.token) navigate("/dashboard");
              }}
            />
            <Bottomwarnig
              label={"Already have an account?"}
              route={"/signin"}
              link={"signin"}
            ></Bottomwarnig>
          </div>
        </div>
      </div>
    </>
  );
}

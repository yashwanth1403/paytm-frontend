import Heading from "../components/Heading";
import { SubHeading } from "../components/Subheading";
import Inputbox from "../components/InputBox";
import Bottomwarnig from "../components/Bottomwarning";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../url";
export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-slate-300 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-85 text-center p-2 h-max px-4">
            <Heading label={"Sign in"} />
            <SubHeading
              label={"Enter your Credentials to access your account"}
            />
            <Inputbox
              label={"Email"}
              placeholder={"example@gmail.com"}
              onChange={(e) => {
                setUsername(e.target.value);
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
              label={"Signin"}
              onClick={async () => {
                const response = await axios.post(
                  baseurl + "api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                if (localStorage.getItem("token")) {
                  navigate("/dashboard");
                }
              }}
            />
            <Bottomwarnig
              label={"Don't have an account?"}
              route={"/signup"}
              link={"signup"}
            ></Bottomwarnig>
          </div>
        </div>
      </div>
    </>
  );
}

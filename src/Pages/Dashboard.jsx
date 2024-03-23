import { useEffect } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import axios from "axios";
import { useState } from "react";
import User from "../components/User";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../url";

export default function Dashboard() {
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseurl + "api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
        navigate("/signin");
      });
  }, []);

  return (
    <>
      <div className="h-screen">
        <Appbar title={"PayTM App"} />
        <Balance balance={balance} />
        <User />
      </div>
    </>
  );
}

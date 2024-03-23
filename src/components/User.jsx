import Inputdash from "./Inputdash";
import { useEffect, useState } from "react";
import axios from "axios";
import Displayusers from "./Displayusers";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../url";
export default function User() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentuser, setcurrent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseurl + "api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        const usersArray = response.data.user;
        setUsers(usersArray);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [filter]);

  useEffect(() => {
    axios
      .post(baseurl + "api/v1/user/userdetails", {
        token: localStorage.getItem("token"),
      })
      .then((response) => {
        setcurrent(response.data.user);
      });
  }, []);
  return (
    <>
      <Inputdash
        label={"Users"}
        placeholder={"Search Users..."}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      {users.map((user) => {
        if (currentuser._id !== user._id) {
          return (
            <Displayusers
              key={user._id}
              name={user.firstName}
              onclick={async () => {
                navigate("/send?name=" + user.firstName + "&id=" + user._id);
              }}
            />
          );
        }
      })}
    </>
  );
}

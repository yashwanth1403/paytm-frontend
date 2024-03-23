import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../url";

export default function Send() {
  const [amount, setAmount] = useState();
  const [searchparams] = useSearchParams();
  const name = searchparams.get("name");
  const id = searchparams.get("id");
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-slate-200 h-screen flex items-center justify-center">
        <div>
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="self-start bg-black text-white text-md font-semibold px-5 rounded-md py-2 absolute top-10 left-10 flex items-center justify-center "
          >
            {"< back"}
          </button>
        </div>
        <div className="flex flex-col w-96 h-80 bg-white items-center rounded-lg gap-3">
          <div className=" text-2xl font-bold mt-4">Send money</div>
          <div className="self-start mt-7 flex flex-col w-full p-5">
            <div className="flex gap-2 items-center self-start">
              <div className="h-12 w-12 rounded-full bg-green-500 flex justify-center items-center text-white ">
                {name[0].toUpperCase()}
              </div>
              <div className="text-lg">{name}</div>
            </div>
            <div className="text-md font-bold ml-2">Amount(in Rs)</div>
            <input
              placeholder="Enter amount"
              className="w-full border border-slate-300 py-1.5 px-2 mt-3"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            ></input>
            <button
              className=" bg-green-500 rounded-md font-md text-white mt-5 py-2"
              onClick={async () => {
                if (amount != 0) {
                  const response = await axios.post(
                    baseurl + "api/v1/account/transfer",
                    {
                      to: id,
                      amount: amount,
                    },
                    {
                      headers: {
                        Authorization:
                          "Bearer " + localStorage.getItem("token"),
                      },
                    }
                  );
                  if (response.status == 200) {
                    alert(response.data.message);
                  } else {
                    alert("transaction failed");
                  }
                }
              }}
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { withdrawRequests, claimedMoney, claimedUsers } from "../api";

function Admin() {
  const [withdrawArray, setWithdrawArray] = React.useState([]);
  const [checked, setChecked] = React.useState(true);
  const [inputText, setInputText] = React.useState("");

  console.log("inputText", inputText);
  React.useEffect(() => {
    const getAll = async () => {
      const { data } = await withdrawRequests();
      setWithdrawArray(data);
      console.log(data);
    };
    getAll();
  }, []);

  async function handleDelete(id) {
    const { data } = await claimedMoney({ id });
    setWithdrawArray(data);
  }

  async function handleClaimed() {
    if (checked) {
      const { data } = await claimedUsers();
      setWithdrawArray(data);
    } else {
      const { data } = await withdrawRequests();
      setWithdrawArray(data);
    }
  }

  return (
    <div>
      <div className=" w-auto  m-auto mt-16 font-[Lato]  md:w-[80%]">
        <div className="flex  items-center justify-around ">
          <Link to="/">
            <button className="relative left-[3.5rem] font-bold md:left-[3rem] font-poppins">
              LOG OUT
            </button>
          </Link>

          <span className="flex items-center w-3/6  ml-20">
            <span className="relative left-10">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "grey" }}
              ></i>
            </span>
            <input
              className="border border-gray-300 p-2 w-[90%] pl-12 py-3 font-poppins hover:border-black font-fontawesome"
              type={"search"}
              placeholder="Search"
              onChange={(event) => setInputText(event.target.value)}
            />
          </span>

          <p className="font-bold text-2xl font-poppins">ADMIN</p>
        </div>
        <div className="flex m-4 ml-[5rem] mb-8 font-poppins ">
          <p className="text-xl  font-bold m-5 md:text-xl">Users Information</p>
          <p className="text-base font-bold ml-20 flex items-center md:text-lg">
            <input
              className="w-[2rem] h-[23px] mr-4 rounded-lg"
              type="checkbox"
              onChange={() => {
                console.log(checked);
                setChecked((current) => !current);
                handleClaimed();
              }}
            />{" "}
            MONEY CLAIMED
          </p>
        </div>

        <table
          className=" w-[85%] m-auto font-poppins"
          border="1"
          frame="hsides"
          rules="rows"
          style={{
            borderbottom: "px solid #80808096",

            bordercollapse: "collapse",
          }}
        >
          <tr
            className=" text-[14px] md:text-[16px]"
            style={{
              borderBottom: "2px solid #80808096",
              borderwidth: "1px 0",
            }}
          >
            <th className="pb-4">USER</th>
            <th className="pb-4">EMAIL</th>

            <th className="pb-4">AFFILIATE EARNINGS</th>
            <th className="pb-4">GAME RESULTS</th>
            <th className="pb-4">MONEY SENT</th>
          </tr>

          {withdrawArray
            .filter((post) => {
              if (inputText === "") {
                return post;
              } else if (
                post.username.toLowerCase().includes(inputText.toLowerCase())
              ) {
                return post;
              }
            })
            .map((item, index) => {
              return (
                <tr
                  className="text-center text-[14px] md:text-sm"
                  style={{
                    borderBottom: "2px solid #80808096",
                    borderwidth: "1px 0",
                  }}
                  key={index}
                >
                  <td className="pt-4 pb-4">{item.username}</td>
                  <td className="pt-4 pb-4">{item.email}</td>
                  <td className="pt-4 pb-4">{item.amount}</td>
                  <td className="pt-4 pb-4">49093</td>
                  <td className="pt-4 pb-4">
                    <input
                      className="w-[2rem] h-[23px] rounded-lg"
                      type="checkbox"
                      checked={item.status}
                      onChange={() => handleDelete(item._id)}
                    />
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default Admin;

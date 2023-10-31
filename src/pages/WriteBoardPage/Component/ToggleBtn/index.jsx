import React from "react";
import downBtn from "./img/ic.svg";
import { useState } from "react";
function ToggleBtn(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenu, setSelectMenu] = useState("");
  const onClickHandler = (e) => {
    setShowMenu(!showMenu);
    console.log(`${showMenu}`);
    setSelectMenu()
  };
  return (
    <div className="">
      <div
        className="flex gap-3 border border-1 max-w-fit border-main rounded-lg hover:cursor-pointer"
        onClick={onClickHandler}
      >
        <div className=" text-main text-xs md:text-base font-semibold ml-4 my-2">
          {props.name}
        </div>
        <img src={downBtn} className="mr-4" />
      </div>

      {/*toggle menu*/}
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } z-50 fixed top-32 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow text-center`}
      >
        <div className="px-4 py-3 ">
          <ul className="py-4">
            <li className="border-b-2 ">
              <button onClick={onClickHandler} className="my-2">
                이동 봉사
              </button>
            </li>
            <li className="border-b-2">
              <button
                onClick={() => {
                  setShowMenu(false);
                }}
                className="my-2"
              >
                대필
              </button>
            </li>
            <li className="border-b-2 m">
              <button onClick={onClickHandler} className="my-2">
                물품 요청
              </button>
            </li>
            <li>
              <button onClick={onClickHandler} className="my-2">
                기타
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToggleBtn;

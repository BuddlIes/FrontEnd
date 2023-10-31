import React from "react";
import ToggleBtn from "./Component/ToggleBtn";
import { TextField } from "@mui/material";
import { useState } from "react";
function WriteBoardPage() {
  const [image, setImgSrc] = useState(null);
  const onUpload = () => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onloadend = (e) => {
        setImgSrc(reader.result || null);
        resolve();
      };
    });
  };

  return (
    <div className="w-full">
      <div className=" md:px-56">
        <div className="text-main font-semibold text-xl my-4">카테고리</div>
        <div className="mb-10">
          <ToggleBtn name={"카테고리 선택"} />
        </div>
        <div id="제목">
          <div className="text-main font-semibold text-xl my-4">제목</div>
          <input
            type="text"
            placeholder="제목 작성"
            className="border-b border-main w-full"
          ></input>
        </div>
        <div id="내용">
          <div className="text-main font-semibold text-xl mt-4">내용</div>
          <div className=" text-gray-500">
            구체적인 요청 사항을 입력해주세요.
          </div>
          <TextField
            type="text"
            placeholder="내용을 입력해주세요"
            className="border border-main w-full h-full"
          />
        </div>
        <div>
          <div className="flex gap-3.5">
            <div className="text-main font-semibold text-xl mt-4">사진</div>
            <div className="text-blue-600 mt-5">* 선택사항</div>
          </div>
          <input
            accept="image/*"
            multiple
            type="file"
            onChange={(e) => onUpload(e)}
          />
          <img className="w-full" src={image} />
        </div>
      </div>
    </div>
  );
}

export default WriteBoardPage;

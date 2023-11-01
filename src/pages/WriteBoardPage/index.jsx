import React from "react";
import ToggleBtn from "./Component/ToggleBtn";
import { TextField } from "@mui/material";
import { useState } from "react";
import ImgBox from "./Component/ImgBox";
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
        <div id="내용" className="pt-4">
          <div className="text-main font-semibold text-xl my-4">내용</div>
          <div className=" text-gray-500">
            구체적인 요청 사항을 입력해주세요.
          </div>
          <TextField
            type="text"
            placeholder="내용을 입력해주세요"
            className="border border-main w-full h-full"
          />
        </div>
        <div className="pt-4">
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
          <div className="">
            <ImgBox />
          </div>
        </div>
        <div id="날짜" className="pt-4">
          <div className="text-main font-semibold text-xl mt-4">날짜</div>
          <div className=" text-gray-500">봉사자와 만날 날짜를 정해주세요.</div>
          <TextField
            type="text"
            placeholder="날짜를 입력해주세요"
            className="border border-main w-full h-full"
          />
        </div>
        <div id="시간" className="pt-4">
          <div className="text-main font-semibold text-xl mt-4">시간</div>
          <div className=" text-gray-500">봉사자와 만날 시간을 정해주세요.</div>
          <TextField
            type="text"
            placeholder="시간을 입력해주세요"
            className="border border-main w-full h-full"
          />
        </div>

        <div id="예상 소요 시간" className="pt-4">
          <div className="text-main font-semibold text-xl mt-4">
            예상 소요 시간
          </div>
          <div className=" text-gray-500">소요될 예상 시간을 정해주세요.</div>
          <TextField
            type="text"
            placeholder="시간을 입력해주세요"
            className="border border-main w-full h-full"
          />
        </div>
        <div id="장소" className="pt-4">
          <div className="text-main font-semibold text-xl mt-4">장소</div>
          <input
            type="text"
            placeholder="제목 작성"
            className="border-b border-main w-full"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default WriteBoardPage;

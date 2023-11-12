import React from "react";
import ToggleBtn from "./Component/ToggleBtn";
import { TextField } from "@mui/material";
import { useState } from "react";
import ImgBox from "./Component/ImgBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cameraIcon from "../WriteBoardPage/Component/ImgBox/icon/ic.png";
import { object } from "prop-types";
function WriteBoardPage() {
  const [image, setImage] = useState(null);
  const [imgPreview, setImgPreview] = useState("");
  const [meetTime, setMeetTime] = useState(null);
  const [placeComment, setPlaceComment] = useState("");
  const [costTime, setCostTime] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenu, setSelectMenu] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [categoryName, setCategoryName] = useState("카테고리");
  const navigate = useNavigate();
  const onClickToggleHandler = (e) => {
    console.log("clicked");
    setShowMenu(!showMenu);
    console.log(`${showMenu}`);
    setSelectMenu();
    if (e.target.value === "portVolunteer") {
      setCategoryName("이동봉사");
    }
    if (e.target.value === "pencil") {
      setCategoryName("대필");
    }
    if (e.target.value === "supply") {
      setCategoryName("물품 요청");
    }
    if (e.target.value === "guitar") {
      setCategoryName("기타");
    }
  };
  const onUpload = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    const reader = new FileReader();

    //setImage(reader);
    const objectUrl = URL.createObjectURL(file);
    setImgPreview(objectUrl);

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      const data = reader.readAsDataURL(file);
      setImage(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const writer = localStorage.getItem("schoolNum");

    const data = {
      writer: writer,
      title: title,
      detailed: content,
      hashtag: categoryName,
      img: image,
      whenVol: meetTime,
      place: placeComment,
      volTime: costTime,
    };

    console.log("clicked");
    console.log(writer);
    // localStorage.getItem("")

    // const info = {
    //   writer: writer,
    //   title: title,
    //   detailed: content,
    //   hashtag: categoryName,
    //   img: image,
    //   whenVol: meetTime,
    //   place: placeComment,
    //   volTime: costTime,
    // };

    //console.log(body);
    const axiosInstance = axios.create({
      baseURL: "http://52.79.132.18:8443",
    });
    try {
      const authToken = localStorage.getItem("access_token");

      console.log(localStorage.access_token);
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      await axiosInstance
        .post("/volunteer/register_vol", data, config)
        .then((response) => {
          console.log(response);
          navigate("/main");
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="">
      <form type="submit" onSubmit={handleSubmit}>
        <div className=" md:px-56">
          <div className="text-main font-semibold text-xl my-4">카테고리</div>
          <div className="mb-10">
            {/*토글 버튼*/}
            <div className="">
              <button type="button" onClick={onClickToggleHandler}>
                <ToggleBtn name={categoryName} />
              </button>

              {/*toggle menu*/}
              <div
                className={`${
                  showMenu ? "block" : "hidden"
                } z-50 fixed top-32 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow text-center`}
              >
                <div className="px-4 py-3 ">
                  <ul className="py-4">
                    <li className="border-b-2 ">
                      <button
                        type="button"
                        value={"portVolunteer"}
                        onClick={onClickToggleHandler}
                        className="my-2"
                      >
                        이동 봉사
                      </button>
                    </li>
                    <li className="border-b-2">
                      <button
                        type="button"
                        value={"pencil"}
                        onClick={onClickToggleHandler}
                        className="my-2"
                      >
                        대필
                      </button>
                    </li>
                    <li className="border-b-2 m">
                      <button
                        type="button"
                        value={"supply"}
                        onClick={onClickToggleHandler}
                        className="my-2"
                      >
                        물품 요청
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        value={"guitar"}
                        onClick={onClickToggleHandler}
                        className="my-2"
                      >
                        기타
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="제목">
            <div className="text-main font-semibold text-xl my-4">제목</div>
            <input
              type="text"
              placeholder="제목 작성"
              className="border-b border-main w-full"
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <div className="flex gap-3.5">
              <div className="text-main font-semibold text-xl mt-4">사진</div>
              <div className="text-blue-600 mt-5">* 선택사항</div>
            </div>
            <input type="file" onChange={onUpload} />
            <div className="">
              <ImgBox cameraIcon={imgPreview || cameraIcon} />
            </div>
          </div>
          <div id="날짜" className="pt-4">
            <div className="text-main font-semibold text-xl mt-4">날짜</div>
            <div className=" text-gray-500">
              봉사자와 만날 날짜를 정해주세요.
            </div>
            <textarea
              type="text"
              placeholder="날짜를 입력해주세요"
              className="border border-main w-full h-full"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div id="시간" className="pt-4">
            <div className="text-main font-semibold text-xl mt-4">시간</div>
            <div className=" text-gray-500">
              봉사자와 만날 시간을 정해주세요.
            </div>
            <TextField
              type="text"
              placeholder="시간을 입력해주세요"
              className="border border-main w-full h-full"
              onChange={(e) => setMeetTime(e.target.value)}
            />
          </div>

          <div id="예상 소요 시간" className="pt-4">
            <div className="text-main font-semibold text-xl mt-4">
              예상 소요 시간
            </div>
            <div className=" text-gray-500">소요될 예상 시간을 정해주세요.</div>
            <TextField
              type="text"
              placeholder="예상 소요 시간을 입력해주세요"
              className="border border-main w-full h-full"
              onChange={(e) => setCostTime(e.target.value)}
            />
          </div>
          <div id="장소" className="pt-4">
            <div className="text-main font-semibold text-xl mt-4">장소</div>
            <textarea
              type="text"
              placeholder="장소를 입력해주세요"
              className="border-b border-main w-full"
              onChange={(e) => setPlaceComment(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white text-center text-lg pt-2 bg-main rounded w-80 h-11"
          >
            완료
          </button>
        </div>
      </form>
    </div>
  );
}

export default WriteBoardPage;

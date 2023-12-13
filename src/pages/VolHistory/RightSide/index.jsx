import React, { useEffect, useState } from "react";
import Card from "../../MainPage/Components/Card";
import axios from "axios";
function RightSide() {
  const [volList, setVollist] = useState([]);
  const [volunteerId, setVolunteerId] = useState("");

  const getPost = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://52.79.132.18:8443",
    });
    const authToken = localStorage.getItem("access_token");
    const schoolNum = localStorage.getItem("schoolNum");

    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const result = await axiosInstance.get(
      `/volunteer/get_my_applied_volInfo?whoVol=${schoolNum}`
    );
    console.log(result);
    console.log(result.data.appliedVolList);
    setVollist(result.data.appliedVolList);
    setVolunteerId(result.data.appliedVolList.volunteerId);
    console.log(result.data.appliedVolList.volunteerId);
    
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="relative flex flex-wrap gap-32">
      {volList.map((item, index) => (
        <div key={index} className="relative mt-20 flex flex-wrap gap-8">
          <div>
            <Card
              image={item.img}
              hashtag={item.hashtag}
              title={item.title}
              location={item.place}
              time={item.whenVol}
              completed={true}
              id={item.volunteerId}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RightSide;

import React from "react";
import Card from "../../MainPage/Components/Card";
function RightSide() {
  return (
    <div className="w-full h-full mt-20">
      <Card
        image={undefined}
        hashtag={"이동봉사"}
        title={"구합니다"}
        location={"성호관"}
        time={"12시 30분"}
        completed={true}
      />
    </div>
  );
}

export default RightSide;

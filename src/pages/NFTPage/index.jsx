//NFT root
import React from "react";
import BudStatus from "./Components/BudStatus";
import FirstNFT from "./Components/FirstNFT";
import SecondNFT from "./Components/SecondNFT";
import ThirdNFT from "./Components/ThirdNFT";

function NFTPage() {
  return (
    <div className="w-full flex flex-row">
      <div className="grow flex flex-col items-center">
        <div className="max-w-3xl mx-auto">
          <BudStatus />
          <FirstNFT />
          <SecondNFT />
          <ThirdNFT />
        </div>
      </div>
    </div>
  );
}

export default NFTPage;

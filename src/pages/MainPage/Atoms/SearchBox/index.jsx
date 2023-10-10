import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
function SearchBox() {
  return (
    <div className="relative pt-36">
      <div>
        <TextField
          placeholder="search"
          className=" bg-[#EFEFE4] rounded-xl w-72  "
        >
          <div>
            <SearchIcon className="absolute right-0 inset-y-0 items-center" />
          </div>
        </TextField>
      </div>
    </div>
  );
}

export default SearchBox;

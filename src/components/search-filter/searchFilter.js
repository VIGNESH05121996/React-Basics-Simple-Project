import "./searchFilter.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="search-whole-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search...."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="name-box" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchFilter;

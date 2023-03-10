import React from "react";
import { BsSearch } from "react-icons/bs";
import ".././styles/search.css";
const Search = ({ facility, speciality, search }) => {
  return (
    <>
      <div className="searchContainer">
        <div className="searchDescriptionContainer">
          <p className="searchDescription">
            {/* <span>
              <BsSearch />
            </span>{" "} */}
            See Nearby <strong>{facility}</strong> {speciality}
          </p>
        </div>
        <div className="searchBoxContainter">
          <input type="text" className="searchBox" placeholder={search} />
        </div>
      </div>
    </>
  );
};

export default Search;

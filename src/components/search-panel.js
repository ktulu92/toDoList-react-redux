import React from "react";
const SearchPanel = () => {
    const SearchText= "Time to search"
    const searchStyle = {
        fontSize: "20px"
    }
  return <input 
  style={searchStyle}
  placeholder={SearchText}  className="foo" />;
};

export default SearchPanel;
import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#FCF596" },
    CSS: { backgroundColor: "#DCE4C9" },
    JavaScript: { backgroundColor: "#C2FFC7" },
    React: { backgroundColor: "#FFCCE1" },
    default: { backgroundColor: "#F2F9FF" },
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;

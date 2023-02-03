import React, { useState } from "react";

function FoldableParagraph(props) {
  const [currentClass, setCurrentClass] = useState("paragraph-folded");
  const toggleClass = () => {
    if (currentClass == "paragraph-folded") {
      setCurrentClass("paragraph-extended");
    } else {
      setCurrentClass("paragraph-folded");
    }
  };
  return (
    <p className={currentClass} onClick={() => toggleClass()}>
      {props.description}
      <br />{" "}
      <a href="#">
        {currentClass == "paragraph-folded" ? "Show more" : "Show less"}
      </a>
    </p>
  );
}

export default FoldableParagraph;

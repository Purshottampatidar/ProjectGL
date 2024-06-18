import React, { useState } from "react";
import AccordionWrapper from "./AccordionWrapper.jsx";
import AccordionItem from "./AccordionItem";
import AccordionArray from '../Components/AccordionData.js';
const Accordion = ({ nthOpen, isMultipleOpening }) => {
  const [expand, setExpand] = useState(() => {
    if (nthOpen && nthOpen.length > 0) {
      return isMultipleOpening?nthOpen:nthOpen[0];
    }
    return -1;
  });

  const handleOnClick = (index) => {
    if (isMultipleOpening) {
      setExpand((prevExpand) =>
        Array.isArray(prevExpand)
          ? prevExpand.includes(index)
            ? prevExpand.filter((item) => item !== index)
            : [...prevExpand, index]
          : [index]
      );
    } else {
      setExpand((prevExpand) =>
        Array.isArray(prevExpand)
          ? prevExpand.includes(index)
            ? prevExpand.filter((item) => item !== index)
            : [index]
          : prevExpand === index
          ? -1 : index
      );
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
      <AccordionWrapper>
        {AccordionArray.map((acc, index) => (
          <AccordionItem
            key={index}
            title={acc.title}
            desc={acc.desc}
            expand={
              Array.isArray(expand) ? expand.includes(index) : expand === index
            }
            onClick={() => handleOnClick(index)}
          />
        ))}
      </AccordionWrapper>
    </>
  );
};

export default Accordion;

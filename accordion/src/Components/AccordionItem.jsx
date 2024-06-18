import React, { useState, useRef, useEffect } from "react";
const AccordionItem = ({ title, desc, expand, onClick }) => {
  const inputRef = useRef(null); 
  const [height, setHeight] = useState('0px');
  useEffect(() => {
    if (inputRef.current) {
      const scrollHeight = inputRef.current.scrollHeight;
      setHeight(expand ? `${scrollHeight}px` : "0px");
    }
  }, [expand]);
  return (
    <div className="AccordionItem">
      <div className='Accordion_btn' onClick={onClick}>
        <p style={{ fontWeight: expand ? "bold" : "" }}>{title}</p>
        <p>{expand ? "-" : "+"}</p>
      </div>
      <div
        className={`description ${expand ? "expand" : ''}`}
        style={{ height: height }} 
        ref={inputRef}
      >
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default AccordionItem;

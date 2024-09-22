import React, { useState } from "react";

const Collapse = ({ title, className, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <div className="collapse-header">
        <h2>{title}</h2>
        <i
          className={`fas fa-chevron-up chevron-icon ${
            isOpen ? "rotated" : ""
          }`}
          onClick={toggleCollapse}
        ></i>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;

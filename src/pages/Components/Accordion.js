// src/components/Accordion.js
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="accordion-content"><p>{content}</p></div>}
    </div>
  );
};

export default Accordion;

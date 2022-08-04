import React from 'react';
import "./Paragraph.css";

function Paragraph({children}) {
  return (
    <p className="paragraph">{children}</p>
  )
}

export default Paragraph;
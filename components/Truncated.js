import React from "react";

function Truncated({ text }) {
    
    const isTruncated = text.length > 250;

    const truncatedText = isTruncated ? text.slice(0, 250) + '...' : text;
  
    return <p>{truncatedText}</p>;
  }

  export default Truncated;
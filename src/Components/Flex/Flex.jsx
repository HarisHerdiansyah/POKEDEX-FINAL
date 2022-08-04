import React from 'react';
import "./Flex.css";

function Flex({children}) {
  return (
    <div className="flex">
      {children}
    </div>
  )
}

function FlexAroundWrap({children}) {
  return (
    <div className="flexAroundWrap">
      {children}
    </div>
  )
}

export { Flex, FlexAroundWrap };
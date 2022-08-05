import React from 'react';
import error from "../../Assets/img/error.svg";

function ErrorInfo() {
  return (
    <img src={error} alt="Error 404 Info" width="300px" style={{marginBottom: "20px"}} />
  )
}

export default ErrorInfo;
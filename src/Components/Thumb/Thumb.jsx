import React from 'react';
import "./Thumb.css";

function Thumb(props) {
  return (
    <img src={props.src} alt={props.alt} width={props.width} onError={props.onError} onClick={props.onClick} className="thumb" />
  )
}

Thumb.defaultProps = {
  width: "250"
}

export default Thumb;
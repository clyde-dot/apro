import React from "react";
import "./Feedback.css";

import StarOn from "../../ui/star/StarOn";
import StarOff from "../../ui/star/StarOff";

function Feedback({ star = 5, rate = 5.0 }) {
  return (
    <div className="feedback">
      <div className="feedback-stars">
        {[...Array(star).keys()].map((index) => (
          <StarOn key={index} className="star-on" />
        ))}
        {star < 5
          ? [...Array(5 - star).keys()].map((index) => (
              <StarOff key={index} className="star-off" />
            ))
          : ""}
      </div>
      <div>
        <span className="single-text">{rate}</span>
      </div>
    </div>
  );
}

export default Feedback;

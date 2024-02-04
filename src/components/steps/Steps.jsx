import React from "react";
import "./Steps.css";

import message from "./assets/messages.svg";
import sms from "./assets/sms-tracking.png";
import edit from "./assets/edit-2.svg";

function Steps() {
  return (
    <div className="main-container">
      <div className="steps">
        <div className="single-text">Three steps. Three minutes.</div>
        <div className="text-title">Everything should be this easy.</div>
        <div className="steps-group">
          <div className="steps-group-item">
            <img src={message} width="75" height="75" alt="Message" />
            <h3 className="steps-group-item-title">Answer questions</h3>
            <p className="steps-group-item-subtitle">
              Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
              bibendum in in vestibulum.
            </p>
          </div>

          <div className="steps-group-item">
            <img src={sms} width="75" height="75" alt="Sms" />
            <h3 className="steps-group-item-title">Select a quote</h3>
            <p className="steps-group-item-subtitle">
              Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
              bibendum in in vestibulum.
            </p>
          </div>

          <div className="steps-group-item">
            <img src={edit} width="75" height="75" alt="Edit" />
            <h3 className="steps-group-item-title">Get registered</h3>
            <p className="steps-group-item-subtitle">
              Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
              bibendum in in vestibulum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;

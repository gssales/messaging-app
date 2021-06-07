//Generated with util/create-component.js
import React from "react";

import { MessageProps } from "./Message.types";

import "./Message.scss";

const Message: React.FC<MessageProps> = ({ message, hasAfter, hasBefore }) => (
  <div 
    data-testid="Message" 
    className={`message ${message.isReceived ? 'received' : 'sended'}${hasAfter ? ' has-after' : ''}${hasBefore ? ' has-before' : ''}`}>
    {/* <span className="tag">{message.timestamp.toDateString()}</span> */}
    <p className="content">{message.content}</p>
  </div>
);

export default Message;

  
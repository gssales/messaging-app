//Generated with util/create-component.js
import React from "react";

import { MessageListProps } from "./MessageList.types";

import "./MessageList.scss";
import { message } from "../../types/message";
import Message from "../Message/Message";

const MessageList: React.FC<MessageListProps> = ({ foo = '' }) => {
  const messages: message[] = [
    {
      uid: 1,
      content: 'this is a message #1',
      timestamp: new Date(),
      isReceived: true,
    },
    {
      uid: 1,
      content: 'this is a message #2',
      timestamp: new Date(),
      isReceived: true,
    },
    {
      uid: 1,
      content: 'this is a message #3',
      timestamp: new Date(),
      isReceived: false,
    },
    {
      uid: 1,
      content: 'this is a message #4',
      timestamp: new Date(),
      isReceived: true,
    },
    {
      uid: 1,
      content: 'this is a message #5',
      timestamp: new Date(),
      isReceived: false,
    },
    {
      uid: 1,
      content: 'this is a message #6',
      timestamp: new Date(),
      isReceived: false,
    },
    {
      uid: 1,
      content: 'this is a message #7',
      timestamp: new Date(),
      isReceived: false,
    },
    {
      uid: 1,
      content: 'this is a message #8',
      timestamp: new Date(),
      isReceived: true,
    },
    {
      uid: 1,
      content: 'this is a message #9',
      timestamp: new Date(),
      isReceived: true,
    },
    {
      uid: 1,
    content: 'this is a message #1',
    timestamp: new Date(),
    isReceived: true,
  },
  {
    uid: 1,
    content: 'this is a message #2 this is a message #2this is a message #2this is a message #2this is a message #2this is a message #2this is a message #2this is a message #2this is a message #2this is a message #2',
    timestamp: new Date(),
    isReceived: true,
  },
  {
    uid: 1,
    content: 'this is a message #3',
    timestamp: new Date(),
    isReceived: false,
  },
  {
    uid: 1,
    content: 'this is a message #4',
    timestamp: new Date(),
    isReceived: true,
  },
  {
    uid: 1,
    content: 'this is a message #5',
    timestamp: new Date(),
    isReceived: false,
  },
  {
    uid: 1,
    content: 'this is a message #6',
    timestamp: new Date(),
    isReceived: false,
  },
  {
    uid: 1,
    content: 'this is a message #7',
    timestamp: new Date(),
    isReceived: false,
  },
  {
    uid: 1,
    content: 'this is a message #8',
    timestamp: new Date(),
    isReceived: true,
  },
  {
    uid: 1,
    content: 'this is a message #9',
    timestamp: new Date(),
    isReceived: true,
  },
  {
    uid: 1,
    content: 'this is a message #1',
    timestamp: new Date(),
    isReceived: true,
  },
  {
    uid: 1,
    content: 'this is a message #2',
    timestamp: new Date(),
    isReceived: true,
  },
  {
    uid: 1,
    content: 'this is a message #3',
    timestamp: new Date(),
    isReceived: false,
  },
  {
    uid: 1,
    content: 'this is a message #4',
    timestamp: new Date(),
    isReceived: true,
  },
  {
    uid: 1,
    content: 'this is a message #5',
    timestamp: new Date(),
    isReceived: false,
  },
  {
    uid: 1,
    content: 'this is a message #6',
    timestamp: new Date(),
    isReceived: false,
  },
  {
    uid: 1,
    content: 'this is a message #7',
    timestamp: new Date(),
    isReceived: false,
  },
  {
    uid: 1,
    content: 'this is a message #8',
    timestamp: new Date(),
    isReceived: true,
  },
  {
    uid: 1,
    content: 'this is a message #9',
    timestamp: new Date(),
    isReceived: true,
  },
  ]
  return (
    <div data-testid="MessageList" className="chat">
      <div className="message-list">
        {
          messages.map((message, i) => (
            <Message 
              message={message} 
              hasAfter={i > 0 ? message.isReceived === messages[i-1].isReceived : false} 
              hasBefore={i < messages.length-1 ? message.isReceived === messages[i+1].isReceived : false} />
          ))
        }
      </div>
    </div>
  );
  };

export default MessageList;

  
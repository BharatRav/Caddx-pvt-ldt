import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "../../configs/ChatBotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const CustomChatBot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default CustomChatBot;

import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    if (message.includes("my name")) {
      actions.handleSay();
    } else if (message.includes("bachche")) {
      actions.handleBachche();
    }
    actions.handleHello();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;

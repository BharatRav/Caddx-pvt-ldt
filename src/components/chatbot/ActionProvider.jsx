import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "Hello. Nice to meet you. How can i assist you?"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOutOfBox = () => {
    const botMessage = createChatBotMessage(
      "Sorry i couldn't get what you are asking. contact us on 8745999061"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOutOfBox,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

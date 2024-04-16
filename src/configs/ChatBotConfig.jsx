import { createChatBotMessage } from "react-chatbot-kit";
import Logo from "../components/Shared/Logo";
import botAvatar from "../assets/chatbot/botAvatar.jpg";
const botName = "Caddy";
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  //   customStyles: {
  //     botMessageBox: {
  //       backgroundColor: "#376B7E",
  //     },
  //     chatButton: {
  //       //   backgroundColor: "#5ccc9d",
  //       backgroundColor: "#ffa500",
  //     },
  //   },
  customComponents: {
    //     header: () => (
    //       <div
    //         style={{
    //           color: "black",
    //           display: "flex",
    //           flexDirection: "row",
    //           gap: "20px",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Logo /> ChatBot
    //       </div>
    //     ),
    botAvatar: (props) => (
      <img src={botAvatar} alt="B" style={{ width: "44px", height: "44px" }} />
    ),
  },
};
export default config;

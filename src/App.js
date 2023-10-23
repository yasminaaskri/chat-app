import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import { ChatSettings } from "react-chat-engine";

import "./App.css";

const projectID = "10a64f5c-8007-49e6-9d5e-fe70f2451532";

const App = () => {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    isLogged: null,
  });
  const logout = () => {
    setUser({
      username: "",
      password: "",
      isLogged: false,
    });
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: "",
        password: "",
        isLogged: false,
      })
    );
  };

  React.useEffect(() => {
    setTimeout(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) setUser({ ...JSON.parse(storedUser) });
    }, 100);
  }, []);
  if (user?.isLogged === null)
    return (
      <video
        loop
        src="https://cdnl.iconscout.com/lottie/premium/thumb/circle-loader-5671955-4723334.mp4"
      ></video>
    );
  if (user?.isLogged === false) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={user.username}
      userSecret={user.password}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderChatSettings={(props) => (
        <>
          <ChatSettings {...props} />
          <button  className="button-logout" style={{float: 'right', marginRight: '10px'}}   onClick={logout}>Logout</button>
        </>
      )}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;

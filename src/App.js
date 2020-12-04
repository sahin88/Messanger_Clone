import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { FormControl, Input } from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
function App() {
  const [input, setInput] = useState("");
  const [messages, sendMessage] = useState([
    { username: "erdal", message: "ne dedin" },
  ]);
  const [username, setUsername] = useState("");

  const sendMessages = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  useEffect(() => {
    setUsername(prompt("Please  enter your name!"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        sendMessage(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, [input]);

  return (
    <div className="App">
      <img
        className="app_image"
        src="https://image.freepik.com/free-vector/message-notification-background_23-2147671665.jpg"
      />
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input
            className="app__formcontrol__input"
            placeholder={"Enter your messsage"}
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <IconButton
            className="app__formcontrol__icon"
            onClick={sendMessages}
            variant="contained"
            color="primary"
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;

import React from "react";
import InputEmoji from "react-input-emoji";

export default function InputBox(props) {
  var array = [];
  function handleOnEnter(text) {
      array = props.messages;
      const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
      let obj = {
        user: user_list[Math.floor(Math.random() * 5)],
        message: text,
        likes : 0
      };
      props.setMessages(array.concat(obj));
  }

  return (
    <InputEmoji
      value={props.text}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
  );
}

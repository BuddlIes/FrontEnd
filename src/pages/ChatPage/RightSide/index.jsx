import React, { useRef } from "react";
import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ROOM_SEQ = 1;
function RightSide() {
  const client = useRef({});
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);
  const authToken = localStorage.getItem("access_token");

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://52.79.132.18:8443/ws-stomp",

      connectHeaders: {
        "auth-token": "spring-chat-auth-token",
      },

      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
    });
    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(`/sub/chat/${ROOM_SEQ}`, ({ body }) => {
      setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
    });
  };
  const publish = (message) => {
    if (!client.current.connected) return;
    client.current.publish({
      destination: "/pub/chat",
      body: JSON.stringify({ roomSeq: ROOM_SEQ, message }),
    });
    setMessage("");
  };
  return (
    <div>
      {chatMessages && chatMessages.length > 0 && (
        <ul>
          {chatMessages.map((_chatMessage, index) => (
            <li key={index}>{_chatMessage.message}</li>
          ))}
        </ul>
      )}
      <div>
        <input
          type={"text"}
          placeholder={"message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.which === 13 && publish(message)}
        />
        <button onClick={() => publish(message)}>send</button>
      </div>
    </div>
  );
}

export default RightSide;

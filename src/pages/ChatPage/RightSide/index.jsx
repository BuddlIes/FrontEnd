import React, { useRef } from "react";
import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sendIcon from "../src/airplane.png";
const ROOM_SEQ = 1;
function RightSide() {
  const param = useParams();
  const ROOM_SEQ = param.id;
  const client = useRef({});
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);
  const authToken = localStorage.getItem("access_token");

  const connect = () => {
    console.log("connecting...");
    client.current = new StompJs.Client({
      brokerURL: "ws://52.79.132.18:8443/ws-stomp/websocket",

      connectHeaders: {
        "auth-token": "spring-chat-auth-token",
      },

      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log("success");
        subscribe();
      },
      onStompError: (frame) => {
        console.log("Stomp error:" + frame.headers["message"]);
        console.log("Stomp error:" + frame.body);
        console.error("An error occurred during WebSocket connection.");
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
    <div className="py-36 pl-11 w-full">
      {chatMessages && chatMessages.length > 0 && (
        <ul className="flex flex-col">
          {chatMessages.map((_chatMessage, index) => (
            <li
              className="grid max-w-fit min-w-fit break-words text-white bg-green01 text-2xl px-3 text-center rounded-lg m-2 ml-auto"
              key={index}
            >
              {_chatMessage.message}
            </li>
          ))}
        </ul>
      )}
      <div className="flex gap-3">
        <input
          type={"text"}
          placeholder={"메세지를 입력하세요"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.which === 13 && publish(message)}
          className=" bg-[#EFEFE4] text-black rounded-xl h-12 w-1/3 placeholder: text-start pl-3"
        />
        <div className="">
          <button onClick={() => publish(message)}>
            <img src={sendIcon} className="w-8 pt-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSide;

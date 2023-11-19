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
  const [writer, setWriter] = useState("");
  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

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
    console.log(chatMessages);
    console.log(JSON.parse(body));
  };
  const publish = (message) => {
    if (!client.current.connected) return;
    const writer = localStorage.getItem("schoolNum");
    console.log(writer);

    client.current.publish({
      destination: "/pub/chat",
      body: JSON.stringify({ roomSeq: ROOM_SEQ, message }),
    });

    setMessage("");
  };
  return (
    <div className="py-36 pl-11 w-full">
      <div>
        {chatMessages && chatMessages.length > 0 && (
          <ul className="flex flex-col">
            {chatMessages.map((_chatMessage, index) => (
              <li
                className="grid max-w-fit min-w-fit break-words text-white  bg-green01 text-2xl p-3 text-center rounded-full m-3 ml-auto font-light"
                key={index}
              >
                {_chatMessage.message}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className=" flex gap-3 bottom-0 right-0 border-t justify-items-center pl-24">
        <div className="w-full flex pt-5 right-0 bottom-0">
          <input
            type={"text"}
            placeholder={"✍️ 메세지를 입력해주세요"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.which === 13 && publish(message)}
            className="bg-[#EFEFE4] text-black rounded-full w-full h-16 placeholder:text-start placeholder:text-xl   pl-12  font-medium"
          />
          <button onClick={() => publish(message)} className="">
            <img src={sendIcon} className="w-12" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSide;

import React from "react";
import { Client } from "@stomp/stompjs";
import WebSocket from "ws";
function RightSide() {
  const client = new Client({
    brokeruRL: "ws://localhost:15674/ws",
    onConnect: () => {
      client.subscribe("/topic/test01", (message) =>
        console.log(`Received: ${message.body}`)
      );
      client.publish({ destination: "/topic/test01", body: "First Message" });
    },
  });
  return <div>RightSide</div>;
}

export default RightSide;

import {io } from 'socket.io-client'
export const socket = io(
  "https://suretrustg29fsd-ashish.onrender.com",
  {
    path: "/socket.io",
    transports: ["polling", "websocket"],
    autoConnect: true,
  }
);

import {io } from 'socket.io-client'
import { baseUrl } from '../baseUrl'


export const socket = io(`${baseUrl}`,{
    path: "/socket.io",
    transports: ["polling", "websocket"],
    autoConnect:true
});
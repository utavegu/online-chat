import { useEffect } from 'react';
// import { io } from 'socket.io-client';
import { Message, WSMessage } from '../model/model';

const host = 'localhost';
const port = 4000;
const url = `http://${host}:${port}`;

let socket = null;

const connect = (id) => {
  console.log('connecting');
  return io(url, {
    path: '/socket',
    query: { id },
  });
};

export const useWS = (id) => {
  if (!id) throw new Error('[useWS] id is required');

  useEffect(() => {
    socket = connect(id);

    // console.log(socket?.connected, socket);

    socket.on(WSMessage.TYPE.TEXT, (message) => {
      const json = JSON.parse(message);
      console.log(json);
    });
  }, []);

  return socket;
};

export const send = (message) => {
  console.log(message);

  if (!socket) throw new Error('[useWS] socket is not connected');
  socket.emit(WSMessage.TYPE.TEXT, message);
};

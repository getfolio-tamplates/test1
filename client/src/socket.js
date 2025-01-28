import io from 'socket.io-client';

const SOCKET_URL = process.env.NODE_ENV === 'production'
  ? '/.netlify/functions/socketio-handler'
  : 'http://localhost:3001';

const socket = io(SOCKET_URL, {
  path: process.env.NODE_ENV === 'production' ? '/socket.io' : undefined,
  transports: ['websocket', 'polling']
});

export default socket;

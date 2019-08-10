import * as http from 'http';
import app from './app';
import { normilizePort, onError, onListening } from './utils/utils';

const server = http.createServer(app);
const port = normilizePort(process.env.port || 3000);

server.listen(port);
server.on('error', onError(server));
server.on('listening',onListening(server));

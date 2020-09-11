const express = require('express');
const userRouter = require('./users/userRouter')
const postRouter = require('./posts/postRouter')

const server = express();
server.use(express.json())

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method}
    to ${req.url} from ${req.get('Origin')}`
  );
  next();
};

server.use(logger)


server.get('/', (req, res) => {
  const MOTD = process.env.MOTD || 'ello from NOT the .env';

  res.status(200).json({motd:MOTD});
});
server.use('/users',userRouter) 
// server.use('/posts',postRouter)


//custom middleware



module.exports = server;

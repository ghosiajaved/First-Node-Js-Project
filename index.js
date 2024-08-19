import fs from 'fs';  // Correct import for fs module
import { createServer } from 'http';

const myServer = createServer((req, res) => {
    
  const log = `${Date.now()}: ${req.url} New Req Received\n`;

  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.end('Error occurred');
      return;
    }
    res.end('Hello From Server Again');
  });
});

myServer.listen(8000, () => console.log('Server Started!'));

// console.log("NODE JS PROJECT SETUP COMPLETED");
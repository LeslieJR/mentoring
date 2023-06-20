require('dotenv').config();

import server from './server.js';

server.listen(process.env.PORT, ()=>{
    console.log(`server running on port: ${process.env.PORT}`)
})

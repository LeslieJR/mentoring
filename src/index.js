require('dotenv').config();

const server = require('./server')

server.listen(process.env.PORT, ()=>{
    console.log(`server running on port: ${process.env.PORT}`)
})

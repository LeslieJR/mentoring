const server = require('./server')

const PORT = server.get('port')
server.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})
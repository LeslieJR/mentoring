const server = require('./server')

server.listen(server.get('port'), ()=>{
    console.log('server running on port: ',server.get('port'))
})
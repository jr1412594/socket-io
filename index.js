const app = require('express')();
const http = require('http').createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
        methods: '*'
    }
})


io.on("connection", socket => {
    console.log('A user connected')
    socket.on("chat message", message => {
        io.emit("chat message", message)
    })
})

http.listen(4000, () => {
    console.log("Im listening on port 4000!")
})
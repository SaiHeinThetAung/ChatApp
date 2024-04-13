const express=require('express')
const socket=require('socket.io')
const app=express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
const server=app.listen(4000,()=>{
    console.log('listening on 4000')
})

const io=socket(server)
io.on('connection',(socket)=>{
    socket.on('chat',data=>{
        io.sockets.emit('chat',data)
    })
    socket.on('typing',name=>{
        socket.broadcast.emit('typing',name)
    })
})
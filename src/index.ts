import "reflect-metadata";
import './database'
import * as express from 'express'
import * as path from 'path'
import * as http from 'http'
import router from "./routes";
import messageController from "./controllers/messageController";

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(express.json())

app.use('/', router)


io.on('connection', socket =>{
    console.log(`socket connected: ${socket.id}`)
    socket.on('sendMessage', async message => {
        const data = await messageController.createMessage(message)

        socket.emit('renderMessages', data)
    })
})

server.listen(3000, () => console.log('Server Running!'))

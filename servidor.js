const http = require('http');
const express =  require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    console.log("Usuário conectado");
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
})


aplicacao.use(express.static('public'));


servidorHttp.listen(3000, '192.168.0.14');
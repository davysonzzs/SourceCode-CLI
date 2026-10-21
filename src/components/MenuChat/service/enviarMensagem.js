export function enviarMensagem(socket, mensagem, usuario){
    if(!mensagem || !usuario){
        return "Erro: digite uma mensagem ou valide seu Usuario" 
    }

    const mensagem = {
        mensagem,
        usuario
    }
    socket.emit('message', mensagem)

    return "Mensagem enviada"
}
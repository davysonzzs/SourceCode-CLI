export function receberMensagem(socket, array){
    if(!socket){
        return "erro de socket"
    }

    socket.on('recebendo_agendamento', data => {
        return [...array, data]
    })
}
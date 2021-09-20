const socket = io();

document.querySelector('#form-message').addEventListener('submit', (e) => {
    e.preventDefault();

    const message = document.querySelector('.txt-message').value;
    if(message)
        socket.emit('messageSend', message);
});

socket.on("incommingMessage", message => {
    let containerEl = document.querySelector('.conversation');
    let el = document.createElement('div');
    el.innerHTML = message;

    containerEl.appendChild(el);
})
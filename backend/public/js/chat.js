const socket = io();

// Elements
const $messageInput = document.querySelector('.type_msg');
const $messageButton = document.querySelector('.send_btn');
const $messagesCardBody = document.querySelector('.msg_card_body');

// Templates
const messageSenderTemplate = document.querySelector('#message-sender-template').innerHTML;
const messageRecieverTemplate = document.querySelector('#message-receiver-template').innerHTML;
const messageNotification = document.querySelector("#message-notification").innerHTML;

socket.on('incommingMessage', (message) => {
    if(message.avatar){
        const html = Mustache.render(messageSenderTemplate, {
            message: message.text,
            avatar: message.avatar,
            time: moment(message.createdAt).format('H:mm')
        });
        $messagesCardBody.insertAdjacentHTML('beforeend', html);
    }
    else {
        const html = Mustache.render(messageNotification, {
            message: message.text,
        });
        $messagesCardBody.insertAdjacentHTML('beforeend', html);
    }
});

$messageButton.addEventListener('click', () => {
    if($messageInput.value){
        socket.emit('messageSend', $messageInput.value, (err) => {
            if(err) 
                console.log(err);
            else 
                console.log("Sent");
        });

        $messageInput.value = '';
        $messageInput.focus();
    }
});
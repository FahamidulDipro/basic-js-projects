const sendBtn = document.querySelector('#send_button');
const messegeIn = document.querySelector('#messageIn');
const messegeOut = document.querySelector('#message_out');

sendBtn.addEventListener('click', sendMsg);

function sendMsg() {
    let content = messegeIn.value;
    if (content == '') {
        alert('Please Enter Valid Value');
    } else {
        messegeOut.innerHTML = content;
        messegeIn.value = '';
    }

}
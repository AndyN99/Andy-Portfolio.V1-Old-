const sendData = () => {
    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/9andyN@gmail.com',
        dataType: 'json',
        accepts: 'application/json',
        data: {
            name: document.getElementById('name').value,
            email:document.getElementById('email').value,
            topic: document.getElementById('topic').value,
            message: document.getElementById('message').value
        },
        success: (data) => console.log(data),
        error: (err) => console.log(err)
    });
}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('sumbit').addEventListener('click',sendData());
});

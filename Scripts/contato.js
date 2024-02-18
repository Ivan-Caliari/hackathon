var send = document.getElementById('send').addEventListener('click', sendmail);

function sendmail() {
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    window.location.href = `mailto:ivan.califigueira@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
}
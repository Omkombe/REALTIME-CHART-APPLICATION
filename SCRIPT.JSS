const chatBox = document.getElementById('chat-box');
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('message');
const usernameInput = document.getElementById('username');

// Temporary message array (simulate real-time messages)
const messages = [];

function addMessage(username, text) {
  const timestamp = new Date().toLocaleTimeString();
  const messageHTML = `<div class="message"><span>${username}</span>: ${text} <small>(${timestamp})</small></div>`;
  chatBox.innerHTML += messageHTML;
  chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll
}

sendBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const text = messageInput.value.trim();
  if (username && text) {
    addMessage(username, text);
    messageInput.value = '';
    // Here you'd emit message to server via WebSocket (e.g., socket.emit)
  }
});

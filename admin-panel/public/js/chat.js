document.addEventListener('DOMContentLoaded', () => {
    const socket = io(); 
    
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const chatMessages = document.getElementById('chatMessages');
    
    sendMessageBtn.addEventListener('click', () => {
      const message = messageInput.value;
      if (message.trim() !== '') {
        socket.emit('chatMessage', message);
        messageInput.value = '';
      }
    });
    
    // Listen for incoming messages from the server
    socket.on('chatMessage', (message) => {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
    });
  });
  
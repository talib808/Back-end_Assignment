const ChatMessage = require('../models/ChatMessage');

exports.getChatPage = async (req, res) => {
  try {
    // Fetch chat messages from the database
    const chatMessages = await ChatMessage.find().sort({ timestamp: 1 });
    res.render('chat/index', { chatMessages });
  } catch (err) {
    console.error(err);
    res.render('chat/index', { error: 'Error fetching chat messages' });
  }
};

exports.saveChatMessage = async (message) => {
  try {
    // Save the chat message to the database
    await ChatMessage.create({ message });
  } catch (err) {
    console.error('Error saving chat message:', err);
  }
};

  

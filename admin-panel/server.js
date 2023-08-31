const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require("../admin-panel/config/database");
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Configure middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'mdtalib1234567890@#$%^', resave: true, saveUninitialized: true }));

//  routes
const userRoutes = require('../admin-panel/app/routes/userRoutes');
const chatRoutes = require('./app/routes/chatRoutes'); 
const paymentRoutes = require('./app/routes/paymentRoutes');
const dashboardRoutes = require('../admin-panel/app/routes/dashboardRoutes'); // Add this line

app.use('/dashboard', dashboardRoutes); 
app.use('/payment', paymentRoutes);
app.use('/users', userRoutes);
app.use('/chat', chatRoutes); 

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//  Socket.io for real-time communication
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming chat messages
  socket.on('chatMessage', async(message) => {
    // Broadcast the message to all connected clients
    io.emit('chatMessage', message);
    // Save the message to MongoDB
    await chatController.saveChatMessage(message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});











// const express = require("express");
// const path = require("path");
// const app = express();
// const database = require("../admin-panel/config/database"); // Make sure to provide the correct path
// const PORT = process.env.PORT || 5000;

// // Set up view engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Serve static files from the public folder
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/dashboard", (req, res) => {
//   const statistics = {
//     usersCount: 100,
//     revenue: 5000,
//     statistic1: 50,
//     statistic2: 75,
//     statistic3: 30,
//   };

//   res.render("dashboard", { statistics });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


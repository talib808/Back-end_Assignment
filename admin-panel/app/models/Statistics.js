const mongoose = require('mongoose');

const statisticsSchema = new mongoose.Schema({
  usersCount: Number,
  revenue: Number,
  statistic1:Number ,
  statistic2: Number,
  statistic3: Number
});

module.exports = mongoose.model('Statistics', statisticsSchema);

const Statistics = require("../models/Statistics");

const dashboardController = {};

dashboardController.getDashboard = async (req, res) => {
  try {
    const statistics = await Statistics.findOne();
    if (!statistics) {
      return res.render("dashboard", { statistics: {} });
    }

    res.render("dashboard", { statistics });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = dashboardController;

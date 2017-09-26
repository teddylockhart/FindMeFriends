var path = require("path");

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

module.exports = function ( app ) {
    // A default, catch-all route that leads to home.html which displays the home page. (HOW?)
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    // A GET Route to /survey which should display the survey page.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}
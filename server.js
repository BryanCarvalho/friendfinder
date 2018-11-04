
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname), "app/public/home.html");
});
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
}); 
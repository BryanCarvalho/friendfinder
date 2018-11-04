
let express = require("express");
let bodyParser = require("body-parser");
let api = require("./app/routing/apiRoutes");
let html = require("./app/routing/htmlRoutes");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(api);
app.use(html);

app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});
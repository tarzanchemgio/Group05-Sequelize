const express = require("express");
const app = express();
var path = require("path");
const hbs = require("express-handlebars");
const fs = require("fs");

const port = process.env.PORT || 3000;

app.engine(
	"hbs",
	hbs({
		extname: "hbs",
		defaultLayout: "layout",
		layoutsDir: __dirname + "/views/layouts/",
		partialsDir: __dirname + "/views/partials/",
	})
);

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
	fs.readFile("index.html", (err, data) => {
		res.statusCode = 200;
		res.setHeader("content-type", "text/html");
		res.send(data);
	});
});

app.get("/index.html", (req, res) => {
	fs.readFile("index.html", (err, data) => {
		res.statusCode = 200;
		res.setHeader("content-type", "text/html");
		res.send(data);
	});
});

app.listen(port, () => {
	console.log(`Listening at port:${port}`);
});

const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const path = require("path");

const PORT = process.env.PORT || 5001;

express()
	.use(express.static(path.join(__dirname, "public")))
	.set("views", path.join(__dirname, "views"))
	.set("view engine", "ejs")
	.get("/", (req, res) => res.render("pages/index"))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));

connectDb();
const app = express();

// welcome screen when visiting localhost 3000
app.get("/", (req, res) => {
	res.send("Welcome to lotus backend");
});

//to parse the data from client so that this can be read by the server side
app.use(express.json());

// this are the routes for comments and profile and reviews
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));

//error handler
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Lotus Backend running on port: ${port}`);
});

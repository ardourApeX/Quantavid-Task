const express = require("express");
const cors = require("cors");
const {initializeDBConnection} = require("./database/user")
const { loginRoute } = require("./routes/login");
const { signupRoute } = require("./routes/signup");
const app = express();

//CONNECTING TO MONGOOSE
initializeDBConnection();

//CORS Policy
app.use(
	cors({
		origin: "*",
	})
);

const port = process.env.PORT || 5000;

//ROUTES
app.use("/login", loginRoute);
app.use("/signup", signupRoute);

app.get("/", (req, res) => {
	res.send("Hello Express app!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));

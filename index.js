const express = require("express");
const cors = require("cors");
var { users } = require("./database/user");
const { loginRoute } = require("./routes/login");
const { signupRoute } = require("./routes/signup");
const app = express();
app.use(
	cors({
		origin: "*",
	})
);
const port = process.env.PORT || 5000;
app.use("/login", loginRoute);
app.use("/signup", signupRoute);
app.get("/", (req, res) => {
	res.send("Hello Express app!");
});
app.get("/users", function (request, response) {
	response.status(200).send({ success: true, data: users });
});
app.listen(port, () => console.log(`Listening on port ${port}`));

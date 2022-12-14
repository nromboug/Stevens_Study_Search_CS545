const express = require("express");
const session = require("express-session");
var cors = require("cors");
const app = express();

app.use(cors());

const configRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: "AuthCookie",
    secret: "some secret string!",
    resave: false,
    saveUninitialized: true,
  })
);

configRoutes(app);

app.listen(5000, () => {
  console.log("Server is Active");
  console.log("Running locally on: http://localhost:5000");
});

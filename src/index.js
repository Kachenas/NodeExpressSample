const express = require("express");

const bodyParser = require("body-parser");
// const v1Router = require("./v1/routes");
const v1WorkOutRouter = require("./v1/routes/workOutRoutes");

const app = express();

const PORT = process.eventNames.PORT || 3000;

//for testing of first setup
// app.get("/", (req, res) => {
//     res.send("<p>Its Working</p>");
// });

app.use(bodyParser.json());
// app.use("/api/v1", v1Router);
app.use("/api/v1/workouts", v1WorkOutRouter);

app.listen(PORT, () => {
    console.log(`API is listening on PORT ${PORT}`);
});
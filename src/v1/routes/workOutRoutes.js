// In src/v1/routes/workoutRoutes.js
const express = require("express");

const workOutController = require("../../controllers/workOutController");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Get all workouts");
// });
router.get("/", workOutController.getAllWorkouts);

// router.get("/:workoutId", (req, res) => {
//   res.send("Get an existing workout");
// });
router.get("/:workoutId", workOutController.getOneWorkout);

// router.post("/", (req, res) => {
//   res.send("Create a new workout");
// });
router.post("/", workOutController.createNewWorkout);

// router.patch("/:workoutId", (req, res) => {
//   res.send("Update an existing workout");
// });
router.patch("/:workoutId", workOutController.updateOneWorkout);

// router.delete("/:workoutId", (req, res) => {
//   res.send("Delete an existing workout");
// });
router.delete("/:workoutId", workOutController.deleteOneWorkout);

module.exports = router;
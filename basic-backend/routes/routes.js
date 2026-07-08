const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const dataController = require("../controllers/dataController");

router.get("/", homeController);
router.get("/about", aboutController);
router.get("/data", dataController);

router.get("/contact", (req, res) => {
  res.send("Contact us at: contact@example.com");
});

router.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];

  res.json(users);
});

router.get("/users/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    message: `Requested user ID: ${id}`
  });
});

router.get("/search", (req, res) => {
  const name = req.query.name;

  res.send(`You searched for: ${name}`);
});

router.post("/users", (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: "User received successfully",
    user: user
  });
});

let courses = [
  { id: 1, name: "Backend Development" },
  { id: 2, name: "Database Systems" },
  { id: 3, name: "Web Development" }
];

router.get("/courses", (req, res) => {
  res.json(courses);
});

router.get("/courses/:id", (req, res) => {
  const course = courses.find(c => c.id == req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
});

router.post("/courses", (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    name: req.body.name
  };

  courses.push(newCourse);

  res.status(201).json({
    message: "Course added successfully",
    course: newCourse
  });
});

module.exports = router;

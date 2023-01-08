const express = require("express");

const port = 4000;

const app = express();

// Parsing request body
app.use(express.urlencoded());
app.use(express.json());

// Configuring templating engine
app.set("view engine", "ejs");

require("./models");

// Routers
const studentRouter = require("./routes/student");
const teacherRouter = require("./routes/teacher")

app.get("/", (req, res) => {
    res.status(200).render("index.ejs", {
        message: "Welcome to the Home Page!"
    });
});

app.use("/students", studentRouter);
app.use('/teachers', teacherRouter);

app.use((req, res) => {
    res.status(404).render("404.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
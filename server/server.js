const express = require("express");
const app = express();
const db = require("./database/viewModel");
const cors = require("cors");

const port = 1337;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/login", async (req, res) => {
    const foundUser = await db.GetLogin(req.body);
    res.status(200).json(foundUser);
});

app.get("/users", async (req, res) => {
    const users = await db.GetUsers();
    res.status(200).json(users);
});

app.get("/users-photo", async (req, res) => {
    const usersPhoto = await db.GetUsersPhoto();
    res.status(200).json(usersPhoto);
});

app.get("/user/:id", async (req, res) => {
    const photoURL = await db.GetUserPhoto(req.params.id);
    res.status(200).json(photoURL);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
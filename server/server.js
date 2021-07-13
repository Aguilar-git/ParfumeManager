const express = require("express");
const app = express();
const db = require("./database/viewModel");
const cors = require("cors");

const port = 1337;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Находит пользователя по паролю
app.post("/login", async (req, res) => {
    const foundUser = await db.GetLogin(req.body);
    res.status(200).json(foundUser);
});

// Возвращает всю информацию о пользователе
app.get("/users", async (req, res) => {
    const users = await db.GetUsers();
    res.status(200).json(users);
});

// Возвращает фото всех пользователей
app.get("/users-photo", async (req, res) => {
    const usersPhoto = await db.GetUsersPhoto();
    res.status(200).json(usersPhoto);
});

// Возвращает фото пользователя по id
app.get("/user/:id", async (req, res) => {
    const photoURL = await db.GetUserPhoto(req.params.id);
    res.status(200).json(photoURL);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
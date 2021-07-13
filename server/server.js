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

    if (foundUser != undefined) {
        res.status(200).json(foundUser);
    } else {
        res.status(401);
    }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
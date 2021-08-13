const express = require("express");
const app = express();
const db = require("./database/viewModel");
const cors = require("cors");

const port = 1337;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Находит пользоватля по логину и паролю
app.post("/login", async (req, res) => {
    const foundUser = await db.GetUser(req.body)

    if (foundUser != undefined) {
        res.status(200).json(foundUser);
    } else {
        res.status(401);
    }
});

// Добавляет новый продукт
// app.post("/add-product", async (req, res) => {

// });

// Возвращает список продуктов
app.get("/products", async (req, res) => {
    const products = await db.GetPoroducts();

    res.status(200).json(products);
});

// Возвращает список компаний
app.get("/companies", async (req, res) => {
    const сompanies = await db.GetCompanies();

    res.status(200).json(сompanies);
});

// Возвращает список ароматов
app.get("/fragrants", async (req, res) => {
    const fragrant = await db.GetFragrants();

    res.status(200).json(fragrant);
});

// Возвращает историю максимальных объёмов
app.get("/max-volumes", async (req, res) => {
    const maxVolumes = await db.GetMaxVolumes();

    res.status(200).json(maxVolumes);
});

// Возвращает список концентраций
app.get("/concentrations", async (req, res) => {
    const concentrations = await db.GetConcentrations();

    res.status(200).json(concentrations);
});

// Добавление продукта
app.post("/add-product", async (req, res) => {
    const result = await db.AddProduct(req.body);

    res.status(200).json(result);
});



// Регистрация
// app.post("/registration", async (req, res) => {
//     const user = await db.GetUser(req.body)

//     if (user != undefined) {
//         res.status(200).json(user);
//     } else {
//         res.status(401);
//     }
// });



app.listen(port, () => console.log(`Server is running on port ${port}`));
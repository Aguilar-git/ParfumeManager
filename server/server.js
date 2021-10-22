const express = require("express");
const app = express();
const db = require("./database/controller");
const cors = require("cors");

const port = 1337;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Находит пользоватля по логину и паролю
app.post("/login", async (req, res) => {
  try {
    const result = await db.Login(req.body.login, req.body.password);
    if (result !== -1) {
      res.status(200).json(result);
    } else {
      res.status(401).send();
    }
  } catch (error) {
    res.status(400).send();
  }
});

app.post("/registration", async (req, res) => {
  try {
    const result = await db.CreateUser(req.body);

    res.status(201).json(result);
  } catch (error) {
    res.status(400).send();
  }
});

// Возвращает список продуктов
app.post("/products", async (req, res) => {
  try {
    const products = await db.GetPoroducts(req.body.userId);

    res.json(products);
  } catch (error) {
    res.status(400).send();
  }
});

// Возвращает список компаний
app.get("/products/companies", async (req, res) => {
  const сompanies = await db.GetCompanies();

  res.json(сompanies);
});

// Возвращает список ароматов
app.get("/products/fragrants", async (req, res) => {
  const fragrant = await db.GetFragrants();

  res.json(fragrant);
});

// Возвращает историю максимальных объёмов
app.get("/products/max-volumes", async (req, res) => {
  const maxVolumes = await db.GetMaxVolumes();

  res.json(maxVolumes);
});

// Возвращает список концентраций
app.get("/products/concentrations", async (req, res) => {
  const concentrations = await db.GetConcentrations();

  res.json(concentrations);
});

// Добавление нового продукта
app.post("/products/create", async (req, res) => {
  try {
    const result = await db.CreateProduct(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).send();
  }
});

app.delete("/products/delete/:id", async (req, res) => {
  try {
    await db.DeleteProduct(req.params.id);
    res.json({status: "ok"});
  } catch (error) {
    res.status(400).send();
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

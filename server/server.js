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
  const result = await db.CreateUser(req.body);

  res.status(201).json(result);
});

// Возвращает список продуктов
app.get("/products", async (req, res) => {
  const products = await db.GetPoroducts();

  res.status(200).json(products);
});

// Возвращает список компаний
app.get("/product/companies", async (req, res) => {
  const сompanies = await db.GetCompanies();

  res.status(200).json(сompanies);
});

// Возвращает список ароматов
app.get("/product/fragrants", async (req, res) => {
  const fragrant = await db.GetFragrants();

  res.status(200).json(fragrant);
});

// Возвращает историю максимальных объёмов
app.get("/product/max-volumes", async (req, res) => {
  const maxVolumes = await db.GetMaxVolumes();

  res.status(200).json(maxVolumes);
});

// Возвращает список концентраций
app.get("/product/concentrations", async (req, res) => {
  const concentrations = await db.GetConcentrations();

  res.status(200).json(concentrations);
});

// Добавление нового продукта
app.post("/product/create", async (req, res) => {
  try {
    const result = await db.CreateProduct(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send();
  }
});

///////////////////////////////

// app.get("/test/GetMaxVolumeByValue", async (req, res) => {
//   try {
//     const result = await db.GetMaxVolumeByValue(req.query.value);

//     res.status(200).json(result);
//   } catch (error) {
//     res.status(400).send();
//   }
// });

// app.post("/test/AddFragrant", async (req, res) => {
//   try {
//     const result = await db.AddFragrant(req.body);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(400).send();
//   }
// });

app.listen(port, () => console.log(`Server is running on port ${port}`));

const knex = require("./db.config");
const argon2 = require("argon2");

function GetUserByName(login) {
  if (login !== undefined) {
    return knex("Users")
      .where("login", login)
      .select("id");
  }
  return null;
}

async function Login(login, password) {
  const foundUser = await knex("Users")
    .select("id", "password")
    .where("login", login);
  if (foundUser.length > 0) {
    const correctPassword = await argon2.verify(
      foundUser[0].password,
      password
    );
    return correctPassword ? foundUser[0].id : -1;
  }
  return -1;
}

async function CreateUser(user) {
  const foundUser = await GetUserByName(user.login);

  if (foundUser.length === 0) {
    const passwordHashed = await argon2.hash(user.password);

    return knex("Users").insert({
      firstName: user.firstName,
      lastName: user.lastName,
      login: user.login,
      password: passwordHashed,
    });
  }
  return [];
}

function GetPoroducts() {
  return knex("Products")
    .join("MaxVolumes", "MaxVolumes.id", "Products.maxVolumeId")
    .join("Fragrants", "Fragrants.id", "Products.fragrantId")
    .join("Companies", "Fragrants.companyId", "Companies.id")
    .join("Concentrations", "Fragrants.concentrationId", "Concentrations.id")
    .select(
      "Products.id",
      "Products.purchaseVolume",
      "Products.actualVolume",
      "Products.buy",
      "Products.sellPerMilliliter",
      "Products.dateBuy",
      { volume: "MaxVolumes.volumeValue" },
      { fragrant: "Fragrants.fragrantName" },
      { company: "Companies.companyName" }
    );
}

function GetCompanies() {
  return knex("Companies").select("companyName");
}

function GetFragrants() {
  return knex("Fragrants").select("fragrantName");
}

function GetConcentrations() {
  return knex("Concentrations").select("concentrationName");
}

function GetMaxVolumes() {
  return knex("MaxVolumes").select("volumeValue");
}

// Добавление продукта
// product: {
//     "purchaseVolume": 63,
//     "buy": 900,
//     "sellPerMilliliter": 36,
//     "dateBuy": "11.08.2021",
//     "userId": 1,
//     "maxVolumeValue": 100,
//     "fragrantName": "Ricina",
//     "concentrationName": "Духи",
//     "companyName": "V Canto",
// }
async function CreateProduct(product) {
  console.log("product: ", product);
  product.maxVolumeId = await CreateMaxVolume(product.maxVolumeValue);
  console.log("product.maxVolumeId: ", product.maxVolumeId);
  product.fragrantId = await CreateFragrant({
    name: product.fragrantName,
    concentrationName: product.concentrationName,
    companyName: product.companyName,
  });
  console.log("product.fragrantId: ", product.fragrantId);

  return knex("Products")
    .insert({
      purchaseVolume: product.purchaseVolume,
      actualVolume: product.purchaseVolume,
      buy: product.buy,
      sellPerMilliliter: product.sellPerMilliliter,
      dateBuy: product.dateBuy,
      userId: product.userId,
      maxVolumeId: product.maxVolumeId,
      fragrantId: product.fragrantId,
    })
    .then((result) => result[0]);
}

// Добавление аромата
// fragrant: {
//         name,
//         concentrationName,
//         companyName
//     }
async function CreateFragrant(fragrant) {
  fragrant.concentrationId = await CreateConcentration(
    fragrant.concentrationName
  );
  fragrant.companyId = await CreateCompany(fragrant.companyName);

  const result = await GetFragrantByName(
    fragrant.name,
    fragrant.concentrationId
  ).then((result) => {
    if (result[0]) return result[0].id;
    else return -1;
  });

  if (result === -1) {
    const id = await knex("Fragrants")
      .insert({
        fragrantName: fragrant.name,
        concentrationId: fragrant.concentrationId,
        companyId: fragrant.companyId,
      })
      .then((result) => result[0]);
    return id;
  } else return result;
}

async function CreateCompany(name) {
  const result = await GetCompanyByName(name).then((result) => {
    if (result[0]) return result[0].id;
    else return -1;
  });
  if (result === -1) {
    const id = await knex("Companies")
      .insert({ companyName: name })
      .then((result) => result[0]);
    return id;
  } else return result;
}

async function CreateConcentration(name) {
  const result = await GetConcentrationByName(name).then((result) => {
    if (result[0]) return result[0].id;
    else return -1;
  });
  if (result === -1) {
    const id = await knex("Concentrations")
      .insert({ concentrationName: name })
      .then((result) => result[0]);
    return id;
  } else return result;
}

async function CreateMaxVolume(volume) {
  console.log(volume);
  const result = await GetMaxVolumeByValue(volume).then((result) => {
    if (result[0]) return result[0].id;
    else return -1;
  });
  console.log("CreateMaxVolume: result = ", result);
  if (result === -1) {
    const id = await knex("MaxVolumes")
      .insert({ volumeValue: volume })
      .then((result) => result[0]);
    return id;
  } else return result;
}

function GetCompanyByName(name) {
  return knex("Companies")
    .select("id")
    .where("companyName", name);
}

function GetFragrantByName(fragrName, concId) {
  return knex("Fragrants")
    .select("Fragrants.id")
    .where({
      fragrantName: fragrName,
      concentrationId: concId,
    });
}

function GetConcentrationByName(name) {
  return knex("Concentrations")
    .select("id")
    .where("concentrationName", name);
}

function GetMaxVolumeByValue(value) {
  return knex("MaxVolumes")
    .select("id")
    .where("volumeValue", value);
}

module.exports = {
  Login,
  GetPoroducts,
  GetCompanies,
  GetFragrants,
  GetConcentrations,
  GetMaxVolumes,
  CreateProduct,
  CreateUser,
};

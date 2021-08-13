const knex = require("./knex");

function GetUser(user) {
    if (user.login != undefined && user.password != undefined) {
        return knex("Users").where({
            login: user.login,
            password: user.password
        }).select("login");
    }
    else return undefined;
}

function GetPoroducts() {
    return knex('Products')
        .join('MaxVolumes', 'MaxVolumes.id', 'Products.maxVolumeId')
        .join('Fragrants', 'Fragrants.id', 'Products.fragrantId')
        .join('Companies', 'Fragrants.companyId', 'Companies.id')
        .join('Concentrations', 'Fragrants.concentrationId', 'Concentrations.id')
        .select('Products.id', 'Products.purchaseVolume', 'Products.actualVolume', 'Products.buy',
            'Products.sellPerMilliliter', 'Products.dateBuy', { volume: 'MaxVolumes.volumeValue' }, { fragrant: 'Fragrants.fragrantName' }, { company: 'Companies.companyName' });
}

function GetCompanies() {
    return knex('Companies').select('companyName');
}

function GetFragrants() {
    return knex('Fragrants').select('fragrantName');
}

function GetConcentrations() {
    return knex('Concentrations').select('concentrationName');
}

function GetMaxVolumes() {
    return knex('MaxVolumes').select('volumeValue');
}

// Добавление продукта
// product: {
//     "purchaseVolume": 63,
//     "actualVolume": 63,
//     "buy": 900,
//     "sellPerMilliliter": 36,
//     "dateBuy": "11.08.2021",
//     "userId": 1,
//     "maxVolumeValue": 100,
//     "fragrantName": "Ricina",
//     "concentrationName": "Духи",
//     "companyName": "V Canto"
// }
async function AddProduct(product) {

    // Проверка на наличие концентрации в БД, создание записи при её отсутствии 
    let fragrantId = await this.GetFragrantByName(product.fragrantName, product.companyName);

    console.log("fragrantId.length:");
    console.log(fragrantId.length);

    if (fragrantId.length > 0) {
        product.fragrantId = fragrantId[0].id;
    }
    else {
        let concentrationId = await this.GetConcentrationByName(product.concentrationName);
        if (concentrationId.length > 0) {
            product.concentrationId = concentrationId[0].id;
        }
        else {
            await this.AddConcentration(product.concentrationName);
            concentrationId = await this.GetConcentrationByName(product.concentrationName);
            product.concentrationId = concentrationId[0].id;
        }

        // Проверка на наличие компании в БД, создание записи при её отсутствии 
        let companyId = await this.GetCompanyByName(product.companyName);

        console.log("companyId.length:");
        console.log(companyId.length);
        console.log(companyId);

        if (companyId.length > 0) {
            product.companyId = companyId[0].id;
        }
        else {
            await AddCompany(product.companyName);
            companyId = await this.GetCompanyByName(product.companyName);
            product.companyId = companyId[0].id;
        }

        // Проверка на наличие максимального обьёма в БД, создание записи при её отсутствии 
        let maxVolumeId = await this.GetMaxVolumeByValue(product.maxVolumeValue);

        console.log("maxVolumeId.length:");
        console.log(maxVolumeId.length);

        if (maxVolumeId.length > 0) {
            product.maxVolumeId = maxVolumeId[0].id;
        }
        else {
            await this.AddMaxVolume(product.maxVolumeValue);
            maxVolumeId = await this.GetMaxVolumeByValue(product.maxVolumeValue);
            product.maxVolumeId = maxVolumeId[0].id;
        }

        // Проверка на наличие аромата в БД, создание записи при её отсутствии 
        await this.AddFragrant({
            name: product.fragrantName,
            concentrationId: product.concentrationId,
            companyId: product.companyId
        });

        fragrantId = await this.GetFragrantByName(product.fragrantName, product.companyName);
        product.fragrantId = fragrantId[0].id;
    }

    // Добавление продукта
    return knex('Products').insert({
        purchaseVolume: product.purchaseVolume,
        actualVolume: product.actualVolume,
        buy: product.buy,
        sellPerMilliliter: product.sellPerMilliliter,
        dateBuy: product.dateBuy,
        userId: product.userId,
        maxVolumeId: product.maxVolumeId,
        fragrantId: product.fragrantId
    });


}

// Поиск полей по имени
function GetCompanyByName(name) {
    return knex('Companies').select('id').where("companyName", name);
}

function GetFragrantByName(fragrName, concName) {
    return knex('Fragrants').where({
        fragrantName: fragrName,
        concentrationName: concName
    }).select('Fragrants.id')
        .join('Concentrations', 'Fragrants.concentrationId', 'Concentrations.id')

}

function GetConcentrationByName(name) {
    return knex('Concentrations').select('id').where("concentrationName", name);
}

function GetMaxVolumeByValue(name) {
    return knex('MaxVolumes').select('id').where("volumeValue", name);
}
//

// Добавление новых полей в таблицу
function AddCompany(name) {
    return knex('Companies').insert({ companyName: name });
}

function AddFragrant(fragrant) {
    return knex('Fragrants').insert({
        fragrantName: fragrant.name,
        concentrationId: fragrant.concentrationId,
        companyId: fragrant.companyId
    });
}

function AddConcentration(name) {
    return knex('Concentrations').insert({ concentrationName: name });
}

function AddMaxVolume(name) {
    return knex('MaxVolumes').insert({ volumeValue: name });
}
//


module.exports = {
    GetUser,
    GetPoroducts,
    GetCompanies,
    GetFragrants,
    GetConcentrations,
    GetMaxVolumes,
    GetCompanyByName,
    GetFragrantByName,
    GetConcentrationByName,
    GetMaxVolumeByValue,
    AddCompany,
    AddFragrant,
    AddConcentration,
    AddMaxVolume,
    AddProduct
}
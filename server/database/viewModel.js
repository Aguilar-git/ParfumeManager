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

module.exports = {
    GetUser,
    GetPoroducts,
    GetCompanies,
    GetFragrants,
    GetConcentrations,
    GetMaxVolumes
}
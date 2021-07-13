const knex = require("./knex");

function GetLogin(user) {
    if (user.login != undefined && user.password != undefined) {
        return knex("Users").where({
            login: user.login,
            password: user.password
        }).select("login");
    }
    else
        return undefined;
}

function GetUsers() {
    return knex('Users')
        .join("Brigades", 'Users.brigadeId', 'Brigades.id')
        .join("Locations", 'Users.locationId', 'Locations.id')
        .join("Positions", 'Users.positionId', 'Positions.id')
        .select('Users.id', 'Users.login', 'Users.firstName', 'Users.lastName', 'Users.patronymic', 'Users.dateOfBirth', 'Users.ITN', 'Users.passNumber',
            'Users.registration', 'Users.dateOfMedicalExamination', 'Users.dateOfFluorography', 'Users.passportScann', 'Users.registrationScann',
            'Users.userPhoto', { brigade: 'Brigades.name' }, { location: 'Locations.name' }, { position: 'Positions.name' })
        .where('Users.isHidden', 'false');
}

function GetUserPhoto(id) {
    if (id > 0) {
        return knex("Users").where('Users.id', id).select("Users.userPhoto");
    }
    else
        return null;
}

function GetUsersPhoto() {
    return knex("Users").select("Users.userPhoto");
}

module.exports = {
    GetLogin,
    GetUsers,
    GetUserPhoto,
    GetUsersPhoto,
}
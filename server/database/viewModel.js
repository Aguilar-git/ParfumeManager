const knex = require("./knex");

function GetLogin(user) {
    try {
        if (user.login != '' && user.password != '' &&
            user.login != undefined && user.password != undefined) {
            return knex("Users").where({
                login: user.login,
                password: user.password
            }).select("login");
        }
        else
            return null;
    } catch (error) {
        return error;
    }
}

function GetUsers() {
    try {
        return knex('Users')
            .join("Brigades", 'Users.brigadeId', 'Brigades.id')
            .join("Locations", 'Users.locationId', 'Locations.id')
            .join("Positions", 'Users.positionId', 'Positions.id')
            .select('Users.id', 'Users.login', 'Users.firstName', 'Users.lastName', 'Users.patronymic', 'Users.dateOfBirth', 'Users.ITN', 'Users.passNumber',
                'Users.registration', 'Users.dateOfMedicalExamination', 'Users.dateOfFluorography', 'Users.passportScann', 'Users.registrationScann',
                'Users.userPhoto', { brigade: 'Brigades.name' }, { location: 'Locations.name' }, { position: 'Positions.name' })
            .where('Users.isHidden', 'false');
    } catch (error) {
        return error;
    }
}

function GetUserPhoto(id) {
    try {
        if (id > 0) {
            return knex("Users").where('Users.id', id).select("Users.userPhoto");
        }
        else
            return null;
    } catch (error) {
        return error;
    }
}

function GetUsersPhoto() {
    try {
        return knex("Users").select("Users.userPhoto")
            .where('Users.isHidden', 'false');
    } catch (error) {
        return error;
    }
}

module.exports = {
    GetLogin,
    GetUsers,
    GetUserPhoto,
    GetUsersPhoto,
}
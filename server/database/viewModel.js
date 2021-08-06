const knex = require("./knex");

// Находит пользователя по паролю, возвращает "login"
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

// Возвращает всю информацию о пользователях
function GetUsers() {
    try {
        return knex('Users').select('Users.id', 'Users.login', 'Users.firstName', 'Users.lastName', 'Users.patronymic', 'Users.dateOfBirth', 'Users.ITN', 'Users.passNumber',
            'Users.registration', 'Users.dateOfMedicalExamination', 'Users.dateOfFluorography', 'Users.passportScann', 'Users.registrationScann',
            'Users.userPhoto', { brigade: 'Brigades.name' }, { location: 'Locations.name' }, { position: 'Positions.name' })
            .join("Brigades", 'Users.brigadeId', 'Brigades.id')
            .join("Locations", 'Users.locationId', 'Locations.id')
            .join("Positions", 'Users.positionId', 'Positions.id')
            .where('Users.isHidden', 'false');
    } catch (error) {
        return error;
    }
}

// Возвращает URL фото пользователя по id
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

// Возвращает URL фото всех пользователей
function GetUsersPhoto() {
    try {
        return knex("Users").select("Users.userPhoto")
            .where('Users.isHidden', 'false');
    } catch (error) {
        return error;
    }
}

// Архивирование пользователя, возвращает символьное значение 
// true: "1" если успешно, false: "0" если нет (возможно пользоветель не найден).
function UserArchiving(id) {
    try {
        return knex('Users')
            .where('Users.id', id)
            .update('isHidden', 'true');
    } catch (error) {
        return error;
    }
}

// Архивирование пользователя, возвращает символьное значение 
// true: "1" если успешно, false: "0" если нет (возможно пользоветель не найден).
function UnzipAUser(id) {
    try {
        return knex('Users')
            .where('Users.id', id)
            .update('isHidden', 'false');
    } catch (error) {
        return error;
    }
}

// Редактирование пользователя, возвращает символьное значение 
// true: "1" если успешно, false: "0" если нет (возможно пользоветель не найден).
function EditUser(user) {
    try {
        return knex('Users')
            .where('Users.id', user.id)
            .update({
                firstName: user.firstName,
                lastName: user.lastName,
                patronymic: user.patronymic,
                dateOfBirth: user.dateOfBirth,
                ITN: user.ITN,
                passNumber: user.passNumber,
                registration: user.registration,
                dateOfMedicalExamination: user.dateOfMedicalExamination,
                dateOfFluorography: user.dateOfFluorography,
                passportScann: user.passportScann,
                registrationScann: user.registrationScann,
                userPhoto: user.userPhoto,
                brigadeId: user.brigadeId,
                locationId: user.locationId,
                positionId: user.positionId
            });
    } catch (error) {
        return error;
    }
}

module.exports = {
    GetLogin,
    GetUsers,
    GetUserPhoto,
    GetUsersPhoto,
    UserArchiving,
    UnzipAUser,
    EditUser
}
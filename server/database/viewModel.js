const knex = require("./knex");

function GetLogin(user) {
    if (user.login != undefined && user.password != undefined) {
        return knex("Users").where({
            login: user.login,
            password: user.password
        }).select("login");
    }
    else return undefined;
}

module.exports = {
    GetLogin
}
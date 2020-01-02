"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const appuser_1 = require("./../sqlz/models/appuser");
const language_1 = require("../sqlz/models/language");
function create(appUser) {
    return language_1.Language.findOne({
        where: { name: 'fr' },
    })
        .then(language => {
        return appuser_1.AppUser
            .create({
            id: uuid.v1(),
            email: appUser.email,
            pwd: appUser.pwd,
            languageId: language.get('id'),
        });
    });
}
exports.create = create;
function findAll() {
    return appuser_1.AppUser
        .findAll({ include: [{ all: true }] });
}
exports.findAll = findAll;
function login(appUser) {
    return appuser_1.AppUser
        .findOne({
        where: {
            email: appUser.email,
            pwd: appUser.pwd,
        },
        include: [language_1.Language],
    });
}
exports.login = login;

//# sourceMappingURL=appusers.js.map

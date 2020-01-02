"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const language_1 = require("./../sqlz/models/language");
function create(language) {
    return language_1.Language
        .create({
        id: uuid.v1(),
        label: language.label,
        name: language.name,
    });
}
exports.create = create;
function findAll() {
    return language_1.Language
        .findAll();
}
exports.findAll = findAll;

//# sourceMappingURL=languages.js.map

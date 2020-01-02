"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _index_1 = require("./_index");
class Language extends sequelize_1.Model {
}
exports.Language = Language;
class LanguageModel {
}
exports.LanguageModel = LanguageModel;
Language.init({
    label: sequelize_1.STRING(255),
    name: sequelize_1.STRING(50),
}, { sequelize: _index_1.default, modelName: 'Language' });

//# sourceMappingURL=language.js.map

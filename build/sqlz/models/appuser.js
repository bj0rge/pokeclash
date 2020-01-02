"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _index_1 = require("./_index");
const language_1 = require("./language");
class AppUser extends sequelize_1.Model {
}
exports.AppUser = AppUser;
class AppUserModel {
}
exports.AppUserModel = AppUserModel;
AppUser.init({
    email: sequelize_1.STRING(50),
    pwd: sequelize_1.STRING(50),
}, { sequelize: _index_1.default, modelName: 'AppUser' });
AppUser.belongsTo(language_1.Language, {
    foreignKey: 'languageId',
});

//# sourceMappingURL=appuser.js.map

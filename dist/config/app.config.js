"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.PORT = exports.configOptions = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.configOptions = {
    envFilePath: '.env',
    isGlobal: true,
    cache: true,
};
exports.PORT = Number((_a = process.env.APP_PORT) !== null && _a !== void 0 ? _a : 3030);
exports.HOST = String((_b = process.env.APP_HOST) !== null && _b !== void 0 ? _b : '127.0.0.1');
//# sourceMappingURL=app.config.js.map
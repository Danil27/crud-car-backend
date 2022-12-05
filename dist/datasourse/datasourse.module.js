"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasourceModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("../config");
const model_1 = require("./model");
const repository_1 = require("./repository");
let DatasourceModule = class DatasourceModule {
};
DatasourceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({ useClass: config_1.MongooseConfigService }),
            mongoose_1.MongooseModule.forFeature([{ name: model_1.CarModel.name, schema: model_1.CarSchema }]),
        ],
        providers: [repository_1.CarRepoitory],
        exports: [repository_1.CarRepoitory],
    })
], DatasourceModule);
exports.DatasourceModule = DatasourceModule;
//# sourceMappingURL=datasourse.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModule = void 0;
const common_1 = require("@nestjs/common");
const datasourse_module_1 = require("../datasourse/datasourse.module");
const controller_1 = require("./controller");
const service_1 = require("./service");
let CarModule = class CarModule {
};
CarModule = __decorate([
    (0, common_1.Module)({
        imports: [datasourse_module_1.DatasourceModule],
        controllers: [controller_1.CarController],
        providers: [service_1.CarService],
    })
], CarModule);
exports.CarModule = CarModule;
//# sourceMappingURL=car.model.js.map
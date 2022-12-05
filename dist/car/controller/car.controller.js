"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const factory_1 = require("../../utils/factory");
const service_1 = require("../service");
const presenter_1 = require("./presenter");
let CarController = class CarController {
    constructor(carService) {
        this.carService = carService;
    }
    async findAll() {
        const result = await this.carService.findAll();
        return (0, factory_1.factory)(result, presenter_1.CarPresenter);
    }
    async findSortedBy(name, brand) {
        const result = await this.carService.findSortedBy(name, brand);
        return (0, factory_1.factory)(result, presenter_1.CarPresenter);
    }
    async create(body) {
        return new presenter_1.CarPresenter(await this.carService.create(body));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: presenter_1.CarPresenter,
    }),
    (0, swagger_1.ApiOperation)({
        description: 'Получить список всех авто',
    }),
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: presenter_1.CarPresenter,
    }),
    (0, swagger_1.ApiOperation)({
        description: 'Получить список всех авто',
    }),
    (0, common_1.Get)('sort?name=:name&brand=:brand'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Param)('brand')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "findSortedBy", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: presenter_1.CarPresenter,
    }),
    (0, swagger_1.ApiOperation)({
        description: 'Добавить авто',
    }),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "create", null);
CarController = __decorate([
    (0, swagger_1.ApiTags)('Car'),
    (0, common_1.Controller)({ path: 'car' }),
    __metadata("design:paramtypes", [service_1.CarService])
], CarController);
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map
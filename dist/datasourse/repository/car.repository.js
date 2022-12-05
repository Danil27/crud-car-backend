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
exports.CarRepoitory = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const model_1 = require("../model");
let CarRepoitory = class CarRepoitory {
    constructor(carModel) {
        this.carModel = carModel;
    }
    async findAll() {
        return await this.carModel.find();
    }
    async findSortedBy(name, brand) {
        return await this.carModel.find().sort({ name, brand });
    }
    async create(data) {
        return await this.carModel.create(data);
    }
};
CarRepoitory = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(model_1.CarModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CarRepoitory);
exports.CarRepoitory = CarRepoitory;
//# sourceMappingURL=car.repository.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSchema = exports.CarModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CarModel = class CarModel {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], CarModel.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.String, required: true }),
    __metadata("design:type", String)
], CarModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.Number, required: true }),
    __metadata("design:type", Number)
], CarModel.prototype, "production_year", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.Number, required: true }),
    __metadata("design:type", Number)
], CarModel.prototype, "price", void 0);
CarModel = __decorate([
    (0, mongoose_1.Schema)({
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    })
], CarModel);
exports.CarModel = CarModel;
exports.CarSchema = mongoose_1.SchemaFactory.createForClass(CarModel);
//# sourceMappingURL=car.model.js.map
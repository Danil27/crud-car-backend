"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = void 0;
function factory(values, cls) {
    return values.map((val) => new cls(val));
}
exports.factory = factory;
//# sourceMappingURL=factory.js.map
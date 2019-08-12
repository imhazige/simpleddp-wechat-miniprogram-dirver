"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DriverBase_1 = require("./DriverBase");
class UniappDriver extends DriverBase_1.DriverBase {
    get api() {
        return uni;
    }
}
exports.UniappDriver = UniappDriver;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DriverBase_1 = require("./DriverBase");
class WepyDriver extends DriverBase_1.DriverBase {
    get api() {
        return wx;
    }
}
exports.WepyDriver = WepyDriver;

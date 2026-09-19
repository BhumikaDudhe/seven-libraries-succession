"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBeeClient = void 0;
var bee_js_1 = require("@ethersphere/bee-js");
var stewardship_config_1 = require("../../config/stewardship.config");
var beeInstance = null;
var getBeeClient = function () {
    if (!beeInstance) {
        var config = (0, stewardship_config_1.getStewardshipConfig)();
        beeInstance = new bee_js_1.Bee(config.beeApiUrl);
    }
    return beeInstance;
};
exports.getBeeClient = getBeeClient;

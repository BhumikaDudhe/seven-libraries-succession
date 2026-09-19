"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readerService = exports.ReaderService = void 0;
var beeClient_1 = require("./beeClient");
var stewardship_config_1 = require("../../config/stewardship.config");
var ReaderService = /** @class */ (function () {
    function ReaderService() {
        this.bee = (0, beeClient_1.getBeeClient)();
        this.config = (0, stewardship_config_1.getStewardshipConfig)();
    }
    ReaderService.prototype.resolveCurrentPublisher = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rootFeedReader, pointerReference, data, textData, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rootFeedReader = this.bee.feed.createFeedReader('sequence', this.config.stablePointer.rootTopic, this.config.governance.councilAddress);
                        return [4 /*yield*/, rootFeedReader.download()];
                    case 1:
                        pointerReference = _a.sent();
                        return [4 /*yield*/, this.bee.data.download(pointerReference.reference || pointerReference)];
                    case 2:
                        data = _a.sent();
                        textData = typeof data.text === 'function' ? data.text() : new TextDecoder().decode(data);
                        parsed = JSON.parse(textData);
                        if (!parsed.activePublisherAddress) {
                            throw new Error('Stable pointer resolved invalid payload: missing activePublisherAddress');
                        }
                        return [2 /*return*/, parsed.activePublisherAddress];
                }
            });
        });
    };
    ReaderService.prototype.readCatalogue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var activePublisher, catalogueFeedReader, contentRef, rawData, textData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveCurrentPublisher()];
                    case 1:
                        activePublisher = _a.sent();
                        catalogueFeedReader = this.bee.feed.createFeedReader('sequence', 'org.ladakh-spiti.catalogue.entries', activePublisher);
                        return [4 /*yield*/, catalogueFeedReader.download()];
                    case 2:
                        contentRef = _a.sent();
                        return [4 /*yield*/, this.bee.data.download(contentRef.reference || contentRef)];
                    case 3:
                        rawData = _a.sent();
                        textData = typeof rawData.text === 'function' ? rawData.text() : new TextDecoder().decode(rawData);
                        return [2 /*return*/, JSON.parse(textData)];
                }
            });
        });
    };
    return ReaderService;
}());
exports.ReaderService = ReaderService;
exports.readerService = new ReaderService();

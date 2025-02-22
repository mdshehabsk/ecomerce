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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagesWithResulation = void 0;
const sharp_1 = __importDefault(require("sharp"));
// eslint-disable-next-line no-undef
const getImagesWithResulation = (images) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Promise.all(images === null || images === void 0 ? void 0 : images.map((image) => __awaiter(void 0, void 0, void 0, function* () {
        const metadata = yield (0, sharp_1.default)(image.buffer).metadata();
        return Object.assign(Object.assign({}, metadata), image);
    })));
    return result;
});
exports.getImagesWithResulation = getImagesWithResulation;

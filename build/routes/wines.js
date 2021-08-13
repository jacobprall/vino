"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wine_controller_1 = __importDefault(require("../controllers/wine_controller"));
const wineRouter = express_1.Router();
const wineController = new wine_controller_1.default();
wineRouter.get('/wines/:user_id', wineController.get);
exports.default = wineRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const wines_1 = __importDefault(require("./routes/wines"));
const app = express_1.default();
const port = 8080; // default port to listen
// define a route handler for the default home page
app.use(express_1.default.static(path_1.default.resolve('./') + '/build/frontend'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.get('/wines/:user_id', wines_1.default);
app.get('/api', (req, res) => {
    res.send('You have reached the API!');
});
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve('./') + '/build/frontend/index.html');
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

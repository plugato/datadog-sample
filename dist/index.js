"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pino_1 = __importDefault(require("pino"));
const logger = (0, pino_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Use Pino logger middleware
app.use((req, res, next) => {
    logger.info({ method: req.method, url: req.url });
    next();
});
// Define a sample route
app.get('/', (req, res) => {
    res.send('Hello, Express API with Pino Logger in TypeScript!');
});
// Start the Express server
app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.upload = void 0;
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var fs_1 = __importDefault(require("fs"));
var uploadDir = './uploads';
fs_1["default"].mkdirSync(uploadDir, { recursive: true });
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        console.log('file: ', file);
        cb(null, file.originalname);
    }
});
var app = express_1["default"].Router();
app.post('/', (0, multer_1["default"])({ storage: storage }).single('file'), function (req, res) {
    var _a;
    console.log('req.body: ', req.body);
    console.log('req.file: ', req.file);
    console.log('req.baseUrl: ', req.baseUrl);
    res.status(201).json({ url: req.baseUrl + '/' + ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) });
});
app.use(express_1["default"].static(uploadDir));
exports.upload = app;

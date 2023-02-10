"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var morgan_1 = __importDefault(require("morgan"));
var crudity_1 = require("crudity");
var http_1 = require("http");
var auth_1 = require("./auth");
var upload_router_1 = require("./upload/upload.router");
var port = 3000;
var publicDir = "./public";
var app = (0, express_1["default"])();
var server = (0, http_1.createServer)(app);
app.use((0, morgan_1["default"])("tiny"));
app.use((0, express_session_1["default"])({
    name: "photobook.sid",
    secret: "do not change this secret or all session will be reset...",
    resave: false,
    saveUninitialized: true
}));
app.use(express_1["default"].json());
app.use("/api", function (req, res, next) {
    setTimeout(function () {
        next();
    }, 2000);
});
app.use("/api/auth", auth_1.auth);
app.use("/api/upload", auth_1.checkAuth, upload_router_1.upload);
app.use("/api/articles", auth_1.checkAuth, (0, crudity_1.crudity)(server, "articles", {
    pageSize: 100
}));
app.use(express_1["default"].static(publicDir));
app.listen(port, function () {
    console.log("Server started on port ".concat(port));
});

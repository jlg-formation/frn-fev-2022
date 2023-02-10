"use strict";
exports.__esModule = true;
exports.auth = exports.checkAuth = void 0;
var express_1 = require("express");
var app = (0, express_1.Router)();
app.get("/isConnected", function (req, res) {
    if (req.session.user) {
        res.json(req.session.user);
        return;
    }
    res.status(401).end();
});
app.post("/connect", function (req, res) {
    var credentials = req.body;
    console.log("credentials: ", credentials);
    if (credentials.email !== "jlg@jlg.com") {
        res.status(401).end();
        return;
    }
    req.session.user = { displayName: "Jean-Louis GUENEGO" };
    res.json(req.session.user);
});
app.post("/disconnect", function (req, res) {
    req.session.user = undefined;
    res.status(200).end();
});
var checkAuth = function (req, res, next) {
    if (req.session.user === undefined) {
        res.status(401).end();
        return;
    }
    next();
};
exports.checkAuth = checkAuth;
exports.auth = app;

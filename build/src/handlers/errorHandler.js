"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorHandler = exports.unCoughtErrorHandler = void 0;
function unCoughtErrorHandler(err, req, res, next) {
    res.end({ error: err });
}
exports.unCoughtErrorHandler = unCoughtErrorHandler;
function apiErrorHandler(err, req, res, message) {
    const error = { Message: message, Request: req, Stack: err };
    res.json({ Message: message });
}
exports.apiErrorHandler = apiErrorHandler;

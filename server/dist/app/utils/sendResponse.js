"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    const response = {
        success: data.success,
        statusCode: Number(data.statusCode),
        message: data.message,
        data: data.data,
        error: data.error,
    };
    if (data === null || data === void 0 ? void 0 : data.token) {
        response.token = data.token;
    }
    return res.status(response.statusCode).json(response);
};
exports.default = sendResponse;

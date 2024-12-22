"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const main = async (context) => {
    const { text } = context.parameters;
    const response = `fTxhis is definitely coming from a serverless function! You entered: ${text}`;
    return response;
};
exports.main = main;

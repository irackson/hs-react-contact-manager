"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const axios_1 = __importDefault(require("axios"));
const main = async ({ parameters, }) => {
    const { id, email } = parameters;
    if (!id || typeof id !== 'string' || !id.trim()) {
        throw new Error('A valid contact id must be provided');
    }
    const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];
    if (!token) {
        throw new Error('Missing PRIVATE_APP_ACCESS_TOKEN');
    }
    const url = `https://api.hubapi.com/crm/v3/objects/contacts/${id}`;
    try {
        const response = await axios_1.default.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            validateStatus: () => true,
        });
        if (response.status !== 204) {
            throw new Error(`Failed to delete contact. Expected status 204, but got ${response.status}`);
        }
        return { id, email: email || '' };
    }
    catch (error) {
        throw new Error(`Failed to delete contact: ${error}`);
    }
};
exports.main = main;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const axios_1 = __importDefault(require("axios"));
const zod_1 = require("zod");
const CreateContactSuccessSchema = zod_1.z.object({
    id: zod_1.z.string(),
    properties: zod_1.z.record(zod_1.z.unknown()),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    archived: zod_1.z.boolean(),
});
const main = async () => {
    const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];
    if (!token) {
        throw Error('Missing PRIVATE_APP_ACCESS_TOKEN');
    }
    const response = await axios_1.default.post('https://api.hubapi.com/crm/v3/objects/contacts', { properties: {} }, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    const parsedResponse = CreateContactSuccessSchema.safeParse(response.data);
    if (!parsedResponse.success) {
        console.error('Unexpected createContact response:', response.data);
        console.error('Zod error:', parsedResponse.error);
        throw Error('Failed to create contact (invalid response)');
    }
    return { id: parsedResponse.data.id };
};
exports.main = main;

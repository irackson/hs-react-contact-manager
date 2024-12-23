"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const axios_1 = __importDefault(require("axios"));
const zod_1 = require("zod");
const fetchContacts_1 = require("./fetchContacts");
async function waitForContactInSearchIndex(contactId, token, maxAttempts = 15) {
    console.info(`Waiting for contact ${contactId} to appear in search index...`);
    let attempts = 0;
    while (attempts < maxAttempts) {
        attempts += 1;
        console.info(`Calling fetchContactsMain for contact ${contactId} (attempt ${attempts})...`);
        const response = await (0, fetchContacts_1.main)({
            parameters: {
                pageInfo: {
                    offset: 0,
                    limit: 5,
                },
                orderBy: [
                    {
                        propertyName: 'email',
                        ascending: true,
                    },
                    {
                        propertyName: 'hs_createdate',
                        ascending: true,
                    },
                ],
            },
        });
        const targetContact = response.contacts.find(({ _metadata }) => _metadata.id === contactId);
        if (targetContact) {
            console.log(`Found contact ${contactId} in search index! Last modified at ${targetContact.lastmodifieddate}`);
            return;
        }
        await new Promise((r) => setTimeout(r, 500));
    }
    throw new Error(`Timed out waiting for contact ${contactId} to appear in search index.`);
}
const main = async ({ parameters: { waitForSearchIndexUpdate = false }, }) => {
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
    const parsedResponse = zod_1.z
        .object({
        id: zod_1.z.string(),
        properties: zod_1.z.record(zod_1.z.unknown()),
        createdAt: zod_1.z.string(),
        updatedAt: zod_1.z.string(),
        archived: zod_1.z.boolean(),
    })
        .safeParse(response.data);
    if (!parsedResponse.success) {
        console.error('Unexpected createContact response:', response.data);
        console.error('Zod error:', parsedResponse.error);
        throw Error('Failed to create contact (invalid response)');
    }
    const createdContactId = parsedResponse.data.id;
    if (waitForSearchIndexUpdate) {
        try {
            await waitForContactInSearchIndex(createdContactId, token);
        }
        catch (err) {
            console.error(`Contact ${createdContactId} did not show up in search within the time limit.`);
        }
    }
    return { id: createdContactId };
};
exports.main = main;

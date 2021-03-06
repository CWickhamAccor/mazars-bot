module.exports = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    id: 'config',

    type: 'object',
    additionalProperties: false,

    definitions: {
        endpoints: {
            type: 'object',
            additionalProperties: false,
            patternProperties: {
                "^.*$": {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        path: { type: 'string' },
                        method: { type: 'string' },
                        validateInput: { type: 'boolean' },
                        skipsOnError: { type: 'boolean' },
                    },
                    required: ['path', 'method', 'validateInput', 'skipsOnError']
                },
            },
        },
        apiClients: {
            type: 'object',
            additionalProperties: false,
            patternProperties: {
                "^.*$": {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        baseURL: { type: 'string' },
                    }
                },
            },
        },
        firebase: {
            type: 'object',
            additionalProperties: false,
            properties: {
                apiKey: { type: 'string'},
                authDomain: { type: 'string'},
                databaseURL: { type: 'string'},
                projectId: { type: 'string'},
                storageBucket: { type: 'string'},
                messagingSenderId: { type: 'string'},
                appId: { type: 'string'},
            },
        },
        microsoftApp: {
            type: 'object',
            additionalProperties: false,
            properties: {
                id: { type: 'string'},
                password: { type: 'string'},
            },
        },
        database: {
            type: 'object',
            additionalProperties: false,
            properties: {
                host: { type: 'string' },
                user: { type: 'string' },
                password: { type: 'string' },
                database: { type: 'string' },
                multipleStatements: { type: 'boolean' },
                charset: { type: 'string' },
            }
        },
    },

    properties: {
        name: { type: 'string' },
        endpoints: { $ref: '#/definitions/endpoints' },
        port: { type: 'number' },
        validateInput: { type: 'boolean' },
        apiClients: { $ref: '#/definitions/apiClients' },
        skipsOnError: { type: 'boolean' },
        firebase: { $ref: '#/definitions/firebase'},
        microsoftApp: { $ref: '#/definitions/microsoftApp' },
        database: { $ref: '#/definitions/database' },
        dialogflowKeyPath: { type: 'string' },
    },

    required : [
        'name',
        'endpoints',
        'port',
    ],
};

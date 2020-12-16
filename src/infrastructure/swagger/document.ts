export default JSON.parse(`{
    "openapi": "3.0.0",
    "info": {
        "title": "Subscription Manager API",
        "description": "Subscription Manager API",
        "version": "1.0.0"
    },
    "servers": [
        { 
            "url": "http://localhost:3000/api",
            "description": "Develop"
        },
        { 
            "url": "https://subscription-manager.gwmt-staging.k01.gameloft.org/api",
            "description": "Staging"
        }
    ],
    "paths": {
        "/projects": {
            "get": {
                "summary": "list projects",
                "parameters": [
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "default": 0
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "data": {
                                            "type": "array",
                                            "items": {
                                                "$ref": "#components/schemas/Project"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "summary": "create new projects",
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "description": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "name"
                                ]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Success"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    },
                    "422": {
                        "description": "validation error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/projects/{projectId}": {
            "get": {
                "summary": "get project",
                "parameters": [
                    {
                        "name": "projectId",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/Project"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/projects/{projectId}/configs": {
            "get": {
                "summary": "get project config",
                "parameters": [
                    {
                        "name": "projectId",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/ProjectConfig"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "summary": "update project configs",
                "parameters": [
                    {
                        "name": "projectId",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "captchaSecretKey": {
                                        "type": "string"
                                    },
                                    "subscriberSchema": {
                                        "type": "object",
                                        "description": "reference Ajv ( Another JSON schema Validation )",
                                        "properties": {
                                            "properties": {
                                                "type": "object"
                                            },
                                            "required": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    },
                                    "subscriberUniqueFields": {
                                        "type": "string",
                                        "description": "field separate by commas"
                                    }
                                },
                                "required": [
                                    "subscriberSchema"
                                ]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Success"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    },
                    "422": {
                        "description": "validation error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/projects/{projectId}/subscribers": {
            "get": {
                "summary": "list project subscribers",
                "parameters": [
                    {
                        "name": "projectId",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "default": 0
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "data": {
                                            "type": "array",
                                            "items": {
                                                "$ref": "#/components/schemas/ProjectSubscriber"
                                            }
                                        }
                                    },
                                    "example": {
                                        "data": [
                                            {
                                                "_id": "string",
                                                "projectId": "string",
                                                "isPromoted": true,
                                                "...": "any",
                                                "__v": 0
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "summary": "subscribe project",
                "parameters": [
                    {
                        "name": "projectId",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "isPromoted": "boolean",
                                    "captcha": "string",
                                    "...": "any"
                                },
                                "additionalProperties": {
                                    "anyOf": [
                                        { "type": "string" },
                                        { "type": "boolean" },
                                        { "type": "integer" },
                                        { "type": "number" }
                                    ]
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Success"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    },
                    "422": {
                        "description": "validation error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/projects/{projectId}/subscribers/{subscriberId}": {
            "delete": {
                "summary": "unsubscribe project",
                "parameters": [
                    {
                        "name": "projectId",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "subscriberId",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Success"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Error"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "Success": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "success": {
                                "type": "boolean"
                            }
                        }
                    }
                }
            },
            "Error": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "error": {
                                "oneOf": [
                                    { "type": "string" },
                                    { "type": "object" }
                                ]
                            }
                        }
                    }
                },
                "example": {
                    "data": {
                        "error": "string|object"
                    }
                }
            },
            "Project": {
                "type": "object",
                "properties": {
                    "_id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "__v": {
                        "type": "integer"
                    }
                }
            },
            "ProjectConfig": {
                "type": "object",
                "properties": {
                    "_id": {
                        "type": "string"
                    },
                    "projectId": {
                        "type": "string"
                    },
                    "captchaSecretKey": {
                        "type": "string"
                    },
                    "subscriberSchema": {
                        "type": "object",
                        "properties": {
                            "properties": {
                                "type": "object"
                            },
                            "required": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "subscriberUniqueFields": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "__v": {
                        "type": "integer"
                    }
                }
            },
            "ProjectSubscriber": {
                "type": "object",
                "properties": {
                    "_id": {
                        "type": "string"
                    },
                    "projectId": {
                        "type": "string"
                    },
                    "isPromoted": {
                        "type": "boolean"
                    },
                    "__v": {
                        "type": "integer"
                    }
                },
                "additionalProperties": {
                    "anyOf": [
                        { "type": "string" },
                        { "type": "boolean" },
                        { "type": "integer" },
                        { "type": "number" }
                    ]
                }
            }
        }
    }
}`);

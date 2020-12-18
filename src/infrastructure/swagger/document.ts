export default JSON.parse(`{
    "openapi": "3.0.0",
    "info": {
        "title": "Business Requirement API",
        "description": "Business Requirement API",
        "version": "1.0.0"
    },
    "servers": [
        { 
            "url": "${process.env.BASE_URL}/api"
        }
    ],
    "paths": {
        "/subscribers": {
            "get": {
                "summary": "list all subscribers",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "boolean"
                                        },
                                        "subscribers": {
                                            "type": "array",
                                            "items": {
                                                "$ref": "#components/schemas/Subscriber"
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
                "summary": "create new subscribers",
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "email": {
                                        "type": "string"
                                    },
                                    "phone_number": {
                                        "type": "string"
                                    },
                                    "image": {
                                        "type": "file"
                                    }
                                },
                                "required": [
                                    "name",
                                    "email",
                                    "image"
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
        }
    },
    "components": {
        "schemas": {
            "Success": {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean"
                    }
                }
            },
            "Error": {
                "type": "object",
                "properties": {
                    "error": {
                        "oneOf": [
                            { "type": "string" },
                            { "type": "object" }
                        ]
                    }
                },
                "example": {
                    "error": "string|object"
                }
            },
            "Subscriber": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "phoneNumber": {
                        "type": "string"
                    },
                    "imageUrl": {
                        "type": "string"
                    },
                    "createdDate": {
                        "type": "date"
                    },
                    "updatedDate": {
                        "type": "date"
                    }
                }
            }
        }
    }
}`);

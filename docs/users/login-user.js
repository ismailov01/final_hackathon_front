module.exports = {
    post: {
        tags: ['Users'],
        description: 'login user',
        operationId: "loginUser",
        parameters: [],
        requestBody: {
            description: 'properties for login',

            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            email: {
                                type: "string",
                                description: "Email of user",
                                example: "mark@gmail.com",
                            },
                            password: {
                                type: "string",
                                minLength: 3,
                                description: "Password of user",
                                example: "qweqwe123",
                            }
                        },
                        required: ['email', 'password']
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'get tokens',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#components/schemas/Token'
                        }
                    }
                }
            },
            400: {
                description: 'User with given creds not found',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                message: {
                                    type: 'string',
                                    example: "User not found"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
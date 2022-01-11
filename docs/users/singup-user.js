module.exports = {
    post: {
        tags: ['Users'],
        description: 'signup user',
        operationId: "signupUser",
        parameters: [],
        requestBody: {
            description: 'properties for signup',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            firstName: {
                                type: "string",
                                description: "Name of user",
                                example: "Mark"
                            },
                            lastName: {
                                type: "string",
                                description: "Lastname of user",
                                example: "Rashidov"
                            },
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

        }
    }
}
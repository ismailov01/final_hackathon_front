module.exports = {
    components: {
        schemas: {
            User: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        description: "Unique id of user ",
                        example: '1',
                    },
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
                        example: "mark@gmail.com"
                    },
                    password: {
                        type: "string",
                        description: "Password of user",
                        example: "qweqwe123"
                    }
                }
            },
            Problem: {
                type: 'object',
                properties: {
                    id: {
                        type: "number",
                        description: "Unique id of user ",
                        example: '1',
                    },
                    title: {
                        type: 'string',
                    },
                    description: {
                        type: 'string',
                    },
                    tag: {
                        type: 'string',
                        example: 'Java',
                        description: 'Tag is enum, aloowed only(Java, JavaScript, Python, Kotlin)'
                    },
                    replies: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Reply'
                        }
                    },
                    pictures: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: "number",
                                    description: "Unique id of picture ",
                                    example: '1',
                                },
                                image: {
                                    type: 'string',
                                    description: "name of the image"
                                }
                            }
                        }
                    }

                }
            },
            Reply: {
                type: 'object',
                properties: {
                    userId: {
                        type: 'number',
                        description: 'Id of replies author',
                        example: '1'
                    },
                    problemId: {
                        type: 'number',
                        description: 'Id of replies problem',
                        example: '1'
                    },
                    text: {
                        type: 'string',
                        description: 'content of reply',
                        example: 'You should use map instead of foreach'
                    }
                }
            },
            Token: {
                type: 'object',
                properties: {
                    accessToken: {
                        type: "string",
                        description: "this is access token",
                        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                    },
                    refreshToken: {
                        type: "string",
                        description: "this is refresh token",
                        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                    }
                }
            }
        }
    }
}
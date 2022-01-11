module.exports = {
    get: {
        tags: ['Problem'],
        description: 'get one problem',
        operationId: 'getProblem',
        parameters: [
            {
                name: 'id',
                in: "path",
                schema: {
                    type: 'number',
                    description: 'problem id',
                    example: '1'
                },
                required: true,
                description: 'A problem id',
            }
        ],
        responses: {
            200: {
                description: 'one problem',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Problem'
                        }
                    }
                }
            }
        }
    }
}
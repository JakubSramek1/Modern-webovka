"use strict";
exports.__esModule = true;
var graphql_1 = require("@nestjs/graphql");
var posix_1 = require("path/posix");
var definitionsFactory = new graphql_1.GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: posix_1.join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class'
});

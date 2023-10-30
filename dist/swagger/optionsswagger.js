"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ts rest server document",
            version: "1.0.0",
            description: "this is a rest server made with typescript",
            contact: {
                name: "Frank Jimenez",
                url: "https://github.com/FaiaDoragon",
                email: "faiadoragon1@gmail.com"
            }
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 8000}/`
            },
        ],
    },
    apis: ["./routes/*.ts"],
};
exports.default = options;
//# sourceMappingURL=optionsswagger.js.map
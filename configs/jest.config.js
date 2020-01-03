"use strict";

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    rootDir: "../",
    roots: [
        "<rootDir>",
      ],
    modulePaths: [
        "<rootDir>",
    ],
    globals: {
        "ts-jest": {
            tsConfig: "./configs/tsconfig.test.json",
        },
    },    
};
